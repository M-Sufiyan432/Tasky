import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        userData : null,
        isAuthenticated : false,
        authChecked: false,
    },
    reducers :{
       setUserData: (state, action) => {
     if (!action.payload) {
    state.userData = null;
    state.isAuthenticated = false;
    } else {
    state.userData = action.payload;
    state.isAuthenticated = true;
    }
    state.authChecked = true;
   },
       logOutUser : (state,action)=>{
        console.log("LogOut User",action.payload);
        state.isAuthenticated = false;
        state.authChecked = true
       },
       setAuthChecked: (state) => {
        state.authChecked = true; 
        }
    }
})
export const {setUserData,logOutUser,setAuthChecked} = userSlice.actions;
export default userSlice.reducer;