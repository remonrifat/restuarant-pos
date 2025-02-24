import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonTab = ({setTab, tab, name="Home", style="bg-primary-500"}) => {  
  
  return (
       <button className={`hover:transition-all ease-in-out duration-300 font-medium text-2xl mx-1 mt-1  inline-block capitalize py-1 px-3  ${tab === name ? ' text-primary-500 border-b-2 border-primary-500' : 'text-dark-1'} ${style}`}
         onClick={()=>setTab(name)}
       >
        {name}
        </button>
  )
}

export default ButtonTab