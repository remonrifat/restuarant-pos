import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Slices/cartSlice';
import barcodeProducts from '../data/barcodeProducts.json';
import { FaSearch } from 'react-icons/fa';

const BarcodeScanner = () => {
  const [barcodeInput, setBarcodeInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleScanClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleBarcodeSubmit = (e) => {
    e.preventDefault();
    searchProduct(barcodeInput);
  };

  const handleBarcodeChange = (e) => {
    setBarcodeInput(e.target.value);
    if (e.target.value.length === 13) {
      searchProduct(e.target.value);
    }
  };

  const handleSearch = () => {
    searchProduct(searchInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchProduct(searchInput);
    }
  };

  const searchProduct = (input) => {
    const scannedProduct = barcodeProducts.products.find(
      (product) => product.barcode === input || product.title.toLowerCase().includes(input.toLowerCase())
    );

    if (scannedProduct) {
      const productToAdd = {
        ...scannedProduct,
        quantity: 1,
        id: `${scannedProduct.title}-${typeof scannedProduct.price === 'string' ? scannedProduct.price.replace(/\s+/g, '-').toLowerCase() : String(scannedProduct.price).replace(/\s+/g, '-').toLowerCase()}`,
      };
      dispatch(addToCart(productToAdd));
      setBarcodeInput('');
      setSearchInput('');
    } else {
      alert('Product not found');
      setBarcodeInput('');
      setSearchInput('');
    }
  };

  const toggleScanning = () => {
    setIsScanning((prev) => !prev);
    handleScanClick();
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Search Bar */}
      <div className="flex items-center border ml-9 border-[#D76527] rounded-full overflow-hidden w-full max-w-md">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search Products or Scan Barcode..."
          className="px-4 mr-9 text-lg w-full outline-none"
          value={barcodeInput || searchInput}
          onChange={(e) => {
            setBarcodeInput(e.target.value);
            setSearchInput(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <button
        onClick={toggleScanning}
        className={`flex items-center gap-2 px-4 py-3 ${isScanning ? 'bg-[#D76527] text-white' : 'bg-white text-black'} border border-gray-400  hover:bg-[#D76527] hover:text-white transition`}
      >
        <img
          src="/../../src/assets/img/Icon/scan.png"
          alt="QR"
          className=""
        />
        <span className="hidden md:inline px-2 mr-6">
          {isScanning ? 'Scanning...' : 'ProductQR'}
        </span>
      </button>
      </div>
    </div>
  );
};

export default BarcodeScanner;
