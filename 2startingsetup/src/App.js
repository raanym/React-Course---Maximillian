import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    { id: 'e1', title: 'Internet Bill', amount: 424, date: new Date(2021, 6, 3) },
    { id: 'e2', title: 'Phone Bill', amount: 212, date: new Date(2021, 6, 3) },
    { id: 'e3', title: 'Dinner Night: Lasgna', amount: 140, date: new Date(2021, 6, 3) },
    { id: 'e4', title: 'Dinner: Torpedo Submarine', amount: 90, date: new Date(2021, 6, 3) },
    { id: 'e5', title: 'Foldable Table', amount: 490, date: new Date(2021, 6, 3) }
  ]

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date} />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date} />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date} />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date} />
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date} />
    </div >
  );
}

export default App;
