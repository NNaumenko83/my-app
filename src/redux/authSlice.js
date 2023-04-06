import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  isLoggedIn: false,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      console.log(action.payload);
      state.name = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      return initialState;
    },
  },
});

export const { logIn, logOut } = counterSlice.actions;

export default counterSlice.reducer;

export const selectAuthUser = (state) => state.auth;
