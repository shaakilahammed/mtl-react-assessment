import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartIcon from '../Cart/CartIcon';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
