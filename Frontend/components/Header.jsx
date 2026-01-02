import { Search, Bell, Mail,  Menu } from 'lucide-react';
const Header = ({ setIsSidebarOpen }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
    <div className="flex items-center gap-4 w-full sm:w-auto">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        <Menu className="w-5 h-5 text-gray-300" />
      </button>

      <div className="flex-1 sm:flex-initial sm:w-64 md:w-96">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by report name..."
            className="w-full bg-gray-800 text-gray-300 rounded-xl px-4 py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>
    </div>
    
    <div className="flex items-center gap-3 ml-auto">
      <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
        <Bell className="w-5 h-5 text-gray-300" />
      </button>
      <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
        <Mail className="w-5 h-5 text-gray-300" />
      </button>
      <div className="hidden sm:flex items-center gap-2">
        <span className="text-gray-400 text-sm">Howdy,</span>
        <span className="text-white font-semibold">Jannella</span>
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-400 to-pink-400"></div>
      </div>
      <div className="sm:hidden w-10 h-10 rounded-full bg-linear-to-br from-purple-400 to-pink-400"></div>
    </div>
  </div>
);
export default Header