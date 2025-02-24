import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { LuMinus, LuPlus } from "react-icons/lu";
import topSelling5 from "/src/assets/img/Cart/PersonalCare1.png";

const TableCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "unique_product_id_123",
      imageSrc: topSelling5,
      description: "All Natural Style Chicken Meatballs",
      discount: "75% Off",
      productName: "Grocery Zone",
      quantity: 1,
      price: 18.88,
      inStock: true,
    },
    {
      id: "unique_product_id_124",
      imageSrc: topSelling5,
      description: "All Natural Style Chicken Meatballs",
      discount: "75% Off",
      productName: "Grocery Zone",
      quantity: 1,
      price: 18.88,
      inStock: false,
    },
    {
      id: "unique_product_id_125",
      imageSrc: topSelling5,
      description: "All Natural Style Chicken Meatballs",
      discount: "75% Off",
      productName: "Grocery Zone",
      quantity: 1,
      price: 18.88,
      inStock: true,
    },
    {
      id: "unique_product_id_126",
      imageSrc: topSelling5,
      description: "All Natural Style Chicken Meatballs",
      discount: "75% Off",
      productName: "Grocery Zone",
      quantity: 1,
      price: 18.88,
      inStock: false,
    },
  ]);

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full ">
    <div className="mt-8 overflow-x-auto lg:overflow-visible rounded-xl">
  <table className="min-w-full w-full divide-y divide-gray-200 border border-gray-300 shadow-lg">
    <thead className="bg-gray-50">
      <tr>
        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Products</th>
        <th className="py-3 px-2 text-center text-sm font-semibold text-gray-700 whitespace-nowrap">Offer</th>
        <th className="py-3 px-2 text-center text-sm font-semibold text-gray-700 whitespace-nowrap">Generics</th>
        <th className="py-3 px-2 text-center text-sm font-semibold text-gray-700 whitespace-nowrap">Price</th>
        <th className="py-3 px-2 text-center text-sm font-semibold text-gray-700 whitespace-nowrap">Quantity</th>
        <th className="py-3 px-2 text-center text-sm font-semibold text-gray-700 whitespace-nowrap">Subtotal</th>
        <th className="py-3 px-2 text-center text-sm font-semibold text-gray-700 whitespace-nowrap">Remove</th>
      </tr>
    </thead>
    <tbody>
      {cartItems.map((product) => (
        <tr key={product.id} className="border-t border-gray-200">
          <td className="flex items-center space-x-4 py-4 px-6">
            <img
              src={product.imageSrc}
              alt={product.productName}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-cover"
            />
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2">{product.description}</p>
              <p className="text-xs text-gray-600">{product.productName}</p>
            </div>
          </td>
          <td className="py-4 text-center">
            <span className="px-2 py-1 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full">
              {product.discount}
            </span>
          </td>
          <td className="py-4 text-center text-gray-700 text-xs sm:text-sm">{product.productName}</td>
          <td className="py-4 text-center text-gray-900 text-xs sm:text-sm">৳{product.price.toFixed(2)}</td>
          <td className="py-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => decrementQuantity(product.id)}
                className="p-1 text-gray-600 bg-gray-200 rounded-full"
              >
                <LuMinus size={14} />
              </button>
              <span className="text-xs sm:text-sm font-semibold text-gray-900">{product.quantity}</span>
              <button
                onClick={() => incrementQuantity(product.id)}
                className="p-1 text-gray-600 bg-gray-200 rounded-full"
              >
                <LuPlus size={14} />
              </button>
            </div>
          </td>
          <td className="py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">
            ৳{(product.price * product.quantity).toFixed(2)}
          </td>
          <td className="py-4 text-center">
            <button onClick={() => removeItem(product.id)}>
              <AiOutlineDelete size={18} className="text-gray-500 hover:text-red-500 cursor-pointer" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      <div className="mt-6 text-center">
        <button className="text-green-600 text-sm font-semibold flex items-center justify-center space-x-1">
          <span>Add More Products</span>
          <LuPlus size={14} />
        </button>
      </div>
    </div>
  );
};

export default TableCart;
