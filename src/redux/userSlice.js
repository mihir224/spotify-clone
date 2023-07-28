import {createSlice} from '@reduxjs/toolkit';

const userSlice=createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        isLoading:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isLoading=true;
        },
        loginSuccess:(state,action)=>{
            state.isLoading=false;
            state.currentUser=action.payload
        },
        loginFailure:(state)=>{
            state.isLoading=false
        },
        logout:(state)=>{
            state.currentUser=null;
            state.isLoading=false;
        }

    }
})

export const {loginStart,loginSuccess,loginFailure,logout}=userSlice.actions;
export default userSlice.reducer;