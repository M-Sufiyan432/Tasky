import Logo from "./Logo";
import {X} from "lucide-react"
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
const Sidebar = ({ activeMenu, setActiveMenu, isOpen, setIsOpen }) => {
  const {userData}  = useSelector(state =>state.user)
  const navigate = useNavigate();
  const menuItems = {
    general: [
      
      { id: 'Admin', label: 'Admin Dsahboard', icon: '📊' ,path:"/Admin"},
      { id: 'manage', label: 'Manage Task', icon: '📋',path:"/" },
      { id: 'people', label: 'My People', icon: '👥',path:"/friends" },
      { id: 'rewards', label: 'Rewards', icon: '🏆',path:"rewards" },
      { id: 'customs', label: 'AI Customs', icon: '🤖',path:"customs" },
    ],
    others: [
      { id: 'settings', label: 'Settings', icon: '⚙️',path:"settings" },
      { id: 'help', label: 'Help Center', icon: '❓',path:"settings" },
      { id: 'logout', label: 'Logout', icon: '🚪' ,path:"/logout"},
    ],
  };
  
  const isAdmin = userData?.role === "admin";
  const filterData = isAdmin?menuItems.general:menuItems.general.filter(item => item.id != 'Admin');
  //  console.log(userData.role);
   
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:relative inset-y-0 left-0 z-50
        w-64 bg-gray-900 rounded-none lg:rounded-3xl p-6 h-full
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Close button for mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 lg:hidden text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <Logo />
        
        <div className="mb-8">
          <div className="text-gray-400 text-xs font-semibold mb-3">GENERAL</div>
          {filterData.map((item) => (
            
            <button
              key={item.id}
              onClick={() => {
                setActiveMenu(item.id);
                setIsOpen(false);
                navigate(item.path)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                activeMenu === item.id
                  ? 'bg-amber-400 text-gray-900 font-semibold'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div>
          <div className="text-gray-400 text-xs font-semibold mb-3">OTHERS</div>
          {menuItems.others.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveMenu(item.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                activeMenu === item.id
                  ? 'bg-amber-400 text-gray-900 font-semibold'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default Sidebar