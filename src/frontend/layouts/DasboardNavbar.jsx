import React, { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaUser,
  FaRedo,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const DashboardNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="flex items-center justify-between bg-white shadow px-4 py-2 md:px-6 lg:px-8 ">
        {/* Left Section */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Sidebar Menu Icon */}
          <button
            onClick={toggleSidebar}
            className="text-[#D76527] text-2xl md:text-3xl focus:outline-none"
            aria-label="Open Sidebar Menu"
          >
            <FaBars />
          </button>

          {/* Product QR Button */}
          <button className="flex items-center gap-2 bg-white text-black border border-gray-400 rounded-xl px-4 py-2 hover:bg-[#D76527] hover:text-white transition">
            <img src="/../../src/assets/img/Icon/scan.png" alt="QR" />
            <span className="hidden md:inline">Product QR</span>
          </button>

          {/* Search Bar */}
          <div className="flex items-center border border-[#D76527] rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search Products..."
              className="px-3 py-2 text-sm w-full outline-none sm:w-40 md:w-60 lg:w-80"
            />
            <button className="flex items-center gap-1 bg-[#D76527] text-white px-3 md:px-4 hover:bg-[#fc7d39]">
              <FaSearch />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-5">
          <div className="relative">
            <img
              src="/src/assets/img/Icon/Notification count.jpg"
              alt="Notification"
              className="w-6 h-6 md:w-8 md:h-8 mt-3 "
            />
          </div>
          <div>
            <img
              className="w-14 h-14"
              src="\src\assets\img\logo\logo.png"
              alt="Logo"
            />

          </div>
          <div>
            <p className="text-2xl text-[#D76527]">HSDS Cooking</p>
            <p className="text-sm text-gray-500">Mirpur-2, Dhaka. (Branch)</p>
          </div>
        </div>
      </div>

      {/* Sidebar Modal */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50  bg-black bg-opacity-50 flex">
          <div className="bg-white rounded-3xl mt-20 p-6 shadow-lg w-72 md:w-96 h-[80vh] overflow-auto">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between mb-6 ">
              <div className="flex gap-3 ">
                <img
                  className="w-10 h-10 mt-3 "
                  src="\src\assets\img\logo\logo.png"
                  alt="Logo"
                />

                <div className="">
                  <div>
                    <p className="text-xl font-bold text-[#D76527] mt-2 ">HSDS Cooking</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 ">Mirpur-2, Dhaka. (Branch)</p>
                  </div>
                </div>
              </div>
              <button
                onClick={toggleDropdown}
                className="text-gray-600 focus:outline-none text-lg"
                aria-label="Toggle Dropdown"
              >
                {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
              <ul className="space-y-4 mb-4 mt-4 text-lg">
                <li>
                  <a
                    href="#"
                    className="flex gap-2 items-center text-gray-700 hover:text-[#D76527]"
                  >
                    <FaUser />
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex gap-2 items-center text-gray-700 hover:text-[#D76527]"
                  >
                    <FaRedo />
                    App Reset
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex gap-2 items-center text-gray-700 hover:text-[#D76527]"
                  >
                    <FaLock />
                    Lock Screen
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex gap-2 items-center text-red-600 hover:text-red-800"
                  >
                    <FaSignOutAlt />
                    Logout
                  </a>
                </li>
              </ul>
            )}

            {/* Sidebar Links */}
            <ul className="space-y-4 border-t pt-4 text-lg">
              <li>
                <a
                  href="#"
                  className="flex gap-2 items-center text-gray-700 hover:text-[#D76527]"
                >
                  <img
                    src="\src\assets\img\Icon\dashboard.png"
                    alt="Dashboard"
                  />
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-2 items-center text-gray-700 hover:text-[#D76527]"
                >
                  <img
                    src="\src\assets\img\Icon\allProduct.png"
                    alt="All Products"
                  />
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="/OrderList"
                  className="flex gap-2 items-center text-gray-700 hover:text-[#D76527]"
                >
                  <img
                    src="\src\assets\img\Icon\dashboard.png"
                    alt="Order List"
                  />
                  Order List
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-2 items-center text-gray-700 hover:text-[#D76527]"
                >
                  <img
                    src="\src\assets\img\Icon\history.png"
                    alt="History"
                  />
                  History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-2 items-center text-gray-700 hover:text-[#D76527]"
                >
                  <img src="\src\assets\img\Icon\bills.png" alt="Bills" />
                  Bills
                </a>
              </li>
            </ul>
          </div>

          {/* Overlay */}
          <div
            className="flex-1"
            onClick={toggleSidebar}
          ></div>
        </div>
      )}
    </>
  );
};

export default DashboardNavbar;
