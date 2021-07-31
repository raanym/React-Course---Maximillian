import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Internet & Phone Bill',
      amount: (212 + 424),
      date: new Date(2021, 7, 31)
    },
    {
      id: 'e2',
      title: 'Cosmetics',
      amount: 500,
      date: new Date(2021, 7, 31)
    },
    {
      id: 'e3',
      title: 'Petrol',
      amount: 300,
      date: new Date(2021, 7, 31)
    },
    {
      id: 'e4',
      title: 'Counselling',
      amount: 3900,
      date: new Date(2021, 7, 31)
    }
  ]

  return (
    <div>
      <NewExpense />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
