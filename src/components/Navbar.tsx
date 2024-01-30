import React from "react";
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 p-5 bg-gray-100 text-gray-800 dark:text-gray-100 dark:bg-gray-900 border-b dark:border-gray-900 transition duration-200">
      <div className="container mx-auto flex justify-between">
        <span className="font-semibold">Logo</span>
        <button onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;