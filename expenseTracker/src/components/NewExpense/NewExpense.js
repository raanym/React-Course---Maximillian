import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpense) => {

    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString()
    }

    props.onSavedExpenses(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;