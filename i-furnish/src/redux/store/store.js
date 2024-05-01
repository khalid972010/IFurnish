import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";
import profileSlice from "./slices/profile-slice";

const store = configureStore({
  reducer: {
    products: productSlice,
    profile: profileSlice,
  },
});

export default store;
