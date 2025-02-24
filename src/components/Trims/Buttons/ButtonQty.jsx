import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
const ButtonQty = ({fronticon,backicon,bg}) => {
  // Initialize the quantity state
  const [quantity, setQuantity] = useState(1);

  // Handle increment
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Handle decrement
  const handleDecrement = () => {
    setQuantity(prevQuantity => Math.max(0, prevQuantity - 1)); // Prevent negative quantities
  };
    
  return (
    <button className={` px-3 py-3 rounded-full flex items-center gap-5 justify-center ${bg}`}
    onClick={onclick}
  >
   <span onClick={handleDecrement} >{fronticon}</span>
   <span>{quantity}</span>
   <span  onClick={handleIncrement}>{backicon}</span>
   </button>
  )
}

export default ButtonQty
