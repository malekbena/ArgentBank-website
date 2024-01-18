import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: ""
    },

    reducers: {
        login(state, action) {
            state.token = action.payload;
        },
        logout(state) {
            state.token = "";
        }
    }
})

export const { login, logout } = authSlice.actions