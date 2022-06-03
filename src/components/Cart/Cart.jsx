import React from 'react';
import classes from './Cart.module.css';
const Cart = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>YOUR BAG</h1>
        <div className={classes.top}>
          <button className={classes.topButton}>CONTINUE SHOPPING</button>
          <div className={classes.topTexts}>
            <span className={classes.topText}>Shopping Bag (2)</span>
          </div>
          <button className={classes.topButton} type="filled">
            CHECKOUT NOW
          </button>
        </div>
        <div className={classes.bottom}>
          <div className={classes.info}>
            <>
              <div className={classes.product}>
                <div className={classes.productDetail}>
                  <img className={classes.image} src="sss" alt={'sss'} />
                  <div className={classes.details}>
                    <span className={classes.productName}>
                      <b>Product:</b> ProductName
                    </span>
                    <span className={classes.productcategory}>
                      <b>Category:</b> ProductCategory
                    </span>
                  </div>
                </div>
                <div className={classes.priceDetail}>
                  <div className={classes.productAmountContainer}>
                    <span>+</span>
                    <div className={classes.productAmount}>ProductQuantity</div>
                    <span>-</span>
                  </div>

                  <div className={classes.productPrice}>
                    BDT ProductPrice * productquantity
                  </div>
                </div>
              </div>
              <div className={classes.hr} />
            </>
          </div>
          <div className={classes.summary}>
            <h1 className={classes.summaryTitle}>ORDER SUMMARY</h1>
            <div className={classes.summaryItem}>
              <span>Subtotal</span>
              <span>BDT cartTotal</span>
            </div>
            <div className={classes.summaryItem}>
              <span>Shipping Charge</span>
              <span>$ 5</span>
            </div>
            <div className={classes.summaryItem}>
              <span>Discount</span>
              <span>$ -5</span>
            </div>
            <div className={classes.summaryItem} type="total">
              <span>Total</span>
              <span>$ CartTotal</span>
            </div>

            <button className={classes.button}>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
