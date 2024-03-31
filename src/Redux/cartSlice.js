import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.loading = true;
      state.cart.push(action.payload);
      state.loading = false;
    },
    removeFavorite: (state, action) => {
      state.loading = true;
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.loading = false;
    },
  },
});

export const { addFavorite, removeFavorite } = cartSlice.actions;

export default cartSlice.reducer;
