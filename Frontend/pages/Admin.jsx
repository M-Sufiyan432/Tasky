import { useState } from "react";
import { Search, Bell, Mail, Menu, X, TrendingUp, Users, CheckCircle, AlertCircle, Calendar, Plus, MoreVertical, Filter, Eye, Edit, Trash2, Download, Upload } from 'lucide-react';
import Sidebar from "../components/Sidebar.jsx";
import { StatCard } from "../components/StateCard";
import { TaskSummaryCard } from "../components/TaskSummaryCard";
import { UserRow } from "../components/UserRow";
import { ActivityItem } from "../components/AcitivityItem";
import { ProjectCard } from "../components/projectCard";
import Header from "../components/Header.jsx";

export const AdminDeshBoard = ()=>{
 const [activeMenu, setActiveMenu] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    { title: 'Total Users', value: '2,847', change: '+12.5%', icon: Users, trend: 'up', color: 'bg-gradient-to-br from-purple-500 to-blue-500' },
    { title: 'Active Tasks', value: '1,234', change: '+8.2%', icon: CheckCircle, trend: 'up', color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { title: 'Completed', value: '8,567', change: '+23.1%', icon: TrendingUp, trend: 'up', color: 'bg-gradient-to-br from-green-500 to-emerald-500' },
    { title: 'Pending Review', value: '156', change: '-4.3%', icon: AlertCircle, trend: 'down', color: 'bg-gradient-to-br from-amber-500 to-orange-500' },
  ];

  const users = [
    { name: 'Sarah Johnson', email: 'sarah.j@company.com', role: 'Team Lead', tasks: 24, status: 'Active' },
    { name: 'Mike Chen', email: 'mike.c@company.com', role: 'Developer', tasks: 18, status: 'Active' },
    { name: 'Emma Wilson', email: 'emma.w@company.com', role: 'Designer', tasks: 12, status: 'Active' },
    { name: 'John Doe', email: 'john.d@company.com', role: 'Developer', tasks: 15, status: 'Inactive' },
  ];

  const taskSummary = [
    { status: 'To Do', count: 156, color: 'bg-gradient-to-br from-blue-500 to-blue-600', icon: '📝' },
    { status: 'In Progress', count: 89, color: 'bg-gradient-to-br from-purple-500 to-purple-600', icon: '⏳' },
    { status: 'Review', count: 45, color: 'bg-gradient-to-br from-amber-500 to-amber-600', icon: '👁️' },
    { status: 'Completed', count: 234, color: 'bg-gradient-to-br from-green-500 to-green-600', icon: '✅' },
  ];

  const recentActivities = [
    { user: 'Sarah Johnson', action: 'completed task "Design Review"', time: '5 mins ago', icon: '✅' },
    { user: 'Mike Chen', action: 'created new project "Mobile App"', time: '12 mins ago', icon: '📁' },
    { user: 'Emma Wilson', action: 'commented on "UI Redesign"', time: '25 mins ago', icon: '💬' },
    { user: 'John Doe', action: 'updated task priority to High', time: '1 hour ago', icon: '🔴' },
    { user: 'Alice Brown', action: 'assigned task to Mike Chen', time: '2 hours ago', icon: '👤' },
  ];

  const projects = [
    { name: 'Website Redesign', progress: 75, members: 8, deadline: 'Dec 31' },
    { name: 'Mobile App v2.0', progress: 45, members: 12, deadline: 'Jan 15' },
    { name: 'API Integration', progress: 90, members: 5, deadline: 'Dec 25' },
    { name: 'Marketing Campaign', progress: 30, members: 6, deadline: 'Jan 10' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-300 via-orange-200 to-amber-400 p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex gap-4 md:gap-6">
        <Sidebar 
          activeMenu={activeMenu} 
          setActiveMenu={setActiveMenu}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        
        <div className="flex-1 bg-gray-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 min-h-screen lg:min-h-0">
          <Header setIsSidebarOpen={setIsSidebarOpen} />
          
          {/* Page Title & Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-gray-400 text-sm sm:text-base">Manage your task management system</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
</svg>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Task Summary */}
          <div className="mb-6">
            <h2 className="text-white text-xl font-semibold mb-4">Task Summary</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {taskSummary.map((item, index) => (
                <TaskSummaryCard key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* User Management */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white text-xl font-semibold">User Management</h2>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              </div>
              <div>
                {users.map((user, index) => (
                  <UserRow key={index} user={user} />
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <div className="bg-gray-800 rounded-2xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white text-lg font-semibold">Recent Activity</h3>
                  <button className="text-purple-400 text-sm hover:text-purple-300">View All</button>
                </div>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <ActivityItem key={index} activity={activity} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Active Projects */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-xl font-semibold">Active Projects</h2>
              <button className="text-purple-400 text-sm hover:text-purple-300">View All Projects</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}