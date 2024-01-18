import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        firstName: "",
        lastName: "",
        username: "",
},
    reducers: {
        addUser(state, action) {
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

export const { addUser, editUser } = userSlice.actions