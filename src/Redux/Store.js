import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reData } from "./Data";

const reducer = combineReducers({
  data: reData,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
