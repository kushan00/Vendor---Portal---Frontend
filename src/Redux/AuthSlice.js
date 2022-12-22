import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name:"token",
    initialState: {
        token: null,
    },
    reducers: {
        setToken: (state, action) => {
            console.log("action print",action);
            state.token = action?.payload;
        },
        logout:(state)=>{
            state.token = null;
        }
    }
});

export const {setToken,logout} = AuthSlice.actions;

export const selectToken = (state) => state.token.token;

export default AuthSlice.reducer;































