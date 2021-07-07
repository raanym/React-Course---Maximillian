import { useState } from 'react';

import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);


  const saveExpenseDataHandler = (enteredExpenseData) => {


    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    };

    props.onAddExpense(expenseData);
  }

  const setEditHandler = () => {
    setIsEditing(true);
  }

  const cancelForm = () => {
    setIsEditing(false);
  }



  return (
    <div className='new-expense'>
      {!isEditing &&
        <button onClick={setEditHandler}>Add Expenses</button>}
      {isEditing &&
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelForm}
        />}
    </div>
  );
}

export default NewExpense;