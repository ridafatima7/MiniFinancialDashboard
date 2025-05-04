import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import profile from "../assets/profile.avif";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Transactions", path: "/transaction" },
    { label: "Reports", path: "/reports" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded shadow"
        onClick={() => setIsOpen(true)}
      >
        <HiMenuAlt3 size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-100 border-r p-4 z-40 flex flex-col justify-between transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}
      >
        {/* Close button for mobile */}
        <div className="flex justify-between items-center md:hidden mb-4">
          <img src={Logo} alt="Logo" className="w-[50%]" />
          <button onClick={() => setIsOpen(false)}>
            <HiX size={24} />
          </button>
        </div>

        {/* Logo for desktop */}
        <div className="hidden md:flex items-center justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-[50%]" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3">
          {menuItems.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              onClick={() => setIsOpen(false)} // Close on mobile nav click
              className={({ isActive }) =>
                `p-2 rounded transition-colors font-medium border-b-2 ${
                  isActive
                    ? "bg-[#64A547] text-white border-[#64A547]"
                    : "bg-[#F3F4F6] hover:bg-[#E6F1FA] text-gray-600 border-transparent hover:text-gray-900"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Profile */}
        <div className="mt-auto text-left py-4 smallText font-bold flex items-center gap-3">
          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>Rida Fatima</span>
        </div>
      </aside>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
