import React from 'react';
import CartButton from './CartButton';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>E-Commerce</div>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
          <li>
            <button className={classes.logoutButton}>Login</button>
          </li>
          <li>
            <button className={classes.logoutButton}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
