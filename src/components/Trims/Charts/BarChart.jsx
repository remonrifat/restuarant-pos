// const BarChart = ({ data, width, height, labels }) => {
//   // Find the maximum value in the data to scale the bars
//   // const maxValue = Math.max(...data);

//   // return (
//   //   <div className="flex justify-center items-end" style={{ width: width, height: height }}>
//   //     {data.map((value, index) => (
//   //       <div
//   //         key={index}
//   //         className="mx-1 bg-blue-500 hover:bg-blue-700"
//   //         style={{
//   //           height:` ${(value / maxValue) * 100}%`,
//   //           width: `${100 / data.length}%`,
//   //           transition: 'height 0.3s ease-in-out'
//   //         }}
//   //       >
//   //         <div className="text-center text-white" style={{ marginTop: '-20px' }}>{value}</div>
//   //       </div>
//   //     ))}
//   //   </div>
//   // );

//   // Find the maximum value in the data to scale the bars
//   // const maxValue = Math.max(...data.flat());
//   const maxValue = Math.max(...data.map((value) => value.salesValue));
//   console.log(maxValue);
//   console.log('divide', (2000 / maxValue ) * 100);

//   const maxVolume = Math.max(...data.map((value) => value.salesVolume));
//   console.log(maxVolume);

//   return (
//     <div className="flex items-end" style={{ width: width, height: height }}>
//       <div className="flex items-end gap-4 ">
//         {data?.map((value, index) => {
//           <div className="flex" key={index}>
//              <div style={{ height: `${( value.salesValue / maxValue ) * 100 }`}}>
//                   {value.salesValue}
//              </div>
//              <div style={{ height: `${( value.salesVolume / maxVolume ) * 100 } `}}>
//                   {value.salesVolume}
//              </div>
//           </div>

//         })}
//       </div>

//       {/* <div className="text-center mt-2">{labels[index]}</div> */}

//       {/* {data.map((dataSet, dataSetIndex) => (
//         <div key={dataSetIndex} className="flex flex-col items-center">

//           <div className="flex items-end">
//             {dataSet.map((value, index) => {
//             const heightPercentage = maxValue ? (value / maxValue) * 400 : 0;
//             const widthPercentage =
//               data.length > 0 ? 100 / (data[0].length * data.length) : 0;

//             return (
//               <div
//                 key={index}
//                 className={`mx-1 rounded-t-2xl ${
//                   dataSetIndex === 0 ? "bg-primary-500" : "bg-dark-4"
//                 } hover:${dataSetIndex === 0 ? "bg-primary-600" : "bg-dark-2"}`}
//               >
//                 <div
//                   className="text-center text-white  "
//                   style={{
//                     // height: 40,
//                     height: heightPercentage,
//                     width: 20,
//                     // height: `${heightPercentage}%`,
//                     // width: `${widthPercentage}%`,
//                     transition: "height 0.3s ease-in-out",
//                   }}
//                 >
//                   {value}
//                 </div>
//               </div>
//             );
//           })}
//           </div>

//           <div className="text-center mt-2">{labels[dataSetIndex]}</div>

//         </div>
//       ))} */}
//     </div>
//   );
// };

// export default BarChart;

const BarChart = ({ data }) => {
  const maxSalesValue = Math.max(...data.map((d) => d.salesValue));
  const maxSalesVolume = Math.max(...data.map((d) => d.salesVolume));
  const rulerSteps = 5;

  return (
    <div className="flex flex-row gap-2 items-between h-[55vh] p-5 ">
      {/* Ruler */}
      <div className="flex flex-col justify-between h-[39.5vh] pr-4 text-right mb-0">
        {[...Array(rulerSteps + 1)].map((_, index) => (
          <div key={index} className="flex items-center">
            <span className="text-xs">
              {(maxSalesValue / rulerSteps) * (rulerSteps - index)}
            </span>
          </div>
        ))}
      </div>

      <div className=" flex 2xl:justify-normal justify-evenly xl:gap-5 gap-11 w-full lg:overflow-hidden overflow-x-auto">
        {data.map((d, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center"
        >
        
          <div className="flex flex-row gap-5 mb-0 h-[55vh] relative">
            <div className="flex flex-col gap-2 ">
              {/* <div className=' -rotate-90 text-[12px]'>{d.salesValue}</div> */}
              <div
                className={`bg-primary-500 mb-0 absolute bottom-0 transition-all duration-200 rounded-t-3xl hover:scale-105`}
                style={{
                  height: `${(d.salesValue / maxSalesValue) * 100}%`,
                  width: 12,
                }}
                title={`Sales Value: ${d.salesValue}`}
              ></div>
            </div>
            <div className="flex flex-col gap-2">
              {/* <div className='-rotate-90 text-[12px]'>{d.salesVolume}</div> */}
              <div
                className={`bg-dark-4 mb-0 absolute bottom-0 transition-all duration-200 rounded-t-3xl hover:scale-105`}
                style={{
                  height: `${(d.salesVolume / maxSalesVolume) * 100}%`,
                  width: 12,
                }}
                title={`Sales Vol: ${d.salesVolume}`}
              ></div>
            </div>
          </div>
          
          <span className="my-2 text-[12px] text-dark-4">{d.month}</span>
        </div>
      ))}
      </div>
      {/* Bars */}
      
    </div>
  );
};

export default BarChart;
{
  /* {dataSet.map((value, index) => (
            <div
              key={index}
              className={`mx-1 ${
                dataSetIndex === 0 ? "bg-blue-500" : "bg-red-500"
              } hover:${dataSetIndex === 0 ? "bg-blue-700" : "bg-red-800"}`}
             
            >
              <div className="text-center text-white"
               style={{
                height: `${(value / maxValue) * 100}%`,
                width: `${100 / (data[0].length * data.length)}%`,
                transition: "height 0.3s ease-in-out",
              }}
              >
                {value}
              </div>
            </div>
          ))} */
}
