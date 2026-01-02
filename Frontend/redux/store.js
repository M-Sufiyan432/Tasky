import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice.js'
import taskSlice from './taskSlice.js'



export const store = configureStore({
  reducer:{
    "user" : userSlice,
    "task" : taskSlice,
  }
})