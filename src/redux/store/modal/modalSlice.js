import { createSlice } from "@reduxjs/toolkit";
const initialModalState = { isCreateTweetModalOpen: false };

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    toggle: (state) => {
      state.isCreateTweetModalOpen = !state.isCreateTweetModalOpen;
    },
  },
});

export const { toggle } = modalSlice.actions;

export default modalSlice.reducer;