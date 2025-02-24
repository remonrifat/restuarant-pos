// import React from 'react'

import { useState } from "react";
import { useSwiper } from "swiper/react";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const ButtonSlider = ({headline}) => {
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  const swiper = useSwiper(); // This is the swiper instance

  return (
    <div className="flex justify-between w-full absolute top-0 z-40">
      <div className="flex items-baseline gap-3">
        <div className="xl:text-2xl text-lg font-bold">{headline}</div>
        <Link className="text-sm text-primary-500">See All</Link>
      </div>
      <div className=" bg-slate-300 px-5 py-3 -mt-2 bg-opacity-0 rounded-full flex gap-4">
        <PiArrowLeftThin
          onMouseEnter={() => setHoveredLeft(true)}
          onMouseLeave={() => setHoveredLeft(false)}
          onClick={() => swiper.slidePrev()}
          className={`w-11 h-7 text-primary-500 outline outline-1 rounded-3xl ${
            hoveredLeft ? "text-white bg-primary-500" : "text-primary-500"
          } `}
        />
        <PiArrowRightThin
          onMouseEnter={() => setHoveredRight(true)}
          onMouseLeave={() => setHoveredRight(false)}
          onClick={() => swiper.slideNext()}
          className={`w-11 h-7 text-primary-500 outline outline-1 rounded-3xl ${
            hoveredRight ? "text-white bg-primary-500" : "text-primary-500"
          } `}
        />
      </div>
    </div>
  );
};

export default ButtonSlider;
