import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import PersonalCare6 from "../../assets/img/Cart/PersonalCare2.png";

const SliderPrimary = ({ slides, test }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  // Initialize the state with the first image selected
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Function to handle image selection
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setSelectedImageIndex(index);
  };

  const imgRef = useRef(null);
  const lensRef = useRef(null);
  const resultRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const lens = lensRef.current;
    const result = resultRef.current;

    const cx = (result.offsetWidth / lens.offsetWidth) * 0.5; // Reduce zoom by 50%
    const cy = (result.offsetHeight / lens.offsetHeight) * 0.5; // Reduce zoom by 50%

    result.style.backgroundImage = `url('${img.src}')`;
    result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

    const moveLens = (e) => {
      e.preventDefault();
      const pos = getCursorPos(e);
      let x = pos.x - lens.offsetWidth / 2;
      let y = pos.y - lens.offsetHeight / 2;

      if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
      if (x < 0) x = 0;
      if (y > img.height - lens.offsetHeight)
        y = img.height - lens.offsetHeight;
      if (y < 0) y = 0;

      lens.style.left = `${x}px`;
      lens.style.top = `${y}px`;
      result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    };

    const getCursorPos = (e) => {
      const a = img.getBoundingClientRect();
      const x = e.pageX - a.left - window.pageXOffset;
      const y = e.pageY - a.top - window.pageYOffset;
      return { x, y };
    };

    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    return () => {
      lens.removeEventListener("mousemove", moveLens);
      img.removeEventListener("mousemove", moveLens);
      lens.removeEventListener("touchmove", moveLens);
      img.removeEventListener("touchmove", moveLens);
    };
  }, [slides, selectedImageIndex]);

  const [zoomed, setZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    setZoomPosition({ x, y });
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  const [hovered, setHovered] = useState(false);

  // zoom for mobile view

  const [scale, setScale] = useState(1);
  const handleTouchStart = (e) => {
    if (e.touches.length === 3) {
      setScale(2); // Adjust zoom level as needed
    }
  };

  const handleTouchEnd = () => {
    setScale(1); // Reset zoom on touch end
  };

  return (
    <>
      <div className="flex">
        <div className="relative w-full h-[450px] ">
          {/* Large display area for the selected image */}
          <div className="relative">
            {slides?.[selectedImageIndex]?.image && (
              <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <img
                  ref={imgRef}
                  className="w-full h-96 object-contain block border transition-transform duration-300"
                  style={{ transform: `scale(${scale})` }}
                  src={slides[selectedImageIndex].image}
                  alt={"Zoom"}
                />
                <div
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  ref={lensRef}
                  className="absolute border bg-teal-200 opacity-20  border-gray-400 w-10 h-10 cursor-zoom-in"
                ></div>
              </div>
            )}
          </div>

          <div
            ref={resultRef}
            className={`absolute left-full top-0 ml-4 border border-gray-400 w-[500px] h-[400px] transition-all duration-300 ease-in-out transform ${
              hovered
                ? "scale-100 opacity-100 visible"
                : "scale-50 opacity-0 invisible"
            }`}
          ></div>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex w-full space-x-2 overflow-x-scroll border">
          {slides?.map((item, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`min-w-24 h-24  object-fill border ${
                index === currentSlide ? "bg-secondary-500" : "bg-gray-400"
              }`}
            >
              <img className="w-24 h-[94px]" src={item?.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderPrimary;
