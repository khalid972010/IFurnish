import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";
import profileSlice from "./slices/profile-slice";
import cartSlice from "./slices/cart-slice";
import wishlistSlice from "./slices/wish-list-slice";
import userSlice from "./slices/user-slice";
import orderSlice from "./slices/order-slice";

const store = configureStore({
  reducer: {
    products: productSlice,
    profile: profileSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    users: userSlice,
    orders: orderSlice,
  },
});

export default store;
