import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa';

interface SidebarProps {
  icon: ReactNode;
  toggleTheme: () => void;
  theme: string;
}

const Sidebar: React.FC<SidebarProps> = ({ icon, toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isDarkMode = theme === 'dark';

  return (
    <div className="relative inline-block text-left" ref={sidebarRef}>
      <button onClick={toggleSidebar} className="rounded-full w-10 h-10 flex items-center justify-center">
        {icon}
      </button>

      {isOpen && (
        <div className="fixed inset-0 h-full w-full z-10" onClick={toggleSidebar}></div>
      )}
      <div className={`transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed right-0 top-0 w-56 h-full bg-white dark:bg-gray-700 z-20 shadow`}>
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="flex justify-between px-4 py-2">
            <div className="flex gap-2">
              <FaUserCircle size={24} />
              <p>John Doe</p>
            </div>
            <button onClick={toggleSidebar}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          {/* Sidebar Menu Content */}
          <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600">
            Profile
          </div>
          <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600">
            Settings
          </div>
          {/* Switch-style Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-14 h-7 rounded-full bg-white border flex items-center transition duration-300 focus:outline-none shadow mx-3 my-2"
          >
            <div
              className={`w-7 h-7 relative rounded-full transition duration-500 transform ${isDarkMode ? 'bg-gray-700 translate-x-full border' : 'bg-yellow-500'} p-1 text-white flex items-center justify-center`}
            >
              {isDarkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;