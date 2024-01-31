import React from "react";
import { useTheme } from "next-themes";
import { FaUserCircle } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  // Provides default value for theme if it's undefined
  const currentTheme = theme || "light";

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 p-5 bg-gray-100 text-gray-800 dark:text-gray-100 dark:bg-gray-900 border-b dark:border-gray-900 transition duration-200">
      <div className="container mx-auto flex justify-between">
        <span className="font-semibold">Logo</span>
        <Sidebar
          icon={<FaUserCircle size={24} />}
          toggleTheme={toggleTheme}
          theme={currentTheme}
        />
      </div>
    </nav>
  );
};

export default Navbar;
