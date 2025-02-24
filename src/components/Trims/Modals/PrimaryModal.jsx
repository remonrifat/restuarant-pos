/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiCloseLargeFill } from "react-icons/ri";



const PrimaryModal = ({ isVisible, open, setOpen, content }) => {
  const [showModal, setShowModal] = useState(false);

  console.log(open);

  // useEffect(() => {
  //   if (open) {
  //     setShowModal(true);
  //   } else {
  //     setTimeout(() => setShowModal(false), 300); // duration should match the transition duration
  //   }
  // }, [open]);



  const closeModal = () => {
        setOpen(false);
      };
  return (

    <div
      className={`${
        open === true ? "block " : "hidden"
      } fixed h-full w-full z-40 bg-opacity-40 bg-black flex justify-center items-center`}
      onClick={closeModal}
    >
      
     
      
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed bg-gray-50 2xl:w-2/4 mx-auto z-50 min-h-[45vh] max-h-[600px] transition ease-in-out delay-200 ${ open === true ? "animate-fade-in" : " " } `}  
      >
        <div className="relative">
          <button className="absolute top-2 right-2 z-[53] p-2 " onClick={closeModal}>
          <RiCloseLargeFill size={18} className="text-dark-1"/>
          </button>
        </div>
        {content}

        {/* <button onClick={closeModal} className="border p-6">Close Modal</button> */}
      
      
    </div>
  </div>
  );
};

export default PrimaryModal;


// const PrimaryModal = ({ open, setOpen, content }) => {
  

// //   console.log(open);

//   // const openModal = () => {
//   //     setOpen(opened)
//   // }

//   // Update the local state when the prop changes
  

//   // Function to open the modal
 

//   // Function to close the modal
//   const closeModal = () => {
//     setOpen(false);
//   };

//   return (
//     <div
//       className={`${
//         open === true ? "block " : "hidden"
//       } fixed h-full w-full z-40 bg-opacity-40 bg-black flex justify-center items-center`}
//       onClick={closeModal}
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="fixed bg-gray-50 w-2/4 mx-auto z-50 min-h-[45vh] max-h-[600px]"
//       >
//         {content}

//         {/* <button onClick={closeModal} className="border p-6">Close Modal</button> */}
//       </div>
//     </div>
//   );
// };

// export default PrimaryModal;
