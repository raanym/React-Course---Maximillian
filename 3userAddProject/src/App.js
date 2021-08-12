import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


const dummy = [
  {
    name: 'raaneem',
    age: 20
  }
]

function App() {

  const [users, setUsers] = useState(dummy);

  const userDataHandler = (user) => {

    setUsers((prevState) => {
      return [
        ...prevState,
        user
      ]
    });

  }


  return (
    <div>
      <AddUser onUserData={userDataHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
