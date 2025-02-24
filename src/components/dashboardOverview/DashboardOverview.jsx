import React from "react";
import SalesReportCard from "./SalesReportCard";
import InventorySummary from "./InventorySummary";
import CustomerSatisfaction from "./CustomerSatisfaction";

const DashboardOverview = () => {
  return (
    <div className="flex flex-wrap  gap-4 ">
      {/* SalesReportCard */}
      <SalesReportCard />

      {/* InventorySummaryCard */}
      <InventorySummary />
      
      <CustomerSatisfaction/>

    </div>
  );
};



export default DashboardOverview;
