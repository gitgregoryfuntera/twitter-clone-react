import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modal/modalSlice";
import { themeSlice } from "./theme/themeSlice";
import { userSlice } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    user: userSlice.reducer,
    theme: themeSlice.reducer,
  },
});
