import { createSlice } from '@reduxjs/toolkit'

// create an auth slice to maintain the user signin status
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // user is not logged in
    status: sessionStorage['status'],
    role:'ROLE_USER',
    regNo:-1,
    checkInNumber:-1,
    receipId:-1
  },
  reducers: {
    signin: (state, action) => {
      // the user is now signed in
      state.status = true
      sessionStorage['userRoles']=action.payload['userRoles']
      sessionStorage['regNo'] = action.payload['Id']
      sessionStorage['status']=true;
    },
    signout: (state, action) => {
      // the user is signed out
      state.status = false

      sessionStorage.removeItem('userRoles')
      sessionStorage.removeItem('regNo')
      sessionStorage['status']=false;
    },

    Booking: (state, action) => {
        // set check im Number
        sessionStorage["Id"]=action.payload['Id']
     },   
     clear:(state,action)=>{
      state.status=false;
     },
    //  setReceiptId: (state, action) =>{
    //   sessionStorage["Id"]=action.payload['']
    //  },
  },
})

// export the reducer for authSlice
export default authSlice.reducer

// export the actions
export const { signin, signout , Booking,clear ,setReceiptId} = authSlice.actions
