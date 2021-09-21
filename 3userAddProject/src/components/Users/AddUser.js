import { useState, Fragment, useRef } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredName, setEnteredUserName] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');

  const formHandler = (e) => {

    e.preventDefault();
    const enteredNameRefVal = nameInputRef.current.value;
    const enteredAgeRefVal = ageInputRef.current.value;

    if (enteredAgeRefVal.trim().length === 0 || enteredAgeRefVal.trim().length === 0) {
      setError({
        title: 'invalid Input',
        message: 'Please enter a valid name and age (non-empty).'
      });
      return;
    }

    if (+enteredAgeRefVal < 1) {
      setError({
        title: 'invalid Age',
        message: 'Please enter a valid age (greater than 0).'
      })
      return;
    }


    const user = {
      name: enteredNameRefVal,
      age: enteredAgeRefVal
    }

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

    props.onUserData(user);

    // setEnteredUserName('');
    // setEnteredAge('');

  }

  // const userNameChangeHandler = (e) => {
  //   setEnteredUserName(e.target.value);
  // }

  // const ageChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // }

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
          <input ref={nameInputRef} type='text' id='username' />
          <label htmlFor='age'>Age</label>
          <input ref={ageInputRef} type='number' id='age' />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Fragment>

  )
}

export default AddUser;