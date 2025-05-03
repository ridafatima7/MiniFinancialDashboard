import React from "react";
import { FaCog, FaEllipsisV } from "react-icons/fa";
import Logo from "../assets/Logo.png"; // Adjust the path if needed

const TopBar = () => {
  return (
    <header className="w-full h-16 bg-white shadow-md flex items-center justify-between px-6 fixed top-0 left-64 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-8" />
        <span className="text-lg font-semibold text-gray-700">Mini Financial Dashboard</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-medium">Rida Fatima</span>
        <FaCog className="text-gray-600 hover:text-gray-800 cursor-pointer" />
        <FaEllipsisV className="text-gray-600 hover:text-gray-800 cursor-pointer" />
      </div>
    </header>
  );
};

export default TopBar;
