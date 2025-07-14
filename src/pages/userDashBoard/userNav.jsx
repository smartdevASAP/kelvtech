import React from "react";
import { obj } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import { sideBar } from "../../assets/assets";

function UserNav() {
  const { username, isMenuToggled, setIsMenuToggled } = useAppContext();

  return (
    <>
      {/* Top Navbar */}
      <div className="flex pl-6 relative pr-6 pt-4 justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img className="h-8" src={obj.logo} alt="KevTech Logo" />
        </Link>

        {/* Right side of navbar */}
        <div className="flex items-center gap-4 md:gap-8">
          <p className="text-gray-600 text-xs md:text-1xl">
            Hello! <span className="font-bold text-indigo-500">{username}</span>
          </p>
          <img className="h-5" src={obj.notifications} alt="Notifications" />

          {/* Mobile Menu Toggle */}
          <img
            className="ml-0 md:hidden cursor-pointer"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            src={obj.menu}
            alt="Menu Toggle"
          />

          {/* Desktop-only elements */}
          <div className="hidden md:flex items-center gap-8">
            <button className="cursor-pointer border text-gray-600 border-indigo-100 px-4 py-1 rounded-full">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar (visible when isMenuToggled is true) */}
      {isMenuToggled && (
        <div className="fixed top-0 right-0 h-full w-[250px] p-4 bg-indigo-100 z-[9999] rounded-sm shadow-sm shadow-gray-400 transform transition-transform duration-300 ease-in-out">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center mb-3">
            <div />
            <img
              onClick={() => setIsMenuToggled(false)}
              className="h-6 cursor-pointer"
              src={sideBar.close}
              alt="Close Sidebar"
            />
          </div>

          <div className="border-b mb-4 border-gray-300 h-[1px]" />

          {/* Sidebar Links */}
          <div className="space-y-3">
            {[
              {
                label: "request",
                icon: sideBar.servicesICON,
                href: "#request",
              },
              { label: "FAQs", icon: sideBar.aboutICON, href: "#faqs" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-2 flex justify-between items-center text-gray-600 text-sm rounded hover:bg-indigo-200 cursor-pointer"
              >
                <a href={item.href}>{item.label}</a>
                <img
                  className="h-5"
                  src={item.icon}
                  alt={item.label + " icon"}
                />
              </div>
            ))}
          </div>

          <div className="border-b mt-4 border-gray-300 h-[1px]" />

          {/* CTA Button */}
          <button className="w-full mt-4 py-2 bg-primary text-white rounded-sm shadow-sm text-sm">
            <Link to="/">Log Out</Link>
          </button>
        </div>
      )}
    </>
  );
}

export default UserNav;
