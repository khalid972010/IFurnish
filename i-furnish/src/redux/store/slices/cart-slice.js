import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  status: "idle",
  error: null,
};

const loadState = async () => {
  try {
    const userID = JSON.parse(localStorage.getItem("userID"));
    const user = await axios.get(`http://localhost:3001/users/${userID}`);
    if (user && user.cart) {
      return user.cart;
    }
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
  }
  return initialState;
};

const saveState = async (state) => {
  try {
    const userID = JSON.parse(localStorage.getItem("userID"));
    const user = await axios.get(`http://localhost:3001/users/${userID}`);
    user.cart = state.cartItems;
    axios.patch(`http://localhost:3001/users/${userID}`, { cart: user.cart });
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadState(),
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      if (typeof newItem === "object" && newItem !== null) {
        let newState = { ...state };
        if (!newState.cartItems) {
          newState.cartItems = [{ ...newItem, quantity: 1 }];
        } else {
          const existingItemIndex = newState.cartItems.findIndex(
            (item) => item.id === newItem.id
          );
          if (existingItemIndex !== -1) {
            // If item exists, update quantity
            newState.cartItems = [...newState.cartItems];
            newState.cartItems[existingItemIndex] = {
              ...newState.cartItems[existingItemIndex],
              quantity: newState.cartItems[existingItemIndex].quantity + 1,
            };
          } else {
            // If item does not exist, add it
            newState.cartItems = [
              ...newState.cartItems,
              { ...newItem, quantity: 1 },
            ];
          }
        }
        saveState(newState);
        return newState;
      } else {
        console.error("Invalid item added to cart:", newItem);
        return state;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const newState = {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== id),
      };
      saveState(newState);
      return newState;
    },
    clearCart(state) {
      const newState = {
        ...state,
        cartItems: [],
      };
      saveState(newState);
      return newState;
    },
    addQuantity(state, action) {
      const id = action.payload;
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      const newState = {
        ...state,
        cartItems: updatedCartItems,
      };
      saveState(newState);
      return newState;
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      const newState = {
        ...state,
        cartItems: updatedCartItems,
      };
      saveState(newState);
      return newState;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  addQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
