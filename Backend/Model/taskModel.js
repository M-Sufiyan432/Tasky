import mongoose from 'mongoose'
const taskSchema = new mongoose.Schema({
author:{
   type : mongoose.Schema.Types.ObjectId,
   ref : "User",
   required:true
},
title:{
    type : String,
    required : true,
   },
   priority:{
    type :String,
    required : true,
   },
   deadline:{
     type : Date,
     required:true
   },
   status:{
    type:String,
    enum:["In Progress","Completed","Over Due"],
    default:"In Progress"
   },
   assignee:{
    type:String
   },
},{timestamps:true})

const Task = mongoose.model("Task",taskSchema);
export default Task