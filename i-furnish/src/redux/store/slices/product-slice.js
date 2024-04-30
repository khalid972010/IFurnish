import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPrds = createAsyncThunk("products/getAllPrds", async () => {
  const response = await axios.get("http://localhost:3001/products");
  return response.data;
});

export const getPrdsByCategories = createAsyncThunk(
  "products/getPrdsByCategories",
  async (categories) => {
    const response = await axios.get("http://localhost:3001/products");
    return response.data.filter((p) => categories.includes(p.category));
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: null,
    selectedCategories: [],
  },
  reducers: {
    toggleCategory: (state, action) => {
      const index = state.selectedCategories.indexOf(action.payload);
      if (index === -1) {
        state.selectedCategories.push(action.payload);
      } else {
        state.selectedCategories.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPrds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllPrds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getAllPrds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getPrdsByCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPrdsByCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getPrdsByCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { toggleCategory } = productSlice.actions;
export default productSlice.reducer;
