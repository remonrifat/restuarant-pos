// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeItem, updateCart, selectCartItems } from "../../../redux/Slices/cartSlice";

// const OrderCart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(selectCartItems);

//   console.log("Cart Items:", cartItems); // Add this for debugging

//   const handleRemoveItem = (productId) => {
//     dispatch(removeItem(productId)); // Dispatch remove action
//   };

//   const handleUpdateQuantity = (productId, quantity) => {
//     if (quantity < 1) return;
//     dispatch(updateCart({ productId, quantity })); // Dispatch update action
//   };

//   return (
//     <div className="p-4 flex-1 overflow-y-auto">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex justify-between items-center border-b py-2">
//               <div className="flex items-center">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-16 h-16 object-cover rounded-md mr-4"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold">{item.title}</h3>
//                   <p className="text-sm text-gray-600 line-through">{item.oldPrice}</p>
//                   <p className="text-sm text-[#D76527]">{item.price}</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
//                   className="w-12 p-1 text-center border rounded"
//                   min={1}
//                 />
//                 <button
//                   onClick={() => handleRemoveItem(item.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderCart;
