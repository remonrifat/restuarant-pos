// import React from 'react'

import { useState } from "react";

const InputSelect = ({options, placeholder, buttonClasses, value, onChange, register}) => {
    // const [selectedOption, setSelectedOption] = useState(value || '');

    // const handleSelectChange = (event) => {
    //     const selectedValue = event.target.value;
    //     setSelectedOption(selectedValue);
    //     onChange(selectedValue);
    //   };
    
  return (
    <select
        {...register}
        // value={selectedOption}
        // onChange={handleSelectChange}
        className={buttonClasses}
      >
        <option disabled value="">{placeholder}</option>
        {options?.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
  )
}

export default InputSelect