import { Search, Bell, Mail, Menu, X, MoreVertical, CheckCircle, Clock, AlertCircle } from 'lucide-react';


const FriendCard = ({ friend }) => {
  const getStatusColor = (status) => {
    if (status === 'online') return 'bg-green-500';
    if (status === 'away') return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition-colors cursor-pointer border-b border-gray-700 last:border-0">
      <div className="flex items-center gap-4">
        {/* Avatar with status indicator */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg">
            {friend.name.charAt(0)}
          </div>
          <span className={`absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 ${getStatusColor(friend.status)} rounded-full border-2 border-gray-800`}></span>
        </div>

        {/* Friend Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-white font-semibold text-sm sm:text-base truncate">{friend.name}</h3>
            <span className="text-gray-400 text-xs whitespace-nowrap ml-2">{friend.lastActive}</span>
          </div>
          
          {/* Task Stats */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
              <span className="text-gray-400">
                <span className="text-green-400 font-semibold">{friend.completed}</span> completed
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-gray-400">
                <span className="text-blue-400 font-semibold">{friend.remaining}</span> remaining
              </span>
            </div>
            <div className="flex items-center gap-1">
              <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
              <span className="text-gray-400">
                <span className="text-yellow-400 font-semibold">{friend.pending}</span> pending
              </span>
            </div>
          </div>
        </div>

        {/* More Options */}
        <button className="text-gray-400 hover:text-white p-2">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default FriendCard;