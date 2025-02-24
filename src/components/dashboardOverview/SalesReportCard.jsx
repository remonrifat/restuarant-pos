import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";

const SalesReportCard = () => {
  const [activePoint, setActivePoint] = useState(null);

  // Sample data points for the chart with more points for smoother curve
  const dataPoints = [
    { x: 0, y: 200, value: "$3,845" },
    { x: 180, y: 160, value: "$4,120" },
    { x: 360, y: 150, value: "$4,251" },
    { x: 540, y: 180, value: "$3,920" },
    { x: 720, y: 120, value: "$4,680" },
    { x: 900, y: 100, value: "$5,100" }
  ];

  // Function to generate smooth curve path
  const generateSmoothPath = (points) => {
    if (points.length < 2) return "";

    const path = points.reduce((acc, point, i, arr) => {
      if (i === 0) {
        return `M ${point.x},${point.y}`;
      }

      // Calculate control points for smooth curve
      const prevPoint = arr[i - 1];
      const nextPoint = arr[i + 1];
      const smoothing = 0.2; // Adjust this value to control the curve smoothness

      // Calculate control points
      const cp1x = prevPoint.x + (point.x - prevPoint.x) * smoothing;
      const cp1y = prevPoint.y;
      const cp2x = point.x - (point.x - prevPoint.x) * smoothing;
      const cp2y = point.y;

      return `${acc} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${point.x},${point.y}`;
    }, "");

    return path;
  };

  const handlePointClick = (index) => {
    setActivePoint(index);
  };

  return (
    <div className="bg-white border rounded-xl shadow-xl p-6 w-full md:w-[800px] md:h-[474px]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Selling Report</h2>
        <div className="flex items-center space-x-2">
          <select className="border border-gray-300 rounded px-2 py-2 text-sm">
            <option>6 Months</option>
            <option>1 Year</option>
            <option>2 Years</option>
          </select>
          <button className="flex items-center bg-gray-600 text-white rounded px-4 py-2 text-sm">
            <FiDownload className="mr-2" /> {/* Export Icon */}
            Export
          </button>        
        </div>
      </div>

      {/* Summary Section */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="text-2xl font-bold">$12,135.69</div>
        <div className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">
          +8% vs last month
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="relative w-full h-[250px]">
        <svg
          viewBox="0 0 900 250"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background Gradient */}
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.2)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
            </linearGradient>
          </defs>

          {/* Area Fill with smooth curve */}
          <path
            d={`${generateSmoothPath(dataPoints)} L${dataPoints[dataPoints.length-1].x},250 L0,250 Z`}
            fill="url(#chartGradient)"
            className="transition-all duration-500 ease-in-out"
          />

          {/* Smooth Line Path */}
          <path
            d={generateSmoothPath(dataPoints)}
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            className="transition-all duration-500 ease-in-out"
          />

          {/* Data Points and Tooltips */}
          {dataPoints.map((point, index) => (
            <g key={index}>
              {/* Vertical Guide Line with smooth transition */}
              {activePoint === index && (
                <line
                  x1={point.x}
                  y1="0"
                  x2={point.x}
                  y2={point.y}
                  stroke="rgba(0, 0, 0, 0.2)"
                  strokeDasharray="4"
                  className="transition-opacity duration-300 ease-in-out"
                >
                  <animate
                    attributeName="opacity"
                    from="0"
                    to="1"
                    dur="0.3s"
                    fill="freeze"
                  />
                </line>
              )}
              
              {/* Larger clickable area */}
              <circle
                cx={point.x}
                cy={point.y}
                r="15"
                fill="transparent"
                className="cursor-pointer"
                onClick={() => handlePointClick(index)}
              />
              
              {/* Visible Point with smooth hover and click animations */}
              <circle
                cx={point.x}
                cy={point.y}
                r="6"
                fill="#10B981"
                className="cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  transform: `scale(${activePoint === index ? 1.5 : 1})`,
                  transformOrigin: `${point.x}px ${point.y}px`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = `scale(${activePoint === index ? 1.5 : 1})`;
                }}
                onClick={() => handlePointClick(index)}
              />

              {/* Tooltip with fade animation */}
              {activePoint === index && (
                <g className="transition-opacity duration-300 ease-in-out">
                  <rect
                    x={point.x - 40}
                    y={point.y - 45}
                    width="80"
                    height="30"
                    rx="6"
                    fill="white"
                    stroke="rgba(0, 0, 0, 0.1)"
                    filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.1))"
                  >
                    <animate
                      attributeName="opacity"
                      from="0"
                      to="1"
                      dur="0.3s"
                      fill="freeze"
                    />
                  </rect>
                  <text
                    x={point.x}
                    y={point.y - 25}
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="bold"
                    fill="black"
                    className="select-none"
                  >
                    {point.value}
                  </text>
                </g>
              )}
            </g>
          ))}
        </svg>

        {/* X-Axis Labels */}
        <div className="absolute bottom-0 w-full flex justify-between text-sm text-gray-500 px-4">
          <span>Feb 1</span>
          <span>Feb 7</span>
          <span>Feb 14</span>
          <span>Feb 21</span>
          <span>Feb 28</span>
        </div>
      </div>
    </div>
  );
};

export default SalesReportCard;
