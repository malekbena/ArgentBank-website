import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const checkToken = () => {
    return localStorage.getItem('token') || null
}

export const getProfile = createAsyncThunk(
    'user/getProfile',
    async (token) => {
        const response = await Axios.post('http://localhost:3001/api/v1/user/profile', {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data.body

    }
)

export const userLogin = createAsyncThunk(
    'user/userLogin',
    async (user) => {
        const response = await Axios.post('http://localhost:3001/api/v1/user/login', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.data.body
    }
)

const initialState = {
    token: checkToken(),
    isLogged: checkToken() ? true : false,
    profile: {}
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogout(state) {
            state.token = null
            state.isLogged = false
            state.profile = {}
            localStorage.removeItem('token')
        }
        
    }, extraReducers(builder) {
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isLogged = true
            state.token = action.payload.token
            localStorage.setItem('token', action.payload.token)
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            state.isLogged = false
            state.token = null
            console.log(action.error.message)
        })
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload
            console.log(action.payload)
        })
        builder.addCase(getProfile.rejected, (state, action) => {
            state.profile = {}
            console.log(action.error.message)
        })
    }
})

export const { setLogout, editUser } = userSlice.actions
export default userSlice