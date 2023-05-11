import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      console.log(action.payload);
      state.name = action.payload;
      state.isLoggedIn = true;
    },
    logOut: () => {
      return initialState;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectAuthUser = (state) => state.auth;
