import { createSlice } from "@reduxjs/toolkit";

const initialState = {currentUser: {}};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        }
    }
});

export const { updateCurrentUser } = userSlice.actions;

export default userSlice.reducer;