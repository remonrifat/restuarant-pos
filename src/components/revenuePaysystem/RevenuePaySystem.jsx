import React from "react";

const RevenuePaySystem = () => {
  const revenueCards = [
    {
      icon: "/src/assets/img/Icon/status-up.png",
      amount: "$4455.45",
      percentage: "65%",
      title: "Total Sale",
      borderColor: "border-[#FEA3A4]",
      textColor: "text-orange-500",
    },
    {
      icon: "/src/assets/img/Icon/trend-down.png",
      amount: "$4455.45",
      percentage: "-39%",
      title: "Monthly Target",
      borderColor: "border-[#FEA3A4]",
      textColor: "text-red-500",
    },
    {
      icon: "/src/assets/img/Icon/trend-up.png",
      amount: "$4455.45",
      percentage: "+61%",
      title: "Monthly Sales",
      borderColor: "border-[#C6E39B]",
      textColor: "text-green-500",
    },
    {
      icon: "/src/assets/img/Icon/trend-up.png",
      amount: "$4455.45",
      percentage: "+65%",
      title: "Today Sales",
      borderColor: "border-[#C6E39B]",
      textColor: "text-green-500",
    },
  ];

  const paymentCards = [
    {
      icon: "/src/assets/img/Icon/card-pos.png",
      amount: "$4455.45",
      percentage: "65%",
      title: "Digital Pay",
      borderColor: "border-[#C6E39B]",
      textColor: "text-green-500",
    },
    {
      icon: "/src/assets/img/Icon/money.png",
      amount: "$4455.45",
      percentage: "65%",
      title: "Cash Pay",
      borderColor: "border-[#C6E39B]",
      textColor: "text-green-500",
    },
    {
      icon: "/src/assets/img/Icon/money.png",
      amount: "$2345.45",
      percentage: "65%",
      title: "Membership",
      borderColor: "border-[#C6E39B]",
      textColor: "text-green-500",
    },
  ];

  const Card = ({ icon, amount, percentage, title, borderColor, textColor }) => (
    <div
      className={`border-2 ${borderColor} rounded-xl p-6 w-full h-full flex items-center space-x-4`}
    >
      <div className="flex flex-col items-center justify-center w-16">
        <img src={icon} alt="Icon" className="w-8 h-8 mb-1" />
        <div className={`text-xs ${textColor} text-center`}>{percentage}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-xl font-bold">{amount}</div>
        <div className="text-sm text-gray-600 mt-1">{title}</div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 w-full max-w-[1800px] mx-auto h-auto min-h-[262px] p-4">
      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Revenue Section */}
        <div className="flex flex-col gap-4 w-full p-4 md:p-6 lg:p-8 shadow-lg border border-gray-300 rounded-2xl">
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Revenue</h2>
          <div className="grid grid-cols-2 gap-4">
            {revenueCards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>

        {/* Payment System Section */}
        <div className="flex flex-col gap-4 w-full p-4 md:p-6 lg:p-8 shadow-lg border border-gray-300 rounded-2xl">
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Payment System</h2>
          <div className="grid grid-cols-2 gap-4">
            {paymentCards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenuePaySystem;
