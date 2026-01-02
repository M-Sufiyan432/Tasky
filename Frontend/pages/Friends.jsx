// import { useState } from "react";
import {  CheckCircle, Clock, AlertCircle } from 'lucide-react';
import FriendCard from '../components/FreindCards';


const FriendsPage = () => {
  const friends = [
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      status: 'online', 
      lastActive: '2m ago',
      completed: 24,
      remaining: 8,
      pending: 3
    },
    { 
      id: 2, 
      name: 'Mike Chen', 
      status: 'online', 
      lastActive: '5m ago',
      completed: 18,
      remaining: 12,
      pending: 5
    },
    { 
      id: 3, 
      name: 'Emma Wilson', 
      status: 'away', 
      lastActive: '1h ago',
      completed: 32,
      remaining: 6,
      pending: 2
    },
    { 
      id: 4, 
      name: 'John Doe', 
      status: 'offline', 
      lastActive: '3h ago',
      completed: 15,
      remaining: 10,
      pending: 7
    },
    { 
      id: 5, 
      name: 'Alice Brown', 
      status: 'online', 
      lastActive: 'Just now',
      completed: 28,
      remaining: 5,
      pending: 1
    },
    { 
      id: 6, 
      name: 'Tom Hardy', 
      status: 'offline', 
      lastActive: 'Yesterday',
      completed: 12,
      remaining: 15,
      pending: 8
    },
    { 
      id: 7, 
      name: 'Lisa Park', 
      status: 'away', 
      lastActive: '30m ago',
      completed: 20,
      remaining: 9,
      pending: 4
    },
    { 
      id: 8, 
      name: 'David Kim', 
      status: 'online', 
      lastActive: '10m ago',
      completed: 35,
      remaining: 4,
      pending: 2
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">Friends</h1>
        <p className="text-gray-400 text-sm sm:text-base">Track your friends' task progress</p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Total Completed</p>
              <p className="text-white text-2xl font-bold">184</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Total Remaining</p>
              <p className="text-white text-2xl font-bold">69</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Total Pending</p>
              <p className="text-white text-2xl font-bold">32</p>
            </div>
          </div>
        </div>
      </div>

      {/* Friends List Card */}
      <div className="bg-gray-800 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-lg font-semibold">All Friends ({friends.length})</h2>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-gray-400 text-sm">
                {friends.filter(f => f.status === 'online').length} online
              </span>
            </div>
          </div>
        </div>
        
        {/* Friends List */}
        <div className="max-h-[600px] overflow-y-auto">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FriendsPage;