export const StatCard = ({ title, value, change, trend, color, icon: Icon }) => (
  <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 hover:bg-gray-750 transition-colors">
    <div className="flex items-start justify-between mb-4">
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
        {Icon && <Icon className="w-6 h-6 text-white" />}
      </div>

      <span
        className={`text-sm font-semibold px-2 py-1 rounded-lg ${
          trend === 'up'
            ? 'text-green-400 bg-green-900/30'
            : 'text-red-400 bg-red-900/30'
        }`}
      >
        {change}
      </span>
    </div>

    <h3 className="text-gray-400 text-sm mb-1">{title}</h3>
    <p className="text-white text-2xl sm:text-3xl font-bold">{value}</p>
  </div>
);
