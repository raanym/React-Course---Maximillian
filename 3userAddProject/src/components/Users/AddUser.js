import { useState, Fragment } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {

  const [enteredName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');

  const formHandler = (e) => {

    e.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'invalid Input',
        message: 'Please enter a valid name and age (non-empty).'
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'invalid Age',
        message: 'Please enter a valid age (greater than 0).'
      })
      return;
    }


    const user = {
      name: enteredName,
      age: enteredAge
    }

    props.onUserData(user);

    setEnteredUserName('');
    setEnteredAge('');

  }

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  }

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Fragment>
      {
        error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler} />
      }
      <Card className={classes.input}>
        <form onSubmit={formHandler}>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' onChange={userNameChangeHandler} value={enteredName} />
          <label htmlFor='age'>Age</label>
          <input type='number' id='age' onChange={ageChangeHandler} value={enteredAge} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Fragment>

  )
}

export default AddUser;