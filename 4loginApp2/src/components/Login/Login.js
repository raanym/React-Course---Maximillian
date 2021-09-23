import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../Store/auth-context';
import Input from '../UI/Input/Input';

const formReducer = (state, action) => {

  const formValidator = (email, password) => {
    return email.includes('@') && password.trim().length > 6;
  }

  if (action.type === 'INPUT_EMAIL') {

    return {
      email: action.value,
      emailIsValid: action.value.includes('@'),
      password: state.password,
      passwordIsValid: state.passwordIsValid
      // formIsValid: formValidator(action.value, state.password)
    }
  }

  if (action.type === 'BLUR_EMAIL') {
    return {
      email: state.email,
      emailIsValid: state.email.includes('@'),
      password: state.password,
      passwordIsValid: state.passwordIsValid
      // formIsValid: formValidator(state.email, state.password)
    }
  }

  if (action.type === 'INPUT_PASSWORD') {
    return {
      email: state.email,
      emailIsValid: state.emailIsValid,
      password: action.value,
      passwordIsValid: action.value.trim().length > 6
      // formIsValid: formValidator(state.email, action.value)
    }
  }

  if (action.type === 'BLUR_PASSWORD') {
    return {
      email: state.email,
      emailIsValid: state.emailIsValid,
      password: state.password,
      passwordIsValid: state.password.trim().length > 6
      // formIsValid: formValidator(state.email, state.password)
    }
  }

  return {
    email: '',
    emailIsValid: false,
    password: '',
    passwordIsValid: false
    // formIsValid: false
  }
}

const Login = (props) => {

  const ctx = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [formState, dispatchForm] = useReducer(formReducer, {
    email: '',
    emailIsValid: null,
    password: '',
    passwordIsValid: null
    // formIsValid: false
  });

  // useEffect(() => {
  //   console.log('EFFECT Running');

  //   return () => {
  //     console.log('clean up');
  //   }
  // }, [enteredPassword]);

  const { emailIsValid, passwordIsValid } = formState;


  useEffect(() => {

    const identifier = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      )
      console.log('Checking form validity');
    }, 500);

    return () => {
      clearTimeout(identifier);
      console.log('clean up');
    }

  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {

    dispatchForm({
      type: 'INPUT_EMAIL',
      value: event.target.value
    });

    // setEnteredEmail(event.target.value);
    setFormIsValid(formState.emailIsValid && formState.passwordIsValid);

  };

  const passwordChangeHandler = (event) => {
    dispatchForm({
      type: 'INPUT_PASSWORD',
      value: event.target.value
    })

    // setEnteredPassword(event.target.value);
    setFormIsValid(formState.emailIsValid && formState.passwordIsValid);
  };

  const validateEmailHandler = () => {
    dispatchForm({
      type: 'BLUR_EMAIL'
    })
    // setEmailIsValid(emailState.isValid);
  };

  const validatePasswordHandler = () => {
    dispatchForm({
      type: 'BLUR_PASSWORD'
    })
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      ctx.onLogin();
    } else if (!emailIsValid) {
      emailInputRef.current.activateFocus();
    } else {
      passwordInputRef.current.activateFocus();
    }
  };


  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input type='email'
          id='email'
          value={formState.email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          label='E-mail'
          isValid={emailIsValid}
          ref={emailInputRef}
        />
        <Input type='password'
          id='password'
          value={formState.password}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          label='Password'
          isValid={passwordIsValid}
          ref={passwordInputRef}
        />
        {/* <div
          className={`${classes.control} ${formState.emailIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} /*disabled={!formIsValid}*/>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
