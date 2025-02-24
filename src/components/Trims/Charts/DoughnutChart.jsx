// const DoughnutChart = ({ data, width = 200, height = 200, innerRadius = 50 }) => {
//   // Function to calculate the SVG path for a slice of the doughnut
//   const calculatePath = (value, total, radius, innerRadius) => {
//     const angle = (value / total) * 2 * Math.PI;
//     const x1 = radius * Math.sin(angle);
//     const y1 = -radius * Math.cos(angle);
//     const x2 = radius * Math.sin(angle + (2 * Math.PI * (value / total)));
//     const y2 = -radius * Math.cos(angle + (2 * Math.PI * (value / total)));

//     const ix1 = innerRadius * Math.sin(angle);
//     const iy1 = -innerRadius * Math.cos(angle);
//     const ix2 = innerRadius * Math.sin(angle + (2 * Math.PI * (value / total)));
//     const iy2 = -innerRadius * Math.cos(angle + (2 * Math.PI * (value / total)));

//     return `
//       M ${ix1} ${iy1}
//       L ${x1} ${y1}
//       A ${radius} ${radius} 0 ${value > total / 2 ? 1 : 0} 1 ${x2} ${y2}
//       L ${ix2} ${iy2}
//       A ${innerRadius} ${innerRadius} 0 ${value > total / 2 ? 1 : 0} 0 ${ix1} ${iy1}
//       Z
//     `;
//   };

//   // Total of all data values
//   const total = data.reduce((sum, d) => sum + d.value, 0);

//   // Doughnut chart radius and center
//   const radius = Math.min(width, height) / 2;
//   const cx = width / 2;
//   const cy = height / 2;

//   // Create the doughnut slices
//   const slices = data.map((slice, index) => {
//     const path = calculatePath(slice.value, total, radius, innerRadius);
//     return (
//       <path
//         key={index}
//         d={path}
//         fill={slice.color}
//         transform={`translate(${cx}, ${cy})`}
//       />
//     );
//   });

//   return (
//     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
//       {slices}
//     </svg>
//   );
// };

// export default DoughnutChart;

const DoughnutChart = ({
  data,
  width = 200,
  height = 200,
  innerRadius = 50,
}) => {
  // Function to calculate the SVG path for a slice of the semi-doughnut
  const calculatePath = (value, total, radius, innerRadius) => {
    const angle = (value / total) * Math.PI; // Limit to 180 degrees
    const x1 = radius * Math.sin(angle);
    const y1 = -radius * Math.cos(angle);
    const x2 = radius * Math.sin(angle + Math.PI * (value / total));
    const y2 = -radius * Math.cos(angle + Math.PI * (value / total));

    const ix1 = innerRadius * Math.sin(angle);
    const iy1 = -innerRadius * Math.cos(angle);
    const ix2 = innerRadius * Math.sin(angle + Math.PI * (value / total));
    const iy2 = -innerRadius * Math.cos(angle + Math.PI * (value / total));

    return `
      M ${ix1} ${iy1}
      L ${x1} ${y1}
      A ${radius} ${radius} 0 ${value > total / 2 ? 1 : 0} 1 ${x2} ${y2}
      L ${ix2} ${iy2}
      A ${innerRadius} ${innerRadius} 0 ${
      value > total / 2 ? 1 : 0
    } 0 ${ix1} ${iy1}
      Z
    `;
  };

  // Total of all data values
  const total = data.reduce((sum, d) => sum + d.value, 0);

  // Doughnut chart radius and center
  const radius = Math.min(width, height) / 2;
  const cx = width / 2;
  const cy = height / 2;
  // Create the doughnut slices
  const slices = data.map((slice, index) => {
    const path = calculatePath(slice.value, total, radius, innerRadius);
    return (
      <path
        key={index}
        d={path}
        fill={slice.color}
        transform={`translate(${cx}, ${cy})`}
      />
    );
  });

  return (
    <div className="px-5 py-7 w-[400px] flex flex-col gap-4">
      <div className="flex items-baseline justify-between">
        <span className="text-xl">Payment Summery</span>
        <span className="font-semibold text-primary-500">View Report</span>
      </div>
      <div className="text-dark-3">From 1-31 March, 2022</div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1 border-l-4 border-primary-500 px-2">
          <span className="text-sm text-dark-3">Payment</span>
          <span className="text-2xl font-medium">$181
            <span className="text-dark-4">
              .34
            </span>       
          </span>
        </div>
        <div className="flex flex-col gap-1 border-l-4 border-dark-1 px-2">
          <span className="text-sm text-dark-3">Pending</span>
          <span className="text-2xl font-medium">$34
            <span className="text-dark-4">
              .86
            </span>       
          </span>
        </div>
        <div className="flex flex-col gap-1 border-l-4 border-green-600 px-2">
          <span className="text-sm text-dark-3">Paid</span>
          <span className="text-2xl font-medium">$284
            <span className="text-dark-4">
              .34
            </span>       
          </span>
        </div>
      </div>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="-rotate-90"
      >
        {slices}
      </svg>
    </div>
  );
};

export default DoughnutChart;
