import React, { useEffect, useState } from 'react'
import './Loader.css';

const Loader = () => {
  const [count, setCount] = useState(10);
  const [words] = useState(['L', 'LO', 'LOA', 'LOAD', 'LOADI', 'LOADIN', 'LOADING', 'LOADING.', 'LOADING..', 'LOADING...', '']);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  

  useEffect(() => {
    
    const interval = setInterval(() => {
      // setTranslate('translate-x-0'); // Start animation
      setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 10));
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      // setTranslate('-translate-x-10'); // End animation
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
   <div className="flex items-center justify-center h-[35vh]">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-secondary-100 bg-secondary-900 rounded-full bg-animated">
          {count}
        </div>
        <div className="absolute w-14 h-14 hsborder"></div>
        
      </div><span className={`mt-0 text-center font-extrabold text-[12px] `}>{words[currentWordIndex]}</span>
    </div>
  )
}

export default Loader