import React from "react";

const LineChart = () => {
  const data = [
    { date: "Feb 8", value: 2000 },
    { date: "Feb 9", value: 3000 },
    { date: "Feb 10", value: 5000 },
    { date: "Feb 11", value: 4000 },
    { date: "Feb 12", value: 6000 },
    { date: "Feb 13", value: 7000 },
    { date: "Feb 14", value: 5000 },
    { date: "Feb 15", value: 2251 },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const chartHeight = 200;
  const chartWidth = 800;
  const padding = 20;
  const scale = chartHeight / (maxValue - minValue);

  return (
    <div>
      <div className="p-4 bg-white rounded-lg border ">
        <div className="flex justify-between">
          <div className="text-xl font-medium mb-2">Sale / Purchase Return</div>
          <div className="flex gap-4">
            <div className="py-1 px-2 border rounded-lg">1M</div>
            <div className="py-1 px-2 border rounded-lg">3M</div>
            <div className="py-1 px-2 border rounded-lg">6M</div>
            <div className="py-1 px-2 border rounded-lg">1Y</div>
            <select
              name=""
              id=""
              className="border rounded-lg w-24 p-2 text-dark-2 font-medium"
            >
              <option value="">2023</option>
            </select>
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <div className="text-4xl font-semibold mb-1">$12,135.69</div>
          <div className="text-primary-500 font-semibold py-0.5 px-2 rounded-3xl bg-primary-200 mb-4">
            +23% 
          </div>
          <div className="text-dark-3 font-medium">
            vs last month
          </div>
        </div>

        <svg
          width={chartWidth + padding * 2}
          height={chartHeight + padding * 2}
        >
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="green" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <g transform={`translate(${padding}, ${padding})`}>
            <polyline
              fill="url(#gradient)"
              stroke="green"
              strokeWidth="2"
              points={data
                .map(
                  (d, i) =>
                    `${(i / (data.length - 1)) * chartWidth},${
                      chartHeight - (d.value - minValue) * scale
                    }`
                )
                .join(" ")}
            />
          </g>
        </svg>
        <div className="flex justify-between mt-4 text-gray-500 text-sm">
          {data.map((d) => (
            <div key={d.date}>{d.date}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LineChart;
