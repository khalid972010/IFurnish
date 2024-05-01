import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";
import profileSlice from "./slices/profile-slice";
import cartSlice from "./slices/cart-slice";

const store = configureStore({
  reducer: {
    products: productSlice,
    profile: profileSlice,
    cart: cartSlice,
  },
});

export default store;
