import React, { useState } from "react";

const CustomerSatisfaction = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  // Sample data points for the lines
  const greenPoints = [
    { x: 0, y: 70, value: "87%" },
    { x: 50, y: 45, value: "92%" },
    { x: 100, y: 55, value: "89%" },
    { x: 150, y: 35, value: "94%" },
    { x: 200, y: 50, value: "90%" },
    { x: 250, y: 30, value: "95%" },
    { x: 300, y: 20, value: "98%" }
  ];

  const redPoints = [
    { x: 0, y: 85, value: "3%" },
    { x: 50, y: 75, value: "5%" },
    { x: 100, y: 80, value: "4%" },
    { x: 150, y: 70, value: "6%" },
    { x: 200, y: 75, value: "5%" },
    { x: 250, y: 65, value: "7%" },
    { x: 300, y: 60, value: "8%" }
  ];

  // Function to generate smooth curve using cubic bezier
  const generateSmoothPath = (points) => {
    if (points.length < 2) return "";

    const path = points.reduce((acc, point, i, arr) => {
      if (i === 0) {
        return `M ${point.x} ${point.y}`;
      }

      const prevPoint = arr[i - 1];
      const smoothing = 0.3;
      const dx = point.x - prevPoint.x;
      
      const cp1x = prevPoint.x + dx * smoothing;
      const cp1y = prevPoint.y;
      const cp2x = point.x - dx * smoothing;
      const cp2y = point.y;

      return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
    }, "");

    return path;
  };

  // Function to handle point click
  const handlePointClick = (point, type) => {
    setSelectedPoint(selectedPoint?.x === point.x ? null : { ...point, type });
  };

  return (
    <div className="max-w-sm w-full bg-white border shadow-xl rounded-xl p-4">
      <h2 className="text-2xl font-bold mb-4">Customer Satisfaction</h2>
      
      <div className="relative h-48">
        <svg className="absolute w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
          {/* Filters for shadows */}
          <defs>
            <filter id="greenShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
              <feOffset dx="0" dy="1"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="redShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
              <feOffset dx="0" dy="1"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.01" />
            </linearGradient>
            <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* Green Line Area */}
          <path
            d={`${generateSmoothPath(greenPoints)} L ${greenPoints[greenPoints.length - 1].x} 100 L ${greenPoints[0].x} 100 Z`}
            fill="url(#greenGradient)"
          />

          {/* Red Line Area */}
          <path
            d={`${generateSmoothPath(redPoints)} L ${redPoints[redPoints.length - 1].x} 100 L ${redPoints[0].x} 100 Z`}
            fill="url(#redGradient)"
          />

          {/* Green Line */}
          <path
            d={generateSmoothPath(greenPoints)}
            fill="none"
            stroke="#22c55e"
            strokeWidth="1.5"
            filter="url(#greenShadow)"
          />

          {/* Red Line */}
          <path
            d={generateSmoothPath(redPoints)}
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.5"
            filter="url(#redShadow)"
          />

          {/* Green Points */}
          {greenPoints.map((point, index) => (
            <circle
              key={`green-${index}`}
              cx={point.x}
              cy={point.y}
              r="3"
              fill="#22c55e"
              filter="url(#greenShadow)"
              className="cursor-pointer"
              onClick={() => handlePointClick(point, 'Good Review')}
            />
          ))}

          {/* Red Points */}
          {redPoints.map((point, index) => (
            <circle
              key={`red-${index}`}
              cx={point.x}
              cy={point.y}
              r="3"
              fill="#ef4444"
              filter="url(#redShadow)"
              className="cursor-pointer"
              onClick={() => handlePointClick(point, 'This Month')}
            />
          ))}
        </svg>

        {/* Tooltip for selected point */}
        {selectedPoint && (
          <div 
            className="absolute bg-white px-2 py-1 rounded-md shadow-lg text-xs z-10"
            style={{
              left: `${(selectedPoint.x / 300) * 100}%`,
              top: `${(selectedPoint.y / 100) * 100}%`,
              transform: 'translate(-50%, -150%)'
            }}
          >
            <div className="font-medium">{selectedPoint.type}</div>
            <div className="text-gray-600">{selectedPoint.value}</div>
          </div>
        )}
      </div>

      <div className="border-t mt-4 pt-4 flex justify-between text-sm">
        <div className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
          <span>Good Review</span>
          <span className="ml-2 font-bold">87%</span>
        </div>
        <div className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
          <span>This Month</span>
          <span className="ml-2 font-bold">3%</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;