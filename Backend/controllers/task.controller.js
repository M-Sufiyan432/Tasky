import Task from "../Model/taskModel.js";
import User from "../Model/userModel.js";

export const createTask = async (req, res) => {
  try {
    

    const { title, priority, deadline, assignee } = req.body;

    if (!title || !priority || !deadline || !assignee) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const task = await Task.create({
      author:req.user._id,
      title,
      priority,
      deadline,
      assignee,
    });

    const user = await User.findById(req.user._id);
    user.tasks.push(task._id); 
    await user.save();         

    const populateTask = await Task.findById(task._id).populate('author','name username role');

    

    return res.status(201).json({
      success: true,
      message: "Task Added",
      populateTask,
    });
  } catch (error) {
    console.error("createTask Error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong in task controller",
    });
  }
};

export const getAllTask = async(req,res)=>{
  try {
    const userId = req.user._id;

    const user = await User.findById(userId);

    if(!user){
      res.status(400).json({
        success:false,
        message:"User not found"
      })
    }
    const task = await Task.find({author:userId}).populate("author","name username role");
    res.status(200).json({
      success:true,
      message:"Task is recived",
      task
    })
    

  } catch (error) {
    console.log("GetAll task Error",error);
    
    res.status(400).json({
      success:false,
      message:"Error in getAllTak",
      error
    })
  }
}
export const onDeleteTask= async(req,res)=>{
  try {
    const taskId = req.params.taskId
    // console.log("taskId",taskId);

    await Task.findByIdAndDelete(taskId);

    res.status(200).json({
      success : true,
      message : "Task is deleted"
    })
    
  } catch (error) {
    res.status(200).json({
      success:false,
      message : "Error in task"
    })
  }
}
export const onCompleteTask = async(req,res)=>{
    try {
      const taskId = req.params.taskId
      
      const updatedTask = await Task.findOneAndUpdate({_id:taskId,author:req.user._id},{
        status : 'Completed',
        deadline : new Date(),
      },{new :true,runValidators: true}).populate('author','name ,username,role')

   return res.status(200).json({
      success: true,
      message: "Task marked as completed",
      task: updatedTask,
    });
  } catch (error) {
    console.error("Complete Task Error:", error);
    return res.status(500).json({
      success: false,
      message: "Error completing task",
    });
  }
};
