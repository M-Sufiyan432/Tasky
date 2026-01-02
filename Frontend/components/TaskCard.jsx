// import axios from "axios";
// import { serverUrl } from "../src/App";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setTaskData } from "../redux/taskSlice";
import api from "../src/api/axios";

const TaskCard = ({ task }) => {
  const {taskData} = useSelector(state => state.task);
  const dispatach = useDispatch();
  // console.log("task in taskCard",task);
  const handleOnDelete = async()=>{
     try {
        const res =  await api.post(`/api/task/onDelete/${task._id}`,{})
          const updatedTask = taskData.filter((t)=> t._id !== task._id )
        dispatach(setTaskData(updatedTask));
        toast.success(res.data.message)
        
     } catch (error) {
      console.log("TaskCard Error OnDelete Error ",error);
            
     }
  }
  const handleComplete = async()=>{
    try {
      const res = await api.post(`/api/task/onComplete/${task._id}`,{})
      const update = res.data.task;

      // console.log(update._id);
      console.log(res.data);
      
      

    const updatedTasks = taskData.map((t) =>
      
      t._id === update._id ? update : t
    );

    dispatach(setTaskData(updatedTasks));
    toast.success("Task marked as completed");
      
    } catch (error) {
      console.log("Handle complete Error ",error);
      
    }
  }
  
  const priorityColors = {
    High: 'text-red-400',
    Medium: 'text-yellow-400',
    Low: 'text-blue-400',
  };

  const statusColors = {
    'In Progress': 'text-blue-400',
    Completed: 'text-green-400',
    "Over Due": 'text-red-400'
  };
  const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

  return (
    <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 mb-4 hover:bg-gray-750 transition-colors">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
        <div className="flex items-start gap-3 sm:gap-4 flex-1 w-full">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full flex items-center justify-center text-xl sm:text-2xl ${
            task.priority === 'High' ? 'bg-blue-900' : 
            task.priority === 'Medium' ? 'bg-amber-900' : 
            'bg-purple-900'
          }`}>
            {task.icon}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-1 wrap-break-words">{task.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3">Created at {formatDate(task.createdAt)}</p>
            
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <span className={`flex items-center gap-1 ${priorityColors[task.priority]} whitespace-nowrap`}>
                <span className="w-2 h-2 rounded-full bg-current"></span>
                {task.priority}
              </span>
              <span className="text-red-400 flex items-center gap-1 whitespace-nowrap">
                🕐 {formatDate(task.deadline)}
              </span>
              <span className={`flex items-center gap-1 ${statusColors[task.status]} whitespace-nowrap`}>
                {task.status === 'Completed' ? '✓' : '⟳'} {task.status}
              </span>
              <span className="text-gray-400 flex items-center gap-1 whitespace-nowrap">
                👤 {task.assignee}
              </span>
            </div>
          </div>
        </div>
   {task.status =="In Progress" ? <button onClick={handleComplete}
   className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all text-sm whitespace-nowrap"
   >
          Complete
  </button>:""}
        
        <button
          onClick={handleOnDelete}
          className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all text-sm whitespace-nowrap"
        >
          Delete
        </button>
       
      </div>
    </div>
  );
};
export default TaskCard;