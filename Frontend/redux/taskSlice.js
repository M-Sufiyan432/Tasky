import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name : "task",
    initialState:{
        taskData : [],
    },
    reducers :{
        setTaskData :(state ,action)=>{
          console.log('taskData in redux',action.payload);
          state.taskData = action.payload
        }
    }
})
export const {setTaskData} = taskSlice.actions;
export default taskSlice.reducer