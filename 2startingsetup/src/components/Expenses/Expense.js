import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expense.css';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className='expenses' >
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map(expense => {
        return <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      })}
    </Card >
  );
}

export default Expense;