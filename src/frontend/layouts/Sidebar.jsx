import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import { addToCart, removeItem, updateCart, selectCartItems, selectCartTotal } from "../../redux/Slices/cartSlice";
import "./Sidebar.css";
import cashIcon from "/src/assets/img/Icon/cash.png";
import cardIcon from "/src/assets/img/Icon/card.png";
import membershipIcon from "/src/assets/img/Icon/membership.png";
import { useNavigate } from "react-router-dom";

export const formatPrice = (price) => {
  const cleanPrice = typeof price === 'string'
    ? parseFloat(price.replace(/[^\d.]/g, '')) 
    : parseFloat(price);
  
  return `৳ ${cleanPrice.toFixed(2)}`;
};

const RightSidebar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Enhanced special discount state and logic
  const [specialDiscount, setSpecialDiscount] = useState({
    type: 'fixed', // Default to fixed
    value: 0,
    isApplied: false,
  });

  const calculateSpecialDiscount = (subtotal) => {
    // If discount is not applied, return 0
    if (!specialDiscount.isApplied) return 0;

    // Validate discount value
    const discountValue = parseFloat(specialDiscount.value);
    if (isNaN(discountValue) || discountValue < 0) return 0;

    // Calculate discount based on type
    if (specialDiscount.type === 'percentage') {
      // Limit percentage to 100%
      const cappedPercentage = Math.min(discountValue, 100);
      return subtotal * (cappedPercentage / 100);
    } else {
      // Fixed amount discount, ensure it doesn't exceed subtotal
      return Math.min(discountValue, subtotal);
    }
  };

  const handleApplySpecialDiscount = () => {
    const subtotal = calculateDetailedTotal().subtotal.replace('৳', '').replace(',', '');
    const numericSubtotal = parseFloat(subtotal);

    let discountAmount = 0;
    if (specialDiscount.type === 'fixed') {
      // Fixed amount discount
      discountAmount = Math.min(specialDiscount.value, numericSubtotal);
    } else {
      // Percentage discount
      discountAmount = numericSubtotal * (specialDiscount.value / 100);
    }

    setSpecialDiscount(prev => ({
      ...prev,
      isApplied: specialDiscount.value > 0,
    }));

    // You might want to dispatch an action to update the cart with the discount
    // dispatch(applySpecialDiscount({ type: specialDiscount.type, value: discountAmount }));
  };

  /**
   * Calculates the total of the cart items including all applicable discounts and vat.
   * @returns {Object} An object containing the subtotal, base discount, special discount, vat amount, total and raw total.
   */
  const calculateDetailedTotal = () => {
    // Recalculate total directly from cart items for more accuracy
    const subtotal = cartItems.reduce((total, item) => {
      const price = typeof item.price === 'string'
        ? parseFloat(item.price.replace(/[^\d.]/g, ''))
        : parseFloat(item.price);
      
      // Calculate base price without any discounts
      return total + (price * item.quantity);
    }, 0);

    // Calculate base discount from old prices
    const baseDiscount = cartItems.reduce((discount, item) => {
      if (!item.oldPrice) return discount;
      
      const oldPrice = typeof item.oldPrice === 'string'
        ? parseFloat(item.oldPrice.replace(/[^\d.]/g, ''))
        : parseFloat(item.oldPrice);
      
      const currentPrice = typeof item.price === 'string'
        ? parseFloat(item.price.replace(/[^\d.]/g, ''))
        : parseFloat(item.price);
      
      return discount + (oldPrice - currentPrice) * item.quantity;
    }, 0);

    // Calculate VAT on the subtotal
    const vatRate = 0.25; // 25% VAT
    const vatAmount = subtotal * vatRate;

    // Calculate subtotal with VAT
    const subtotalWithVat = subtotal + vatAmount;

    // Calculate special discount
    let specialDiscountAmount = 0;
    let finalTotal = subtotalWithVat;

    if (specialDiscount.isApplied && specialDiscount.value > 0) {
      if (specialDiscount.type === 'percentage') {
        // Percentage discount on subtotal with VAT
        specialDiscountAmount = subtotalWithVat * (Math.min(specialDiscount.value, 100) / 100);
      } else {
        // Fixed amount discount, ensure it doesn't exceed subtotal with VAT
        specialDiscountAmount = Math.min(specialDiscount.value, subtotalWithVat);
      }

      // Subtract special discount from total
      finalTotal = subtotalWithVat - specialDiscountAmount;
    }

    return {
      subtotal: formatPrice(subtotal),
      baseDiscount: formatPrice(baseDiscount),
      vatAmount: formatPrice(vatAmount),
      subtotalWithVat: formatPrice(subtotalWithVat),
      specialDiscount: formatPrice(specialDiscountAmount),
      total: formatPrice(finalTotal),
      rawTotal: finalTotal
    };
  };

  const handleSelectOrder = (order) => setSelectedOrder(order);
  const closeOrderModal = () => setSelectedOrder(null);

  const addProductToCart = (product) => dispatch(addToCart(product));
  const handleRemoveItem = (productId) => dispatch(removeItem(productId));
  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    dispatch(updateCart({ productId, quantity }));
  };

  const handlePaymentClick = (paymentType) => {
    if (cartItems.length === 0) return; // Prevent selection if cart is empty
    // Toggle selection: if the same payment method is clicked again, unselect it
    setSelectedPayment((prev) => (prev === paymentType ? null : paymentType));
  };

  const paymentMethods = [
    { type: "Cash Pay", icon: cashIcon },
    { type: "Card Pay", icon: cardIcon },
    { type: "Membership", icon: membershipIcon },
  ];

  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    if (!selectedPayment || cartItems.length === 0) return;
    
    const totalDetails = calculateDetailedTotal();
    
    // Format cart items for receipt
    const formattedCartItems = cartItems.map(item => ({
      ...item,
      formattedPrice: formatPrice(item.price),
      formattedTotal: formatPrice(
        (typeof item.price === 'string' 
          ? parseFloat(item.price.replace(/[^\d.]/g, '')) 
          : parseFloat(item.price)) * item.quantity
      )
    }));
    
    // Navigate to SalesReceipt page with payment and cart data
    navigate('/SalesReceipt', {
      state: {
        paymentMethod: selectedPayment,
        cartItems: formattedCartItems,
        subTotal: totalDetails.subtotal,
        baseDiscount: totalDetails.baseDiscount,
        specialDiscount: totalDetails.specialDiscount,
        vat: totalDetails.vatAmount, 
        total: totalDetails.total,
        date: new Date(),
      }
    });

    // Trigger auto-print after a short delay
    setTimeout(() => {
      window.print();
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto" style={{ maxHeight: "calc(100vh - 400px)" }}>
        <div className="p-4">
          <h2 className="text-2xl font-bold border-b pb-4 mb-4">
            Order List
            <span className="text-sm text-gray-500"> Total Selected: {cartItems.length}</span>
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">No items in cart</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-500 hover:text-red-600 p-1"
                    >
                      <FaTrashAlt className="h-6 w-6" />
                    </button>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded cursor-pointer"
                      onClick={() => handleSelectOrder(item)}
                    />
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <p className="line-through text-gray-400">{item.oldPrice}</p>
                        <p className="text-[#D76527] font-semibold">{formatPrice(item.price)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200"
                    >
                      −
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Fixed bottom section */}
      <div className="bg-[#D76527] text-white p-8 box  bottom-0 w-full">
        <div className="space-y-2">
          <h3 className="flex justify-between">
            <span>Subtotal:</span> 
            <span>{calculateDetailedTotal().subtotal}</span>
          </h3>
          <h3 className="flex justify-between">
            <span>Discount:</span> 
            <span>{calculateDetailedTotal().baseDiscount}</span>
          </h3>
          <h3 className="flex justify-between border-b">
            <span>VAT (25%):</span> 
            <span>{calculateDetailedTotal().vatAmount}</span>
          </h3>
          <h3 className="flex justify-between">
            <span>Subtotal with VAT:</span> 
            <span>{calculateDetailedTotal().subtotalWithVat}</span>
          </h3>
          {specialDiscount.isApplied && specialDiscount.value > 0 && (
            <h3 className="flex justify-between">
              <span>Special Discount:</span> 
              <span>{calculateDetailedTotal().specialDiscount}</span>
            </h3>
          )}
          {/* Special Discount Section */}
        <h3 className="flex justify-between items-center">
          <span className="font-semibold">Special Discount</span>
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-gray-100 rounded-lg p-1 space-x-2">
              <div className="flex space-x-1">
                <button
                  onClick={() => setSpecialDiscount(prev => ({ 
                    ...prev, 
                    type: 'fixed', 
                    value: prev.type === 'percentage' 
                      ? Math.round(prev.value * calculateDetailedTotal().rawTotal / 100) 
                      : prev.value 
                  }))}
                  className={`px-2 py-1 rounded-lg text-xs font-bold transition-all duration-300 ${
                    specialDiscount.type === 'fixed' 
                      ? 'bg-[#D76527] text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Fixed
                </button>
                <button
                  onClick={() => setSpecialDiscount(prev => ({ 
                    ...prev, 
                    type: 'percentage', 
                    value: prev.type === 'fixed' 
                      ? Math.round((prev.value / calculateDetailedTotal().rawTotal) * 100) 
                      : prev.value 
                  }))}
                  className={`px-2 py-1 rounded-lg text-xs font-bold transition-all duration-300 ${
                    specialDiscount.type === 'percentage' 
                      ? 'bg-[#D76527] text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  %
                </button>
              </div>
              <input 
                type="number" 
                value={specialDiscount.value} 
                onChange={(e) => {
                  const inputValue = parseFloat(e.target.value) || 0;
                  setSpecialDiscount(prev => ({
                    ...prev, 
                    value: specialDiscount.type === 'percentage' 
                      ? Math.min(inputValue, 100) 
                      : inputValue,
                    isApplied: inputValue > 0
                  }));
                }}
                placeholder={specialDiscount.type === 'percentage' ? '0%' : '0'}
                className="w-16 bg-transparent text-right text-xs font-bold text-[#D76527] outline-none"
                min="0"
                max={specialDiscount.type === 'percentage' ? 100 : undefined}
              />
            </div>
          </div>
        </h3>
        {specialDiscount.isApplied && (
          <div className="text-xs text-gray-600 italic mt-1 text-right">
            {specialDiscount.type === 'percentage' 
              ? `${specialDiscount.value}% discount applied` 
              : `Fixed ৳${formatPrice(specialDiscount.value)} discount applied`}
          </div>
        )}
          <h3 className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>{calculateDetailedTotal().total}</span>
          </h3>
        </div>

        

        <div className="mt-4 grid grid-cols-3 gap-9">
          {paymentMethods.map(({ type, icon }) => (
            <button
              key={type}
              onClick={() => handlePaymentClick(type)}
              disabled={cartItems.length === 0}
              className={`relative bg-white text-black font-bold w-[120.33px] h-[116px] rounded-xl shadow flex flex-col items-center justify-center ${
                selectedPayment === type
                  ? "border-4 border-black blur-[0.6px] pointer-events-none" 
                  : "border-2 border-transparent" 
              } ${cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <img src={icon} alt={`${type} icon`} className={`w-10 h-10 mb-6 ${cartItems.length === 0 ? "opacity-50" : ""}`} />
              <span className={cartItems.length === 0 ? "opacity-50" : ""}>{type}</span>
              {selectedPayment === type && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaCheckCircle className="text-[#D76527] text-2xl" />
                </div>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={handleProceedToPayment}
          className={`mt-8 bg-black text-white py-4 px-6 rounded-lg w-full font-bold ${
            selectedPayment && cartItems.length > 0
              ? "hover:bg-gray-800" 
              : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!selectedPayment || cartItems.length === 0}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
