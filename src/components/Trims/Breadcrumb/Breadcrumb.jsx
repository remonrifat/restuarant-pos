// import React from 'react'

import { MdOutlineKeyboardArrowRight } from "react-icons/md"


// eslint-disable-next-line react/prop-types
const Breadcrumb = ({firstDir="Home",}) => {
  return (
    <div>
      <div className="flex items-center py-4">
        <div className="text-gray-500 text-sm">{firstDir}</div>
        <div className="text-gray-500 text-sm mx-2"><MdOutlineKeyboardArrowRight /></div>
        <div className=" text-sm font-medium">  </div>
      </div>
    </div>
  )
}

export default Breadcrumb
