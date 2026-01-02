// import axios from "axios";
import { Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
// import { serverUrl } from "../src/App";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTaskData } from "../redux/taskSlice";
import api from "../src/api/axios.js";


export const AddNotePage = () => {
  const navigate =useNavigate();
  const {taskData} = useSelector(state => state.task);
  const [formData, setFormData] = useState({
    title: '',
    priority: '',
    deadline: '',
    assignee: ''
  });
    
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);
  const priorities = ['Low', 'Medium', 'High'];
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    console.log(taskData);
    
    e.preventDefault();
    try {
      // console.log('Form submitted:', formData);
       const res = await api.post(`/api/task/addTask`,formData)
    console.log(res);
    
    dispatch(setTaskData([...taskData,res.data.populateTask]))
    navigate("/")
    
    } catch (error) {
    console.log("AddNotePage Error:", error.response?.data || error.message);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">Add New Note</h1>
        <p className="text-gray-400 text-sm sm:text-base">Create a new task note for your team</p>
      </div>

      {/* Form Card */}
      <div className="bg-gray-800 rounded-2xl p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title Field */}
          <div>
            <label className="block text-white font-semibold mb-2 text-sm">
              Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Enter note title"
              className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              required
            />
          </div>

          {/* Priority Dropdown */}
          <div>
            <label className="block text-white font-semibold mb-2 text-sm">
              Priority <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsPriorityOpen(!isPriorityOpen)}
                className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-between"
              >
                <span className={formData.priority ? 'text-white' : 'text-gray-400'}>
                  {formData.priority || 'Select priority level'}
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isPriorityOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPriorityOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-700 rounded-xl shadow-lg z-10 overflow-hidden">
                  {priorities.map((priority) => (
                    <button
                      key={priority}
                      type="button"
                      onClick={() => {
                        handleChange('priority', priority);
                        setIsPriorityOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left text-white hover:bg-gray-600 transition-colors flex items-center gap-3"
                    >
                      <span className={`w-2 h-2 rounded-full ${
                        priority === 'High' ? 'bg-red-500' : 
                        priority === 'Medium' ? 'bg-yellow-500' : 
                        'bg-blue-500'
                      }`}></span>
                      <span>{priority}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Deadline Field */}
          <div>
            <label className="block text-white font-semibold mb-2 text-sm">
              Deadline <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => handleChange('deadline', e.target.value)}
                className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Assignee Field */}
          <div>
            <label className="block text-white font-semibold mb-2 text-sm">
              Assignee <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.assignee}
              onChange={(e) => handleChange('assignee', e.target.value)}
              placeholder="Enter assignee name"
              className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              required
            />
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              className="flex-1 px-6 py-3 rounded-xl bg-gray-700 text-white hover:bg-gray-600 transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-colors font-semibold"
            >
              Create Note
            </button>
          </div>
        </form>
      </div>

      {/* Info Card */}
      <div className="mt-6 bg-gray-800 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
            <span className="text-blue-400 text-xl">ℹ️</span>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Quick Tips</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Use clear and descriptive titles for better organization</li>
              <li>• Set realistic deadlines to improve task completion rates</li>
              <li>• Assign tasks to team members based on their expertise</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
