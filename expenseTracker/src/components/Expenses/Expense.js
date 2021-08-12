import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

import './Expense.css';

const Expense = (props) => {

  console.log(props.expenses);

  const [selectedYear, setSelectedYear] = useState(2021);

  const filteredYearHandler = (year) => {
    setSelectedYear(parseInt(year));
  }

  const filteredExpenses = props.expenses.filter(expense => {
    if (selectedYear === expense.date.getFullYear()) {
      return expense;
    }
  });


  return (
    <Card className='expenses'>
      <ExpenseFilter selected={selectedYear} onExpenseFilterChange={filteredYearHandler} />

      {(filteredExpenses.length > 0)
        ? filteredExpenses.map(expense => {
          return <ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            key={expense.id} />
        })
        : <p style={{ 'text-align': 'center', 'color': '#fff' }}>No expenses found</p>
      }
    </Card>
  )
}

export default Expense;