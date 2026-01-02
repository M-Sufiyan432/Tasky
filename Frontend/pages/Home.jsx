import { useState } from "react";
import TaskCard from "../components/TaskCard";
import EmptyState from "../components/EmptyState";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import useGetAllTask from "../hooks/getAllTasks";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState('manage');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const {taskData} = useSelector(state => state.task);
  useGetAllTask()
 
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-300 via-orange-200 to-amber-400 p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex gap-4 md:gap-6">
        <Sidebar 
          activeMenu={activeMenu} 
          setActiveMenu={setActiveMenu}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        
        <div className="flex-1 bg-gray-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 min-h-screen lg:min-h-0">
          <Header  setIsSidebarOpen={setIsSidebarOpen} />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">Manage Task</h1>
              <p className="text-gray-400 text-sm sm:text-base">Set the goals to grow your company</p>
            </div>
            <button
              onClick={()=>navigate("/addTask")}
              className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span className="text-xl">+</span>
              Add New Task
            </button>
          </div>

          {Array.isArray(taskData)&&taskData.length > 0 ? (
            <div>
              {taskData.filter(Boolean).map((task) => (
                <TaskCard key={task._id} task={task}  />
              ))}
            </div>
          ) : (
            <EmptyState  />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;