import { createSlice } from "@reduxjs/toolkit";

const checkToken = () => {
    return localStorage.getItem('token') || null
}

const initialState = {
    token: checkToken(),
    isLogged: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        setLogin(state, action) {
            state.token = action.payload
            state.isLogged = true
        },
        setLogout(state) {
            state.token = null
            state.isLogged = false
            localStorage.removeItem('token')
        }
    }
})

export const { setLogin, setLogout } = authSlice.actions
export default authSlice