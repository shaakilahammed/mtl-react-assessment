import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/cart-slice';
import classes from './Cart.module.css';
import CartItem from './CartItem';
const Cart = () => {
  const nameInputRef = useRef('');
  const phoneInputRef = useRef('');
  const addressInputRef = useRef('');

  const dispatch = useDispatch();

  const [nameIsValid, setNameIsValid] = useState(true);
  const [phoneIsValid, setPhoneIsValid] = useState(true);
  const [addressIsValid, setAddressIsValid] = useState(true);

  const [checkOut, setCheckout] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const totalItems = useSelector((state) => state.cart.totalQuantity);
  const checkoutProceed = () => {
    setCheckout(true);
  };

  const orderHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const enteredNameIsValid = enteredName.trim().length > 0;
    setNameIsValid(enteredNameIsValid);

    const enteredPhoneIsValid = enteredPhone.trim().length === 11;
    setPhoneIsValid(enteredPhoneIsValid);

    const enteredAddressIsValid = enteredAddress.trim().length > 0;
    setAddressIsValid(enteredAddressIsValid);

    const formIsValid =
      enteredNameIsValid && enteredPhoneIsValid && enteredAddressIsValid;

    if (!formIsValid) return;

    console.log(enteredNameIsValid, enteredAddress, enteredPhone);
    nameInputRef.current.value = '';
    addressInputRef.current.value = '';
    phoneInputRef.current.value = '';

    alert('Order has been placed successfully...');
    dispatch(cartActions.clearCart());
  };
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
            <span className={classes.topText}>
              Shopping Bag({cartItems.length})
            </span>
          </div>
          <div></div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.info}>
            {cartItems.map((product) => (
              <CartItem key={product.id} {...product} />
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
            {!checkOut && (
              <button onClick={checkoutProceed} className={classes.button}>
                PROCEED TO CHECKOUT
              </button>
            )}
            {checkOut && (
              <form onSubmit={orderHandler}>
                <div className={classes.control}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" ref={nameInputRef} />
                  {!nameIsValid && (
                    <p className={classes.invalid}>Name is required</p>
                  )}
                </div>
                <div className={classes.control}>
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" ref={addressInputRef} />
                  {!addressIsValid && (
                    <p className={classes.invalid}>Address is required</p>
                  )}
                </div>
                <div className={classes.control}>
                  <label htmlFor="phone">Phone</label>
                  <input type="number" id="phone" ref={phoneInputRef} />
                  {!phoneIsValid && (
                    <p className={classes.invalid}>
                      Phone Number must be 11 digit long
                    </p>
                  )}
                </div>
                <div className={classes.actions}>
                  <button>Place Order</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
