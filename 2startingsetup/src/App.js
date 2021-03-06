import { useState } from 'react';

import Expense from './components/Expenses/Expense'
import NewExpense from './components/NewExpense/NewExpense'

const dummyData = [
  { id: 'e1', title: 'Internet Bill', amount: 424, date: new Date(2021, 6, 3) },
  { id: 'e2', title: 'Phone Bill', amount: 212, date: new Date(2021, 6, 3) },
  { id: 'e3', title: 'Dinner Night: Lasgna', amount: 140, date: new Date(2021, 6, 3) },
  { id: 'e4', title: 'Dinner: Torpedo Submarine', amount: 90, date: new Date(2021, 6, 3) },
  { id: 'e5', title: 'Foldable Table', amount: 490, date: new Date(2020, 6, 3) }
]

const App = () => {
  const [expenses, setExpenses] = useState(dummyData);

  const addExpenseHandler = expense => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  }

  // console.log(expList);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
