import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import categoryData from "../data/categories.json";
import { setActiveCategory, selectActiveCategory } from "../../redux/Slices/categorySlice"; 

const CategorySlider = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(selectActiveCategory);

  return (
    <div className="relative my-8 w-full max-w-[calc(100%-2rem)] md:max-w-[calc(100%-16rem)] lg:max-w-[calc(100%-1rem)] hidden md:block">
      {/* Swiper Slider */}
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="category-swiper z-0"
      >
        {categoryData.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`flex justify-center items-center cursor-pointer 
              rounded-full py-4  text-base md:text-lg lg:text-xl font-bold transition-all ${
                activeCategory === index
                  ? "bg-[#D76527] text-white"
                  : "bg-white text-black border border-gray-200"
              }`}
            style={{ 
              width: "auto", 
              minWidth: "150px",
              maxWidth: "180px",
              height: "60px",
              marginRight: "10px"
            }}
            onClick={() => dispatch(setActiveCategory(index))}  
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mr-2 rounded-full object-cover"
            />
            <span className="truncate">{item.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
