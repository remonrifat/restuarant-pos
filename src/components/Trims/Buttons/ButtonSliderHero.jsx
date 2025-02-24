// import React from 'react'

import { useState } from "react";
import { useSwiper } from "swiper/react";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const ButtonSliderHero = () => {
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  const swiper = useSwiper(); // This is the swiper instance

  return (
    <div className=" flex justify-between items-center absolute bottom-0 right-0 z-40 bg-light-5 bg-opacity-70 rounded-tl-2xl rounded-br-xl border">
     
      <div className=" px-4 py-4 bg-opacity-0 rounded-full flex gap-4">
        <PiArrowLeftThin
          onMouseEnter={() => setHoveredLeft(true)}
          onMouseLeave={() => setHoveredLeft(false)}
          onClick={() => swiper.slidePrev()}
          className={`w-10 h-7 text-primary-500 outline outline-1 rounded-3xl transition-all duration-500  ${
            hoveredLeft ? "text-white bg-primary-500" : "text-primary-500 bg-white"
          } `}
        />
        <PiArrowRightThin
          onMouseEnter={() => setHoveredRight(true)}
          onMouseLeave={() => setHoveredRight(false)}
          onClick={() => swiper.slideNext()}
          className={`w-10 h-7 text-primary-500 outline outline-1 rounded-3xl transition-all duration-500  ${
            hoveredRight ? "text-white bg-primary-500" : "text-primary-500 bg-white"
          } `}
        />
      </div>
    </div>
  );
};

export default ButtonSliderHero;
