import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/Slices/cartSlice';
import { selectCalculations, updateCalculations } from '../../redux/Slices/calculationSlice';

const CartCalculations = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const calculations = useSelector(selectCalculations);

  useEffect(() => {
    dispatch(updateCalculations({ cartItems }));
  }, [cartItems, dispatch]);

  const formatCurrency = (value) => {
    return `$${value.toFixed(2)}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-semibold">{formatCurrency(calculations.subtotal)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Discount (10%):</span>
          <span className="font-semibold text-red-500">-{formatCurrency(calculations.discount)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Special Discount (5%):</span>
          <span className="font-semibold text-red-500">-{formatCurrency(calculations.specialDiscount)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">VAT ({calculations.vatPercentage}%):</span>
          <span className="font-semibold text-green-600">+{formatCurrency(calculations.vat)}</span>
        </div>
        
        <div className="h-px bg-gray-200 my-2"></div>
        
        <div className="flex justify-between items-center text-lg">
          <span className="font-bold">Total:</span>
          <span className="font-bold text-[#D76527]">{formatCurrency(calculations.total)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartCalculations;
