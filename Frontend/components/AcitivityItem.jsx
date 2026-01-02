export const ActivityItem = ({ activity }) => (
  <div className="flex items-start gap-3 pb-4 border-b border-gray-700 last:border-0">
    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm flex-shrink-0">
      {activity.icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-white text-sm">
        <span className="font-semibold">{activity.user}</span>
        <span className="text-gray-400"> {activity.action}</span>
      </p>
      <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
    </div>
  </div>
);