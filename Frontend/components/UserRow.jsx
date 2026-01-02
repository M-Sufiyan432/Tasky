import { Eye, Edit, Trash2 } from 'lucide-react';
export  const UserRow = ({ user }) => (
  <div className="bg-gray-800 rounded-xl p-4 mb-3 hover:bg-gray-750 transition-colors">
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0"></div>
        <div className="min-w-0">
          <h4 className="text-white font-semibold text-sm">{user.name}</h4>
          <p className="text-gray-400 text-xs truncate">{user.email}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-4 text-xs">
        <div>
          <p className="text-gray-400">Role</p>
          <p className="text-white font-semibold">{user.role}</p>
        </div>
        <div>
          <p className="text-gray-400">Tasks</p>
          <p className="text-white font-semibold">{user.tasks}</p>
        </div>
        <div>
          <p className="text-gray-400">Status</p>
          <span className={`px-2 py-1 rounded-md font-semibold ${
            user.status === 'Active' ? 'text-green-400 bg-green-900/30' : 'text-gray-400 bg-gray-700'
          }`}>
            {user.status}
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
          <Eye className="w-4 h-4 text-gray-300" />
        </button>
        <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
          <Edit className="w-4 h-4 text-gray-300" />
        </button>
        <button className="p-2 rounded-lg bg-red-900/30 hover:bg-red-900/50 transition-colors">
          <Trash2 className="w-4 h-4 text-red-400" />
        </button>
      </div>
    </div>
  </div>
);