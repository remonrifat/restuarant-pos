import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiGrid, FiMenu } from "react-icons/fi";
import {
  setActiveTab,
  toggleClickedCard,
  setShowCategoryImagesAbove,
  selectActiveTab,
  selectClickedCards,
  selectShowCategoryImagesAbove
} from "../../redux/Slices/mainCategorySlice";
import { addToCart, removeItem, updateCart, selectCartItems } from "../../redux/Slices/cartSlice";
import { formatPrice } from '../../frontend/layouts/Sidebar';

const categories = [
  "All",
  "Milks & Dairies",
  "Coffees & Teas",
  "Pet Foods",
];

const MainCategory = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);
  const clickedCards = useSelector(selectClickedCards);
  const showCategoryImagesAbove = useSelector(selectShowCategoryImagesAbove);
  const searchQuery = useSelector(state => state.navbar.searchQuery);
  const cartItems = useSelector(selectCartItems);
  const contentRef = useRef(null);

  const [allProducts, setAllProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});

  const sizes = ['M', 'L', 'XL', 'XXL'];

  const getSizePrices = (product) => {
    const basePrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
    return {
      'M': basePrice,
      'L': product.priceL || basePrice * 1.2,
      'XL': product.priceXL || basePrice * 1.4,
      'XXL': product.priceXXL || basePrice * 1.6
    };
  };

  const isProductInCart = (product, size) => {
    return cartItems.some(item =>
      item.title === product.title &&
      item.size === size
    );
  };

  const handleCardClick = (product, size = 'M') => {
    const sizePrices = getSizePrices(product);
    const selectedPrice = sizePrices[size];

    // Calculate base discount if oldPrice exists
    const baseDiscount = product.oldPrice 
      ? parseFloat(product.oldPrice.replace(/[^\d.]/g, '')) - parseFloat(selectedPrice.toString().replace(/[^\d.]/g, ''))
      : 0;

    const productToAdd = {
      ...product,
      quantity: 1,
      price: selectedPrice,
      size: size,
      id: `${product.title}-${size}`.replace(/\s+/g, '-').toLowerCase(),
      baseDiscount: baseDiscount > 0 ? baseDiscount : undefined
    };
    dispatch(addToCart(productToAdd));
  };

  const handleSizeChange = (product, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [product.title]: size
    }));
  };

  const handleUpdateQuantity = (product, size, newQuantity) => {
    const productId = `${product.title}-${size}`.replace(/\s+/g, '-').toLowerCase();
    if (newQuantity < 1) {
      dispatch(removeItem(productId));
    } else {
      dispatch(updateCart({ productId, quantity: newQuantity }));
    }
  };

  const getProductQuantityInCart = (product, size) => {
    const cartItem = cartItems.find(
      item => item.title === product.title && item.size === size
    );
    return cartItem ? cartItem.quantity : 0;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/src/components/data/products.json');
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let products = activeTab === "All"
      ? Object.values(allProducts).flat()
      : allProducts[activeTab] || [];

    if (searchQuery?.trim()) {
      const query = searchQuery.toLowerCase().trim();
      products = products.filter(product =>
        product.title.toLowerCase().includes(query)
      );
    }

    const displayedProducts = products.slice(0, 2);
    setFilteredProducts(displayedProducts);
  }, [searchQuery, activeTab, allProducts]);

  const handleDashboardClick = () => {
    dispatch(setShowCategoryImagesAbove(true));
  };

  const handleMegaMenuClick = () => {
    dispatch(setShowCategoryImagesAbove(false));
  };

  return (
    <div className="mt-9">

      {/* Tabs */}
      <div className="flex flex-col md:flex-row md:items-center border-b px-4 md:px-8 max-w-[1450px] min-h-[68px] md:gap-8 lg:gap-20 xl:gap-96 bg-transparent">
        <div className="flex gap-2 md:gap-4">
          <p className="text-xl md:text-2xl xl:text-3xl font-bold">All Food</p>
          <p className="text-sm md:text-base xl:text-lg">(Total: {filteredProducts.length})</p>
        </div>

        {/* Category Buttons */}
        <div className="flex gap-4 text-sm md:text-base xl:text-xl whitespace-nowrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => dispatch(setActiveTab(category))}
              className={`px-3 md:px-4 py-2 md:py-3 font-bold ${activeTab === category ? "text-[#D76527]" : ""
                }`}
            >
              {category}
            </button>
          ))}

          {/* Mega Menu Button */}
          <button
            onClick={handleMegaMenuClick}
            className="text-xl md:text-2xl cursor-pointer outline-none"
          >
            <FiMenu size={24} className="md:w-8 md:h-8" />
          </button>

          {/* Dashboard Button */}
          <button
            onClick={handleDashboardClick}
            className="text-xl md:text-2xl cursor-pointer outline-none"
          >
            <FiGrid size={24} className="md:w-8 md:h-8" />
          </button>
        </div>
      </div>

      {/* Product List */}
      <div
        ref={contentRef}
        className={`mt-5 md:px-8 max-w-[1400px] min-h-[69px] ${showCategoryImagesAbove
            ? "gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            : "flex flex-wrap gap-4"
          }`}
      >
        {loading ? (
          <p>Loading...</p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-center col-span-full">No products found</p>
        ) : (
          filteredProducts.map((product) => {
            const selectedSize = selectedSizes[product.title] || 'M';
            const sizePrices = getSizePrices(product);

            return (
              <div
                key={product.title + product.price}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg rounded-lg relative ${showCategoryImagesAbove
                  ? 'p-2'
                  : 'flex-shrink-0 w-[280px] bg-white shadow-sm hover:shadow-md p-3'
                }`}
              >
                {showCategoryImagesAbove ? (
                  // Grid Layout
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <img
                        src={product.img}
                        alt={product.title}
                        className={`w-full md:w-[180px] lg:w-[200px] xl:w-[208px] h-[160px] md:h-[180px] lg:h-[200px] object-cover rounded-md mb-2`}
                      />

                      {/* Size Selection Buttons */}
                      <div className="flex justify-center gap-2 mb-2">
                        {sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(product, size)}
                            className={`px-3 py-1 rounded-md text-sm ${selectedSize === size 
                              ? 'bg-[#D76527] text-white' 
                              : 'bg-gray-200 text-gray-700'}`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>

                      {/* Price Display */}
                      <div className="text-center mb-2">
                        <span className="text-lg font-bold text-[#D76527]">
                          {formatPrice(sizePrices[selectedSize])}
                        </span>
                        {product.oldPrice && (
                          <span className="ml-2 line-through text-gray-500 text-sm">
                            {formatPrice(product.oldPrice)}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => handleCardClick(product, selectedSize)}
                        className="w-full bg-[#D76527] text-white py-2 rounded-md hover:bg-[#B54C1E] transition-colors"
                      >
                        Add to Order
                      </button>

                      {/* Quantity Control for Added Items */}
                      {isProductInCart(product, selectedSize) && (
                        <div className="flex items-center justify-center mt-2 gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleUpdateQuantity(product, selectedSize, getProductQuantityInCart(product, selectedSize) - 1);
                            }}
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 text-[#D76527] rounded-full hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span>{getProductQuantityInCart(product, selectedSize)}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleUpdateQuantity(product, selectedSize, getProductQuantityInCart(product, selectedSize) + 1);
                            }}
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 text-[#D76527] rounded-full hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // List Layout
                  <div className="flex items-center gap-4 w-full">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-base font-bold line-clamp-2 mb-2">{product.title}</h3>
                      
                      {/* Size Selection Buttons */}
                      <div className="flex gap-2 mb-2">
                        {sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(product, size)}
                            className={`px-2 py-1 rounded-md text-xs ${selectedSize === size 
                              ? 'bg-[#D76527] text-white' 
                              : 'bg-gray-200 text-gray-700'}`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>

                      {/* Price Display */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-[#D76527] font-semibold">
                          {formatPrice(sizePrices[selectedSize])}
                        </span>
                        {product.oldPrice && (
                          <span className="text-xs text-gray-600 line-through">
                            {formatPrice(product.oldPrice)}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart and Quantity Control */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCardClick(product, selectedSize)}
                          className="bg-[#D76527] text-white px-3 py-1 rounded-md text-xs hover:bg-[#B54C1E] transition-colors"
                        >
                          Add to Cart
                        </button>

                        {isProductInCart(product, selectedSize) && (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleUpdateQuantity(product, selectedSize, getProductQuantityInCart(product, selectedSize) - 1);
                              }}
                              className="w-6 h-6 flex items-center justify-center bg-gray-200 text-[#D76527] rounded-full hover:bg-gray-300 text-xs"
                            >
                              -
                            </button>
                            <span className="text-sm">{getProductQuantityInCart(product, selectedSize)}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleUpdateQuantity(product, selectedSize, getProductQuantityInCart(product, selectedSize) + 1);
                              }}
                              className="w-6 h-6 flex items-center justify-center bg-gray-200 text-[#D76527] rounded-full hover:bg-gray-300 text-xs"
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MainCategory;
