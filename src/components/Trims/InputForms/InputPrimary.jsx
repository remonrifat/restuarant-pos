import React from 'react'

const InputPrimary = ({type, clasName, register, placeHolder}) => {
  return (
    <input {...register} className={` border border-primary-700 w-full h-11 rounded-full bg-primary-100 ${clasName}`} type={type} placeholder={placeHolder}/>
  )
}

export default InputPrimary
