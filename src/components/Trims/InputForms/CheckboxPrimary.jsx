import React from 'react'

const CheckboxPrimary = ({type, register, defaultValue, text="Enter here", style="px-5 py-2 "}) => {
  return ( 
    <>   
      <input 
        type={type}
        defaultValue={(e) => e.target.value(checked(true))}        
        {...register}
        className={`w-[100px] focus:border-primary-300 focus:transition-all ease-in duration-700 delay-300 rounded-full sm:text-sm leading-6 sm:leading-8 lg:leading-6 md:leading-8 ${style}`}
      />
      <label className='ml-0 py-2 leading-8'>{text}</label> 
      </>  
  )
}

export default CheckboxPrimary