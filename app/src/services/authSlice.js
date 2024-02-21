import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null,},
    reducers: {
        logIn: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
        },
    }
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;