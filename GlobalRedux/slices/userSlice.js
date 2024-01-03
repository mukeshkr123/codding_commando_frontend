"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../lib/api-client";
import toast from "react-hot-toast";

// register Action
export const registerAction = createAsyncThunk(
  "users/register",
  async (registerData, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.post("/users/register", registerData);
      toast.success(data.message);
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Internal server error";
      toast.error(errorMessage);
      return rejectWithValue(error?.response?.data);
    }
  }
);

// login Action
export const loginUserAction = createAsyncThunk(
  "users/login",
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.post("/users/login", loginData);
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      toast.success(data.message);
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Internal Server Error";
      toast.error(errorMessage);
      return rejectWithValue(error?.response?.data);
    }
  }
);

// activation actions

// logout Action
export const logoutAction = createAsyncThunk(
  "users/logout",
  async (payload, { rejectWithValue }) => {
    try {
      localStorage.removeItem("userInfo");
    } catch (error) {
      toast.error("Something went wrong");
      return rejectWithValue(error?.response?.data);
    }
  }
);

// get user from localStorage and place into store,
const userLoggedIn =
  typeof localStorage !== "undefined"
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

// Slices
const usersSlice = createSlice({
  name: "users",
  initialState: {
    userAuth: userLoggedIn,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAction.pending, (state) => {
        state.loading = true;
        state.appErr = null;
        state.serverErr = null;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.loading = false;
        state.registered = action.payload;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.error?.message;
        state.serverErr = action?.error?.message;
      });
    // login
    builder
      .addCase(loginUserAction.pending, (state) => {
        state.loading = true;
        state.appErr = undefined;
        state.serverErr = undefined;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.userAuth = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.appErr = action?.payload?.message || "Login failed";
        state.serverErr = action?.error?.message;
        state.loading = false;
      });
    // logOut
    builder
      .addCase(logoutAction.pending, (state) => {
        state.loading = true;
        state.appErr = undefined;
        state.serverErr = undefined;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.userAuth = undefined;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.appErr = action?.payload?.message || "Login failed";
        state.serverErr = action?.error?.message;
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;
