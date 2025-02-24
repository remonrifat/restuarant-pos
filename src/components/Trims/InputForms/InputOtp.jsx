import React, { useRef } from "react";

const InputOtp = ({ type, clasName, register, onNext }) => {

    const inputRef = useRef(null)
  const handleInput = (event) => {
    event.target.value = event.target.value.slice(0, 1); // Limit to one character
    if (event.target.value && onNext) {
      onNext();
    }
  };

  return (
    <input
      {...register}
      ref={inputRef}
      className={` w-full h-full flex flex-col items-center justify-center text-center border-b-2 border-gray-400 text-lg focus:ring-1 ring-secondary-500 ${clasName}`}
      type={type}
      onInput={handleInput}
    />
  );
};

export default InputOtp;
