import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";
import cartSlice from "./slices/cart-slice";

const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});

export default store;
