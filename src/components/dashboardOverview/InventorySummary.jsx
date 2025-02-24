import React, { useState } from "react";

const InventorySummary = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  // Calculate the SVG path for each section of the semi-circle
  const calculateArc = (startAngle, endAngle, radius) => {
    // Convert angles to radians
    const startRad = (Math.PI * startAngle) / 180;
    const endRad = (Math.PI * endAngle) / 180;

    // Calculate start and end points
    const startX = radius + radius * Math.cos(startRad);
    const startY = radius + radius * Math.sin(startRad);
    const endX = radius + radius * Math.cos(endRad);
    const endY = radius + radius * Math.sin(endRad);

    // Create the arc path
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `
      M ${radius} ${radius}
      L ${startX} ${startY}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
      L ${radius} ${radius}
    `;
  };

  return (
    <div className="bg-white w-[515px] border shadow-xl rounded-xl p-6">
      {/* Title and Date */}
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Inventory Summary</h2>
          <p className="text-sm text-gray-500 flex items-center">
            From 1-31 March, 2024
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path   
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>

      {/* Status */}
      <div className="flex justify-between mb-6">
        <div className="flex items-center">
          <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
          <p className="text-sm">
            Available <br/> <span className="font-bold text-xl">35%</span>
          </p>
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 bg-yellow-400 rounded-full mr-2"></span>
          <p className="text-sm">
            Sold Out <br/> <span className="font-bold text-xl">50%</span>
          </p>
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 bg-black rounded-full mr-2"></span>
          <p className="text-sm">
            Damage <br/> <span className="font-bold text-xl">15%</span>
          </p>
        </div>
      </div>

      {/* Semi-circle Chart Container */}
      <div className="relative w-60 mx-auto">
        <svg 
          viewBox="0 0 120 120" 
          className="w-full"
          style={{ overflow: 'visible' }}
        >
          {/* Yellow Section (Sold Out - 50%) */}
          <path
            d={calculateArc(180, 240, 60)}
            fill="#FCD34D"
            className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
            onMouseEnter={() => setHoveredSection("Sold Out: 50%")}
            onMouseLeave={() => setHoveredSection(null)}
          />
          {/* Green Section (Available - 35%) */}
          <path
            d={calculateArc(240, 300, 60)}
            fill="#22C55E"
            className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
            onMouseEnter={() => setHoveredSection("Available: 35%")}
            onMouseLeave={() => setHoveredSection(null)}
          />
          {/* Black Section (Damage - 15%) */}
          <path
            d={calculateArc(300, 360, 60)}
            fill="black"
            className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
            onMouseEnter={() => setHoveredSection("Damage: 15%")}
            onMouseLeave={() => setHoveredSection(null)}
          />
        </svg>

        {/* Hover Tooltip */}
        {hoveredSection && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md z-10">
            {hoveredSection}
          </div>
        )}
      </div>
    </div>
  );
};

export default InventorySummary;
