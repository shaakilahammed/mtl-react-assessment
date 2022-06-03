import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions } from '../../store/auth-slice';
import CartButton from './CartButton';
import classes from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>E-Commerce</div>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/login">
                <button className={classes.logoutButton}>Login</button>
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <>
              <li>
                <CartButton />
              </li>
              <li>
                <button
                  onClick={logoutHandler}
                  className={classes.logoutButton}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
