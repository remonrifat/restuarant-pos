import React from 'react'

const SelectOptions = ({ options, label, register, id }) => {
  return (    
        <div className="w-full max-w-xs mx-1 my-2 px-0 py-0">
          {/* <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label> */}
          <div className="relative">
            <select
              id={id}
              {...register}
              className="block appearance-none w-full rounded-full border border-gray-300 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {options?.map((option, index) => (
                <option key={index} value={option.value} className='text-black'>{option.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
  )
}

export default SelectOptions