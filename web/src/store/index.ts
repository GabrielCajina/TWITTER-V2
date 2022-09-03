import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import modalReducer from "./slices/modal.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
  },
});

export type RootsState = ReturnType<typeof store.getState>;
