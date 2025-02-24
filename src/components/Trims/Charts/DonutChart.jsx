// src/DonutChart.js
import React from 'react';
// import './DonutChart.css';

const DonutChart = ({ size, data }) => {
    // Normalize the data to a percentage for each slice
    data = data.map((item) => ({
     ...item,
      value: (item.value / data.reduce((acc, slice) => acc + slice.value, 0)) * 100,
    }));
    // Sort the data by value in descending order
    data.sort((a, b) => b.value - a.value);
    // Define the colors for each slice
    const colors = ['#179A75', '#000000E6', '#E8F3F1', '#06A316', '#E8F3F1', '#06A316'];
    data = data.map((item, index) => ({...item, color: colors[index % colors.length] }));
    
    

  // Calculate the total value for normalization
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="donut-chart relative rounded-[50%] overflow-hidden flex justify-center items-center" style={{ width: size, height: size }}>
      {data.map((slice, index) => {
        const sliceValue = (slice.value / total) * 100;
        const rotation = data
          .slice(0, index)
          .reduce((acc, item) => acc + (item.value / total) * 270, 0);
        const clipStyle =
          sliceValue > 50
            ? { clip: 'rect(auto, auto, auto, auto)' }
            : { clip: `rect(0, ${size}px, ${size}px, ${size / 2}px) `};

        return (
          <div
            key={index}
            className="donut-slice absolute w-full h-full rounded-[50%]"
            style={{
              backgroundColor: slice.color,
              transform: `rotate(${rotation}deg)`,
              ...clipStyle,
              
            }}
          >
            <div
              className="donut-slice-inner absolute w-full h-full rounded-[50%]"
              style={{
                transform: `rotate(${sliceValue * 3.6}deg)`,
                backgroundColor: slice.color,
              }}
            ></div>
          </div>
        );
      })}
      <div
        className="donut-hole absolute rounded-[50%] bg-white"
        style={{ width: size * 0.6, height: size * 0.6 }}
      ></div>
      <div className="donut-label absolute text-center">Donut Chart</div>
    </div>
  );
};

export default DonutChart;
