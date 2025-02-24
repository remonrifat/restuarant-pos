import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleSidebar,
  toggleDropdown,
  closeSidebar,
  closeDropdown,
  setSearchQuery,
} from '../../../src/redux/Slices/navbarSlice';
import { toggleNotificationPanel } from '../../../src/redux/Slices/notificationSlice';
import { addToCart, selectCartItems } from '../../../src/redux/Slices/cartSlice';
import {
  FaBars,
  FaSearch,
  FaUser,
  FaRedo,
  FaLock,
  FaSignOutAlt,
 
} from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import BarcodeScanner from '../../components/barcode/BarcodeScanner';
import './Navbar.css';
import { IoNotificationsOutline } from 'react-icons/io5';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen, isDropdownOpen } = useSelector((state) => state.navbar);
  const { unreadCount, isNotificationOpen } = useSelector((state) => state.notification);
  const cartItems = useSelector(selectCartItems);
  const [isScanning, setIsScanning] = useState(false);
  const [barcodeInput, setBarcodeInput] = useState("");
  const [scanTimeout, setScanTimeout] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (!isScanning) return;

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleBarcodeComplete(barcodeInput);
        setBarcodeInput("");
        return;
      }

      setBarcodeInput(prev => prev + e.key);

      if (scanTimeout) clearTimeout(scanTimeout);
      setScanTimeout(setTimeout(() => {
        setBarcodeInput("");
      }, 100));
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, [isScanning, barcodeInput, scanTimeout]);

  const handleBarcodeComplete = (code) => {
    // Handle barcode scanning completion
    console.log("Barcode scanned:", code);
  };

  return (
    <>
      <nav className="flex items-center w-full justify-between shadow px-4 md:px-8 lg:px-16 h-24 bg-white">
        {/* Left Section */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Sidebar Menu Icon */}
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="text-[#D76527] text-2xl md:text-4xl focus:outline-none"
            aria-label="Open Sidebar Menu"
          >
            <FaBars />
          </button>
          <div className="p-4">
            <BarcodeScanner />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-5 items-center">
          {/* Notification Icon */}
          <div className="relative">
            <button
              onClick={() => dispatch(toggleNotificationPanel())}
              className="relative focus:outline-none"
            >
              <IoNotificationsOutline  className="w-6 h-6 md:w-8 md:h-8 mt-3 cursor-pointer text-gray-600 hover:text-[#D76527] transition-colors" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount > 99 ? '99+' : unreadCount}
                </span>
              )}
            </button>
            {isNotificationOpen && <NotificationPanel />}
          </div>

          {/* Logo */}
          <div>
            <img className="w-14 h-14" src="/src/assets/img/logo/logo.png" alt="Logo" />
          </div>

          {/* Text (Hidden on Small Screens) */}
          <div className="hidden md:block">
            <p className="text-2xl text-[#D76527]">HSDS Cooking</p>
            <p className="text-sm text-gray-500">Mirpur-2,Dhaka.</p>
          </div>
        </div>
      </nav>

      {/* Left Sidebar Modal */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
          <div className="bg-white rounded-3xl mt-20 p-6 shadow-lg w-72 md:w-96 h-[80vh] overflow-auto">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-3">
                <img
                  className="w-10 h-10 mt-3"
                  src="/src/assets/img/logo/logo.png"
                  alt="Logo"
                />
                <div>
                  <p className="text-xl font-bold text-[#D76527] mt-2">HSDS Cooking</p>
                  <p className="text-sm text-gray-500">Mirpur-2, Dhaka. (Branch)</p>
                </div>
              </div>
              <button
                onClick={() => dispatch(toggleDropdown())}
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

            {/* Menu Items */}
            <ul className="space-y-4 border-t pt-4 text-lg">
              <li>
                <a
                  href="/dashboard"
                  className="flex gap-2 items-center text-gray-700 hover:text-[#D76527]"
                >
                  <img
                    src="/src/assets/img/Icon/dashboard.png"
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
                    src="/src/assets/img/Icon/allProduct.png"
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
                    src="/src/assets/img/Icon/dashboard.png"
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
                    src="/src/assets/img/Icon/history.png"
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
                  <img src="/src/assets/img/Icon/bills.png" alt="Bills" />
                  Bills
                </a>
              </li>
            </ul>
          </div>

          {/* Overlay */}
          <div
            className="flex-1"
            onClick={() => dispatch(closeSidebar())}
          ></div>
        </div>
      )}
    </>
  );
};

export default Navbar;
