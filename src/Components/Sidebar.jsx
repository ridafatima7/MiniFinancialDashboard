import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import profile from "../assets/profile.avif"
const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-100 border-r p-4 fixed left-0 top-0 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-[50%]" />
        </div>
        <nav className="flex flex-col gap-3">
          {[
            { label: "Dashboard", path: "/" },
            { label: "Transactions", path: "/transaction" },
            { label: "Reports", path: "/reports" },
          ].map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `p-2 rounded transition-colors font-medium border-b-2 ${isActive
                  ? "bg-[#64A547] text-white border-[#64A547]"
                  : "bg-[#F3F4F6] hover:bg-[#E6F1FA] text-gray-600 border-transparent hover:text-gray-900"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
      {/* Username Section */}
      <div className="mt-auto text-left py-4 smallText font-bold flex items-center gap-3">
        <img
          src={profile}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <span>Rida Fatima</span>
      </div>
    </aside>
  );
};

export default Sidebar;
