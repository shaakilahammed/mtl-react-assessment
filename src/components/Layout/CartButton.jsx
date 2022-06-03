import React, { useEffect } from 'react';
import CartIcon from '../Cart/CartIcon';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default CartButton;
