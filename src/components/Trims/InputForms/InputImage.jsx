import React from 'react'

const InputImage = ({register, onChange, style="px-5 py-1 "}) => {
  return (    
      <input 
        type='file'
        accept="image/*"
        // defaultValue={defaultValue}
        // placeholder={placeholder}
        {...register}
        className={`w-full m-2 px-5 py-0  focus:border-primary-300 focus:transition-all ease-in duration-700 delay-300 rounded-full ring-2 ring-inset ring-primary-300  focus:ring-2 focus:ring-inset  sm:text-sm leading-6 sm:leading-8 lg:leading-6 md:leading-8 ${style}`}
        onChange={onChange}
      />   
  )
}

export default InputImage