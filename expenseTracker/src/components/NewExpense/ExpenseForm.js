import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (e) => {
    if (e.target.value.length > 0) {
      setTitle(e.target.value);
    }
  }

  const amountChangeHandler = (e) => {
    if (e.target.value.length > 0 && e.target.value > 0) {
      setAmount(e.target.value);
    }
  }

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  }


  const submitHandler = (e) => {

    const formData = {
      title,
      amount,
      date: new Date(date)
    }

    props.onSaveExpenseData(formData);

    setTitle('');
    setAmount('');
    setDate('');

    e.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'
            onChange={titleChangeHandler}
            value={title} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number'
            onChange={amountChangeHandler}
            value={amount} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
            value={date} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;