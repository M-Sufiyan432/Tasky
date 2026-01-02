const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center text-4xl mb-6">
      📋
    </div>
    <h3 className="text-white text-2xl font-bold mb-2">Oops! No Task</h3>
    <p className="text-gray-400 text-center mb-6 max-w-xs">
      You need to create some tasks for your employees to work on
    </p>
    <div className="flex gap-3">
      <button className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors">
        Import
      </button>
      
    </div>
  </div>
);
export default EmptyState