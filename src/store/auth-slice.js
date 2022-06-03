import { createSlice } from '@reduxjs/toolkit';
const tokenData = localStorage.getItem('token');
let initialState;
if (tokenData) {
  initialState = { token: tokenData, isLoggedIn: true };
} else {
  initialState = { token: null, isLoggedIn: false };
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem('token');
    },

    login(state, action) {
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      localStorage.setItem('token', action.payload.accessToken);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
