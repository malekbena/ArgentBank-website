import { createSlice } from "@reduxjs/toolkit";

const checkToken = () => {
    return localStorage.getItem('token') || null
}

const initialState = {
    token: checkToken()
}

export const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        setLogin(state, action) {
            state.token = action.payload;
        },
        setLogout(state) {
            state.token = null
            localStorage.removeItem('token')
        }
    }
})

export const { setLogin, setLogout } = authSlice.actions
export default authSlice