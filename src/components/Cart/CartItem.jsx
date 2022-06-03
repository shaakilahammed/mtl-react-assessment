import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const disptach = useDispatch();

  const handleQuantity = (type) => {
    if (type === 'dec') {
      disptach(cartActions.removeItemFromCart(props.id));
    } else {
      disptach(cartActions.addItemToCart({ ...props }));
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.product}>
        <div className={classes.productDetail}>
          <img className={classes.image} src={props.image} alt={props.name} />
          <div className={classes.details}>
            <span className={classes.productName}>
              <b>Product:</b> {props.name}
            </span>
            <span className={classes.productcategory}>
              <b>Category:</b> {props.category}
            </span>
          </div>
        </div>
        <div className={classes.priceDetail}>
          <div className={classes.productAmountContainer}>
            <span
              onClick={() => handleQuantity('inc')}
              className={classes.incDecCart}
            >
              +
            </span>
            <div className={classes.productAmount}>{props.quantity}</div>
            <span
              onClick={() => handleQuantity('dec')}
              className={classes.incDecCart}
            >
              -
            </span>
          </div>

          <div className={classes.productPrice}>BDT {props.totalPrice}</div>
        </div>
      </div>
      <div className={classes.hr} />
    </div>
  );
};

export default CartItem;
