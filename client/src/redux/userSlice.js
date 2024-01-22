import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        firstName: "",
        lastName: "",
        username: "",
},
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.username = action.payload.username;
        },
        editUser(state, action) {
            state.username = action.payload.username;
        }
    }
})

export const { setUser, editUser } = userSlice.actions
export default userSlice