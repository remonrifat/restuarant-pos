import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import CategorySlider from "../../../components/categorySlider/CategorySlider";
import MainCategory from "../../../components/mainCategory/MainCategory";
import Navbar from "../../layouts/Navbar";
import RightSidebar from "../../layouts/Sidebar";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  // Desktop is >= 1440px, Laptop is >= 1024px but < 1440px, Tablet is >= 768px but < 1024px
  const [screenSize, setScreenSize] = useState({
    isDesktop: window.innerWidth >= 1440,
    isLaptop: window.innerWidth >= 1024 && window.innerWidth < 1440,
    isTablet: window.innerWidth >= 768 && window.innerWidth < 1024
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isDesktop: width >= 1440,
        isLaptop: width >= 1024 && width < 1440,
        isTablet: width >= 768 && width < 1024
      });
      
      // Auto-close sidebar on desktop view
      if (width >= 1440) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Only prevent scroll on tablet/laptop
    if (!screenSize.isDesktop) {
      document.body.style.overflow = isSidebarOpen ? "unset" : "hidden";
    }
  };

  const shouldShowSidebarButton = screenSize.isLaptop || screenSize.isTablet;
  const shouldAdjustMainContent = !screenSize.isDesktop && isSidebarOpen;

  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        {/* Right Sidebar */}
        <aside
          className={`fixed top-0 right-0 h-screen bg-gray-100 shadow-lg transition-transform duration-300 ease-in-out 
            ${screenSize.isDesktop ? 'w-[430px]' : 'w-[380px]'}
            ${!screenSize.isDesktop ? (isSidebarOpen ? 'translate-x-0' : 'translate-x-full') : ''}
            ${screenSize.isDesktop ? 'z-30' : 'z-50'}
          `}
        >
          <RightSidebar />
        </aside>

        {/* Main Content Container */}
        <div 
          className={`flex-1 transition-all duration-300 
            ${screenSize.isDesktop ? 'mr-[430px]' : ''} 
            ${shouldAdjustMainContent ? 'mr-[380px]' : ''}
          `}
        >
          {/* Navbar */}
          <header className={`sticky top-0 ${screenSize.isDesktop ? 'z-40' : 'z-30'} bg-white shadow-sm`}>
            <Navbar />
          </header>

          {/* Main Content */}
          <main className="p-4">
            <div className="max-w-7xl">
              <div className="mb-6">
                <CategorySlider />
              </div>
              <div className="mt-4">
                <MainCategory />
              </div>
            </div>
          </main>
        </div>

        {/* Toggle Button - Only show on tablet and laptop */}
        {shouldShowSidebarButton && (
          <button
            onClick={toggleSidebar}
            className="fixed bottom-4 right-4 z-50 bg-[#D76527] text-white p-4 rounded-full shadow-lg hover:bg-[#c55a22] transition-colors"
          >
            {isSidebarOpen ? <FaShoppingCart size={24} /> : <FaBars size={24} />}
          </button>
        )}

        {/* Overlay - Only show on tablet and laptop when sidebar is open */}
        {!screenSize.isDesktop && isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40" 
            onClick={toggleSidebar}
          />
        )}
      </div>
    </Provider>
  );
};

export default Home;
