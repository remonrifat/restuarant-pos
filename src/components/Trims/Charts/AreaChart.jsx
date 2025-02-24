import React, { useEffect, useRef } from 'react'

const AreaChart = ({ data1, data2, width, height }) => {

//   const totalPoints = data1.length;

//   // Helper function to create styles for each point
//   const createPointStyle = (d, index, isStacked = false) => {
//     const xPercent = (index / (totalPoints - 1)) * 100;
//     const yPercent = ((d / maxValue) * 100);
//     const bottomPercent = isStacked ? ((data1[index] / maxValue) * 100) : 0;

//     return {
//       left: `${xPercent}%`,
//       bottom: `${bottomPercent}%`,
//       height: `${yPercent}%`,
//     };
//   };

//   return (
//     <div className="relative border border-gray-300" style={{ width, height }}>
//       {data1.map((d, i) => (
//         <div
//           key={`data1-${i}`}
//           className="absolute bottom-0 w-1 bg-blue-300"
//           style={createPointStyle(d, i)}
//         ></div>
//       ))}
//       {data2.map((d, i) => (
//         <div
//           key={`data2-${i}`}
//           className="absolute bottom-0 w-1 bg-green-300"
//           style={createPointStyle(d, i, true)}
//         ></div>
//       ))}
//     </div>
//   );
const canvasRef = useRef(null);

const drawChart = (ctx, data, colors) => {
  const { width, height } = ctx.canvas;
  const padding = 20;
  const chartHeight = height - padding * 2;
  const chartWidth = width - padding * 2;

  const maxDataValue = Math.max(...data.flat());
  const pointGap = chartWidth / (data[0].length - 1);

  // Function to draw lines between points
  const drawLines = (points, color) => {
    ctx.beginPath();
    ctx.moveTo(padding, chartHeight + padding - (points[0] / maxDataValue) * chartHeight);

    points.forEach((point, index) => {
      const x = padding + index * pointGap;
      const y = chartHeight + padding - (point / maxDataValue) * chartHeight;
      ctx.lineTo(x, y);
    });

    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
  };

  // Function to draw points on the lines
  const drawPoints = (points, color) => {
    points.forEach((point, index) => {
      const x = padding + index * pointGap;
      const y = chartHeight + padding - (point / maxDataValue) * chartHeight;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    });
  };

  // Clear the canvas
  ctx.clearRect(0, 0, width, height);

  // Draw the first dataset (Last Month)
  drawLines(data[0], colors[0].line);
  drawPoints(data[0], colors[0].point);

  // Draw the second dataset (This Month)
  drawLines(data[1], colors[1].line);
  drawPoints(data[1], colors[1].point);
};

useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');

  const data = [
    [3000, 2500, 2800, 2600, 3004], // Last Month
    [3500, 4000, 3700, 3800, 4504], // This Month
  ];

  const colors = [
    { line: 'rgba(248, 113, 113, 1)', point: 'rgba(248, 113, 113, 1)' }, // Red
    { line: 'rgba(16, 185, 129, 1)', point: 'rgba(16, 185, 129, 1)' },   // Green
  ];

  drawChart(ctx, data, colors);
}, []);

return (
  <div className="px-2 py-4 bg-white border rounded-lg">
    <canvas ref={canvasRef} width={400} height={200}></canvas>
    <div className="flex justify-center mt-4">
      <div className="flex items-center mr-6">
        <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
        <span className="text-sm text-gray-600">Last Month</span>
      </div>
      <div className="flex items-center">
        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
        <span className="text-sm text-gray-600">This Month</span>
      </div>
    </div>
    <div className="flex justify-center mt-2">
      <div className="text-center mr-6">
        <span className="text-xl font-semibold text-gray-800">$3,004</span>
      </div>
      <div className="text-center">
        <span className="text-xl font-semibold text-gray-800">$4,504</span>
      </div>
    </div>
  </div>
);

}

export default AreaChart