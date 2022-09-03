import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/user";

export interface AuthState {
  user: undefined | User | null;
}

const initialState: AuthState = {
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User } | null>) => {
      state.user = action.payload?.user ?? null;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
