import React, { useEffect, useState } from 'react'
import { GrClose } from "react-icons/gr";


const ModalPrimary = ({ isOpen, onClose, title, children }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      setTimeout(() => setShow(false), 1000); // Match this duration with your animation duration
    }
  }, [isOpen]);

  if (!show && !isOpen) return null;

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'bg-secondary-900 bg-opacity-30' : 'bg-opacity-0'} transition-opacity duration-500`}
    onClick={handleClose}
    >
    <div className={`bg-secondary-100 rounded-lg overflow-hidden shadow-3xl transform transition-all duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        <div className="px-4 py-5 sm:px-6 flex flex-row justify-center items-center">
          <h3 className="w-[95%] text-4xl leading-8 font-extralight text-center text-text-secondary-900">{title}</h3>
          <div className="w-[30px] min-w-[30px] justify-center  p-2 sm:px-0 sm:flex sm:flex-row-reverse font-extrabold text-danger-500 cursor-pointer bg-secondary-300 rounded-full">          
            <GrClose  onClick={onClose} size={15} />         
        </div>
        </div>
        <div className="px-4 py-2 sm:px-5">
          {children}
        </div>        
      </div>
    </div>
  )
}

export default ModalPrimary