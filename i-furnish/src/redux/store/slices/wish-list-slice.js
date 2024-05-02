import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  wishlistItems: [],
  status: "idle",
  error: null,
};

const loadState = async () => {
  try {
    const userID = JSON.parse(localStorage.getItem("userID"));
    const user = await axios.get(`http://localhost:3001/users/${userID}`);
    if (user && user.wishlist) {
      return user.wishlist;
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
    user.wishlist = state.wishlistItems;
    axios.patch(`http://localhost:3001/users/${userID}`, {
      wishlist: user.wishlist,
    });
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: loadState(),
  reducers: {
    addItemToFavorites(state, action) {
      const newItem = action.payload;
      if (typeof newItem === "object" && newItem !== null) {
        if (!state.wishlistItems) {
          const newState = {
            ...state,
            wishlistItems: [{ ...newItem }],
          };
          console.log("11111");
          alert("Added successfully To Favorites");

          saveState(newState);
          return newState;
        }
        const existingItem = state.wishlistItems.find(
          (item) => item.id === newItem.id
        );
        if (existingItem) {
          const newState = {
            ...state,
            wishlistItems: [
              ...state.wishlistItems.filter((w) => w.id !== existingItem.id),
            ],
          };
          saveState(newState);
          alert("Removed successfully from favorites!");

          return newState;
        } else {
          // If item does not exist, add it
          const newState = {
            ...state,
            wishlistItems: [...state.wishlistItems, { ...newItem }],
          };
          alert("Added successfully to favorites");
          saveState(newState);
          return newState;
        }
      } else {
        console.error("Invalid item added to favorites:", newItem);
        return state;
      }
    },
    removeItemFromFav(state, action) {
      const item = action.payload;
      const id = item.id;
      const newState = {
        ...state,
        wishlistItems: state.wishlistItems.filter((item) => item.id !== id),
      };
      saveState(newState);
      return newState;
    },
  },
});

export const { addItemToFavorites, removeItemFromFav } = wishListSlice.actions;

export default wishListSlice.reducer;
