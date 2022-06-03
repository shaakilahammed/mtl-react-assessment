import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './Product.module.css';

const Product = ({ item }) => {
  return (
    <div className={classes.container}>
      <div className={classes.circle} />
      <img className={classes.image} src={item.image} alt={item.name} />
      <div className={classes.info}>
        <div className={classes.name}>{item.name}</div>
        <div className={classes.price}>BDT {item.price}</div>
        <div className={classes.icon}>
          <CartIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
