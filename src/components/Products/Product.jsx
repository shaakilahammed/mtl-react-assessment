import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/cart-slice';
import CartIcon from '../Cart/CartIcon';
import ViewIcon from '../Cart/ViewIcon';
import classes from './Product.module.css';

const Product = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const addItemToCartHandler = () => {
    console.log(isLoggedIn);
    if (isLoggedIn) dispatch(cartActions.addItemToCart({ ...item }));
    else navigate('/login');
  };
  return (
    <div className={classes.container}>
      <div className={classes.circle} />
      <img className={classes.image} src={item.image} alt={item.name} />
      <div className={classes.info}>
        <div className={classes.name}>{item.name}</div>
        <div className={classes.price}>BDT {item.price}</div>
        <div className={classes.icons}>
          <Link to={`/products/${item.id}`}>
            <div className={classes.icon}>
              <ViewIcon />
            </div>
          </Link>
          <div onClick={addItemToCartHandler} className={classes.icon}>
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
