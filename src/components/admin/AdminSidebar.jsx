import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { Home, Menu, PlusSquare, List, Clipboard } from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const user = {
    firstName: "Admin",
    lastName: "User",
    imageUrl: assets.profile,
  };

  const sidebarLinks = [
    { name: "Dashboard", path: "/admin", icon: Home },
    { name: "Add Shows", path: "/admin/add-shows", icon: PlusSquare },
    { name: "List Shows", path: "/admin/list-shows", icon: List },
    { name: "List Booking", path: "/admin/list-booking", icon: Clipboard },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="bg-gray-900 w-11/12 text-white flex items-center justify-between p-4 md:hidden fixed top-0 left-0 right-0 z-50">
        <span className="text-xl font-bold">Cinematrix</span>
        <button onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white w-64 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static`}
      >
        {/* Desktop Branding */}
        <div className="hidden md:block p-6 text-2xl font-bold border-b border-gray-700">
          Cinematrix Admin
        </div>

        {/* User */}
        <div className="flex items-center p-4 border-b border-gray-700">
          <img src={user?.imageUrl} className="w-10 h-10 rounded-full mr-3" />
          <p className="text-sm font-semibold">
            {user.firstName} {user.lastName}
          </p>
        </div>

        {/* Links */}
        <nav className="p-4 space-y-2 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center p-3 rounded-md hover:bg-gray-700 transition ${
                  isActive ? "bg-gray-800" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
