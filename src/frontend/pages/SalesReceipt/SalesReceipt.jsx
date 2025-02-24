import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import JsBarcode from "jsbarcode";

const SalesReceipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const barcodeRef = useRef(null);
  const [barcodeError, setBarcodeError] = useState(null);
  const { 
    paymentMethod, 
    cartItems, 
    subTotal, 
    vat, 
    total, 
    date, 
    token = `HSDS-${Date.now()}` // Fallback token generation
  } = location.state || {};

  useEffect(() => {
    if (!cartItems || !paymentMethod) {
      navigate('/');
      return;
    }

    // Generate barcode
    if (barcodeRef.current && token) {
      try {
        // Ensure token is a string
        const barcodeToken = String(token);
        
        // Generate barcode
        JsBarcode(barcodeRef.current, barcodeToken, {
          format: "CODE128",
          width: 2,
          height: 50,
          displayValue: true,
          text: barcodeToken,
          fontSize: 10,
          margin: 10
        });
        
        // Clear any previous errors
        setBarcodeError(null);
      } catch (error) {
        console.error("Barcode generation error:", error);
        setBarcodeError(error.message);
      }
    }
  }, [cartItems, paymentMethod, navigate, token]);

  const formatDate = (date) => {
    if (!date) return { date: "", day: "", time: "" };
    const d = new Date(date);
    return {
      date: d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      day: d.toLocaleDateString('en-GB', { weekday: 'short' }),
      time: d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true })
    };
  };

  const dateInfo = formatDate(date);

  return (
    <div className="w-[300px] bg-white p-4 mx-auto shadow-lg border border-gray-300 rounded">
      {/* Header */}
      <div className="text-center border-b pb-2">
        <div className="w-12 h-12 mx-auto mb-2">
          <img
            src="/src/assets/img/logo/logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-sm font-semibold">HSDS Cooking</h2>
        <p className="text-xs text-gray-500">Mirpur-2, Dhaka, (Branch)</p>
        <div className="flex justify-between text-xs mt-2">
          <span>{dateInfo.date}</span>
          <span>{dateInfo.day}</span>
          <span>{dateInfo.time}</span>
        </div>
      </div>

      {/* Token */}
      <div className="border-dashed border-2 border-gray-300 text-center py-2 my-2 text-xs font-semibold">
        TOKEN: <span className="text-gray-600">{token}</span>
      </div>

      {/* Sales Receipt Title */}
      <h3 className="text-center text-lg font-bold mb-2">Sales Receipt</h3>

      {/* Table */}
      <div className="text-xs">
        <div className="grid grid-cols-3 font-semibold border-b pb-2">
          <span>Qty.</span>
          <span>Products</span>
          <span className="text-right">Price</span>
        </div>

        {/* Items */}
        {cartItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 border-b py-1">
            <span>{item.quantity}</span>
            <div>
              <p>{item.title}</p>
              {item.weight && <p className="text-gray-500 text-[10px]">{item.weight}</p>}
            </div>
            <span className="text-right">{item.formattedTotal}</span>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="mt-2 text-sm">
        <div className="flex justify-between border-t pt-2">
          <span>Sub Total</span>
          <span>{subTotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Vat</span>
          <span>{vat}</span>
        </div>
        <div className="flex justify-between font-bold border-t pt-2">
          <span>Total</span>
          <span>{total}</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className="flex justify-between text-sm mt-2">
        <span>Payment Method:</span>
        <span>{paymentMethod}</span>
      </div>

      {/* Thank You Message */}
      <p className="text-center text-lg font-bold mt-4">Thank You</p>

      {/* Barcode */}
      <div className="w-full mt-2 flex flex-col items-center justify-center">
        {barcodeError ? (
          <div className="text-red-500 text-xs">
            Barcode Error: {barcodeError}
          </div>
        ) : (
          <svg ref={barcodeRef} className="w-full"></svg>
        )}
       
      </div>
    </div>
  );
};

export default SalesReceipt;
