export const TaskSummaryCard = ({ status, count, color, icon }) => (
  <div className={`${color} rounded-xl p-4`}>
    <div className="flex items-center justify-between mb-3">
      <span className="text-3xl">{icon}</span>
      <span className="text-white text-2xl font-bold">{count}</span>
    </div>
    <p className="text-white text-sm font-semibold">{status}</p>
  </div>
);