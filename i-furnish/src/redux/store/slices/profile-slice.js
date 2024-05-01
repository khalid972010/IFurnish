import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProfile = createAsyncThunk("profile/getProfile", async (id) => {
  const response = await axios.get(`http://localhost:3001/users/${id}`);
  return response.data;
});

export const UpdateProfile = createAsyncThunk(
  "profile/UpdateProfile",
  async (profile) => {
    console.log("hi");
    const oldProfile = (
      await axios.get(`http://localhost:3001/users/${profile.id}`)
    ).data;

    const newProfile = { ...oldProfile, ...profile };
    const response = await axios.put(
      `http://localhost:3001/users/${profile.id}`,
      newProfile
    );
    return response.data;
  }
);
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.profile = action.payload;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(UpdateProfile.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(UpdateProfile.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.profile = action.payload;
    });
    builder.addCase(UpdateProfile.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default profileSlice.reducer;
