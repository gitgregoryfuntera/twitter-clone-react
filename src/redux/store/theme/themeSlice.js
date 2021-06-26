import { createSlice } from "@reduxjs/toolkit";
const initialThemeSlice = { isLightTheme: true };

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeSlice,
  reducers: {
    toggleTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
