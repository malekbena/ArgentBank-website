import { createSlice } from "@reduxjs/toolkit";

const checkToken = () => {
    return localStorage.getItem('token') || null
}

const initialState = {
    token: checkToken(),
    isLogged: checkToken() ? true : false,
    profile: {
        email: "",
        firstName: "",
        lastName: "",
        username: "",
    }
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogin(state, action) {
            state.token = action.payload
            state.isLogged = true
        },
        setLogout(state) {
            state.token = null
            state.isLogged = false
            state.profile = {
                email: "",
                firstName: "",
                lastName: "",
                username: "",
            }

            localStorage.removeItem('token')
        },
        setUser(state, action) {
            state.profile.email = action.payload.email;
            state.profile.firstName = action.payload.firstName;
            state.profile.lastName = action.payload.lastName;
            state.profile.username = action.payload.username;
        },
        editUser(state, action) {
            state.username = action.payload.username;
        }
    }
})

export const { setLogin, setLogout, setUser, editUser } = userSlice.actions
export default userSlice