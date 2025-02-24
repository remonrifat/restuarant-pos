import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';

const PasswordInput = React.forwardRef(({ 
  placeholder = 'Password', 
  error,
  register,
  name = 'password',
  ...props 
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // If register is not provided, create a no-op function
  const registerProps = register 
    ? register(name, props.validation || {}) 
    : {};

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaLock className="text-gray-400 dark:text-gray-500" />
        </div>
        <input
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          {...registerProps}
          className={`appearance-none rounded-md relative block w-full px-10 py-2 border ${
            error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
          } placeholder-gray-500 text-gray-900 dark:text-white dark:bg-[#2a2a2a] focus:outline-none focus:ring-[#D76527] focus:border-[#D76527] focus:z-10 sm:text-sm`}
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1">
          {typeof error === 'object' ? error.message : error}
        </p>
      )}
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
