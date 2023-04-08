import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const selectTheme = (state) => state.theme;
