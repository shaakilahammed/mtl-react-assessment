import React, { useState, useRef } from 'react';

import classes from './AuthForm.module.css';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const emailInputRef = useRef('');
  const passwordInputRef = useRef('');
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const enteredEmailIsValid = enteredEmail
      .trim()
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    setEmailIsValid(enteredEmailIsValid);

    const enteredPasswordIsValid = enteredPassword.trim().length >= 6;
    setPasswordIsValid(enteredPasswordIsValid);

    const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;

    if (!formIsValid) return;
    console.log('valid');
    setIsLoading(true);

    let url;
    if (isLogin) {
      url = 'http://localhost:4000/login';
    } else {
      url = 'http://localhost:4000/register';
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = 'Authentication Failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailInputRef} type="email" id="email" />
          {!emailIsValid && (
            <p className={classes.invalid}>Invalid Email address</p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={passwordInputRef} type="password" id="password" />
          {!passwordIsValid && (
            <p className={classes.invalid}>
              Password must be 6 characters long
            </p>
          )}
        </div>
        <div className={classes.actions}>
          <button disabled={isLoading}>
            {!isLoading && (isLogin ? 'Login' : 'Create Account')}
            {isLoading && 'Loading...'}
          </button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
