import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:'auth',
    initialState:{
        userInfo:null,
    },
    reducers:{
        login:(state,action)=>{
            state.userInfo=action.payload
        },
        logout:(state)=>{
            state.userInfo=null
        }
    }
    

})
export const {login,logout}=authSlice.actions
export default authSlice.reducer