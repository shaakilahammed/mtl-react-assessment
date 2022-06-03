import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  subTotal: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      //   console.log(existingItem, newItem);
      state.totalQuantity++;
      // state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          category: newItem.category,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = +existingItem.totalPrice + +newItem.price;
      }
      state.subTotal += +newItem.price;
    },
    addMultipleItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      console.log(newItem);
      state.totalQuantity = state.totalQuantity + newItem.quantity;
      // state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
          name: newItem.name,
          category: newItem.category,
          image: newItem.image,
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice =
          +existingItem.totalPrice + +newItem.price * +newItem.quantity;
      }
      state.subTotal = state.subTotal + +newItem.price * +newItem.quantity;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      console.log(existingItem.quantity);
      state.totalQuantity--;
      // state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.subTotal -= existingItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
