import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css';
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const totalItems = useSelector((state) => state.cart.totalQuantity);

  if (totalItems === 0) {
    return (
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>YOUR BAG IS EMPTY</h1>
          <div className={classes.top}>
            <div></div>
            <Link to="/">
              <button className={classes.topButton}>CONTINUE SHOPPING</button>
            </Link>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>YOUR BAG</h1>
        <div className={classes.top}>
          <Link to="/">
            <button className={classes.topButton}>CONTINUE SHOPPING</button>
          </Link>
          <div className={classes.topTexts}>
            <span className={classes.topText}>Shopping Bag({totalItems})</span>
          </div>
          <div></div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.info}>
            {cartItems.map((product) => (
              <div key={product.id}>
                <div className={classes.product}>
                  <div className={classes.productDetail}>
                    <img
                      className={classes.image}
                      src={product.image}
                      alt={product.name}
                    />
                    <div className={classes.details}>
                      <span className={classes.productName}>
                        <b>Product:</b> {product.name}
                      </span>
                      <span className={classes.productcategory}>
                        <b>Category:</b> {product.category}
                      </span>
                    </div>
                  </div>
                  <div className={classes.priceDetail}>
                    <div className={classes.productAmountContainer}>
                      <span>+</span>
                      <div className={classes.productAmount}>
                        {product.quantity}
                      </div>
                      <span>-</span>
                    </div>

                    <div className={classes.productPrice}>
                      BDT {product.totalPrice}
                    </div>
                  </div>
                </div>
                <div className={classes.hr} />
              </div>
            ))}
          </div>
          <div className={classes.summary}>
            <h1 className={classes.summaryTitle}>ORDER SUMMARY</h1>
            <div className={classes.summaryItem}>
              <span>Subtotal</span>
              <span>BDT {subTotal}</span>
            </div>
            <div className={classes.summaryItem}>
              <span>Shipping Charge</span>
              <span>BDT 50</span>
            </div>
            <div className={classes.summaryItem}>
              <span>Discount</span>
              <span>BDT -50</span>
            </div>
            <div className={classes.summaryItem} type="total">
              <span>Total</span>
              <span>BDT {subTotal}</span>
            </div>

            <button className={classes.button}>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
