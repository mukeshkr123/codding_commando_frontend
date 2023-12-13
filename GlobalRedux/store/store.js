"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counter";
import userReducer from "../slices/userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export default store;
