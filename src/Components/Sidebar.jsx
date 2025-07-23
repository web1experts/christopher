// src/components/Sidebar.jsx

import { Home, Settings, BarChart } from 'lucide-react';
import Logo from '../assets/FosterLogoProfilePicture.png'

const Sidebar = () => {
  return (
    <div className="sidebarPanel">
      <img src={Logo} alt="User" className="object-cover"/>
      <nav className=" mt-4">
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <Home size={20} /> Home
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <BarChart size={20} /> SBA Loan Applications
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <Settings size={20} /> Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;