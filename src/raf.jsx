



// navbar 
 

 {/* Sidebar Modal */}
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
            href="#"
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
      onClick={() => dispatch(closeSidebar())}
    ></div>
  </div>
)}
























// orderlist


  {/* First Modal: Individual Order Details */}
  {selectedOrder && (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white space-y-5 w-[400px] h-[690px] p-4 rounded-lg overflow-y-auto">
        <button
          className="text-black text-lg absolute top-2 right-4"
          onClick={closeOrderModal}
        >
          &times;
        </button>
        <img
          src={selectedOrder.image}
          alt={selectedOrder.name}
          className="w-full h-auto rounded"
        />
        <h3 className="font-bold text-lg mt-4 px-6">{selectedOrder.name}</h3>
        <p className="text-black text-xl font-bold px-6">
          ৳{selectedOrder.price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500 line-through px-6">
          ৳{selectedOrder.originalPrice.toFixed(2)}
        </p>
        <p className="text-sm px-6">
          <strong>Category:</strong> {selectedOrder.category}
        </p>
        <p className="text-sm px-6">
          <strong>Brand:</strong> {selectedOrder.brand}
        </p>
        <p className="text-sm mt-4 px-6">{selectedOrder.description}</p>
      </div>
    </div>
  )}

  {/* Second Modal: American Breakfast Combo */}
  {isComboModalOpen && (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-[450px] h-[700px] rounded-lg p-4 overflow-y-auto">
        <button
          className="absolute top-2 right-4 text-xl"
          onClick={closeComboModal}
        >
          &times;
        </button>
        <h3 className="font-bold text-xl mb-4">American Breakfast Combo (5 in 1)</h3>

        {/* Search Input */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-2xl px-5 py-2 pr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsSearchModalOpen(true)}
          />
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-xl"
          >
            Search
          </button>
        </div>

        {/* Product List */}
        {orders.map((order, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-2 mb-2">
            {index < 2 && (
              <button
                onClick={() => handleDelete(index)}
                className=""
                title="Remove Product"
              >
                <AiOutlineDelete className="w-5 h-5" />
              </button>
            )}
            <img
              src={order.image}
              alt={order.name}
              className="w-12 h-12 rounded"
            />
            <div>
              <h4 className="font-bold text-sm">{order.name}</h4>
              <p className="text-xs text-gray-500 line-through">
                ৳{order.originalPrice.toFixed(2)}
              </p>
              <p className="text-sm text-black">৳{order.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleDecrease(index)}
                className="bg-gray-200 text-black px-2 py-1 rounded"
              >
                -
              </button>
              <span>{order.quantity}</span>
              <button
                onClick={() => handleIncrease(index)}
                className="bg-gray-200 text-black px-2 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}
            {/* Summary Section */}
       <div className="mt-4">
          <p className="text-black font-bold text-xl">৳18.88</p>
          <p className="text-gray-500 text-sm line-through">৳23.88</p>
          <p className="text-sm">Category: Vegetables</p>
          <p className="text-sm">Brand: Breakfast Combo</p>
        </div>

        {/* Footer */}
        <div className="mt-4">
          <button className=" bg-gray-600 text-white px-9 rounded-full">
            Save & Back to List
          </button>
        </div>
      </div>
   
    </div>
  )}

  {/* Search Modal */}
  {isSearchModalOpen && (
    <div className="fixed inset-0 z-50  bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-[500px] rounded-lg p-4">
        <button
          className="absolute top-2 right-4 text-xl"
          onClick={() => setIsSearchModalOpen(false)}
        >
          &times;
        </button>
        <h3 className="font-bold text-xl mb-4">Product Search</h3>

        {/* Search Results */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/785f/0186/68cf79f3fa26c9fb0292ad111e16eeca?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NBsBRuiT0pO33EX~e1vXqvLLz-5ffddpl3c78vl1QAu--pVkuBjFdt8PEZAmVZs~kPIqL3tL0DjLgjpqE9xLOO-U-rX-Ary1VD4RiTxNrJPNJ5q2wpk1Jgr0PudDMb3y3uqoWrOjus8veTV5I3uCBThUaQAeMt9A5avKcpHoRto2019a1DZ2ghaYUq2XmNIuhkax8nJXQekMm~3prwUmKW2qmePVJA180HlMe0Kfenzy9aFTrXs~CaVbgVkG7klY2CfyQBAT6-EkL4AlVRfdDo~uZK6UzNg64dTc6~5-35qJKXgbqsYvwyDHaPfltb4VfqcUUnnFuZ7psgjM9XCOOw__"
                  alt="product"
                  className="w-12 h-12 rounded-md"
                />
                <div>
                  <h4 className="text-base font-medium">
                    All Natural Style Chicken Meatballs
                  </h4>
                  <p className="text-gray-500 text-sm line-through">৳25.50</p>
                  <p className="font-bold text-sm text-black">৳18.88</p>
                </div>
              </div>
              <button className="text-3xl ml-9">
             <MdOutlineAddBox />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}
























// barcode

 