import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../lib/api-client";
import toast from "react-hot-toast";

// register Action
export const registerAction = createAsyncThunk(
  "users/register",
  async (user) => {
    try {
      const { data } = await apiClient.post("/users/register", user);
      toast.success(data.message);
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "An error occurred";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  }
);

// Slices
const usersSlice = createSlice({
  name: "users",
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAction.pending, (state) => {
        state.loading = true;
        state.appErr = null;
        state.serverErr = null;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.loading = false;
        state.activationToken = action.payload?.token;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.error?.message;
        state.serverErr = action?.error?.message;
      });
  },
});

export default usersSlice.reducer;
