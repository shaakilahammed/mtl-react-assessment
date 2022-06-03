import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { cartActions } from '../../store/cart-slice';

import classes from './ProductDetail.module.css';

const ProductDetail = () => {
  const productId = useParams().id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          'http://localhost:4000/products/' + productId
        );
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };
    getProduct();
  }, [productId]);

  const addToCartHandler = () => {
    if (isLoggedIn)
      dispatch(cartActions.addMultipleItemToCart({ ...product, quantity }));
    else navigate('/login');
  };

  const handleQuantity = (type) => {
    if (type === 'dec') {
      setQuantity((quantity) => (quantity > 1 ? quantity - 1 : quantity));
    } else {
      setQuantity((quantity) => quantity + 1);
    }
  };
  if (isLoading) {
    return <p className={classes.loader}>Loading.....</p>;
  }
  if (Object.keys(product).length === 0) {
    return <p className={classes.loader}>No Product Found.....</p>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={product?.image}
            alt={product?.name}
          />
        </div>
        <div className={classes.infoContainer}>
          <h1 className={classes.title}>{product?.name}</h1>
          <p className={classes.desc}>{product?.description}</p>
          <p className={classes.desc}>Category: {product?.category}</p>
          <span className={classes.price}>BDT {product?.price}</span>

          <div className={classes.addContainer}>
            <div className={classes.ammountContainer}>
              <span
                className={classes.incDecCart}
                onClick={() => handleQuantity('dec')}
              >
                -
              </span>
              <span className={classes.ammount}>{quantity}</span>
              <span
                className={classes.incDecCart}
                onClick={() => handleQuantity('inc')}
              >
                +
              </span>
            </div>
            <button onClick={addToCartHandler} className={classes.button}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
