import React, { useState } from "react";
import { FaDownload, FaEllipsisV } from "react-icons/fa";

const InvoiceListTable = () => {
    const [activeTab, setActiveTab] = useState("All");

    const tabs = ["All", "Digital Pay", "Cash Pay", "Canceled Payment"];

    const data = {
        All: [
            {
                id: "#QWEFAHGA68",
                client: "Remon Shakrer Rifat",
                membershipId: "MEMFGBDF1234",
                phone: "1234453-45#$%6-7890",
                date: "2025-01-01",
                category: "Electdghdhronics",
                quantity: 2,
                amount: "$25,408",
                payment: "Digital Pay",
            },
        ],
        "Digital Pay": [
            {
                id: "#FGNJHGAHGA68",
                client: "John Doe",
                membershipId: "MEM1234",
                phone: "123-456-7890",
                date: "2025-01-01",
                category: "Electronics",
                quantity: 2,
                amount: "$25,408",
                payment: "Digital Pay",
            },
        ],
        "Cash Pay": [
            {
                id: "#AHGFGHA69",
                client: "Jadfhfhfghne Smith",
                membershipId: "MEM5678",
                phone: "987-654-3210",
                date: "2025-01-03",
                category: "Furniture",
                quantity: 1,
                amount: "$15,800",
                payment: "Cash Pay",
            },
        ],
        "Canceled Payment": [
            {
                id: "#FGGAHGA69",
                client: "Jafhfghfne Sdfhfdhfhfdhdmith",
                membershipId: "MEMdfghdfh5678",
                phone: "987-65456464564-3210",
                date: "2025-01-03",
                category: "Furnitusghsfdghfhgfhfre",
                quantity: 1,
                amount: "$1345,800",
                payment: "Cash Pay",
            },
        ],
    };

    const handleTabClick = (tab) => setActiveTab(tab);

   
    const handleExport = () => {
        const tableContent = document.getElementById("invoice-table"); 
        const windowContent = `
            <html>
                <head>
                    <title>Invoice List</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            padding: 20px;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                        }
                        th, td {
                            padding: 8px 12px;
                            border: 1px solid #ddd;
                        }
                        th {
                            background-color: #f2f2f2;
                        }
                    </style>
                </head>
                <body>
                    <h1>Invoice List</h1>
                    ${tableContent.outerHTML}
                </body>
            </html>
        `;

        const newWindow = window.open("", "_blank");
        newWindow.document.write(windowContent);
        newWindow.document.close();
        newWindow.print(); // Trigger the print dialog
    };

    return (
        <div className="px-8 border border-gray-300 p-9 rounded-xl mt-7">
            <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold">Invoice List</h1>
                    <div className="flex gap-10">
                        <h5 className="mt-2">Filter :</h5>
                        <select className="pl-8 pr-8 border border-gray-400 rounded-xl">
                            <option>All Payment System</option>
                            <option>Digital Pay</option>
                            <option>Cash Pay</option>
                        </select>
                        <select className="pl-8 pr-8 border border-gray-400 rounded-xl">
                            <option>All Time</option>
                            <option>Today</option>
                            <option>Last Week</option>
                        </select>
                        <button
                            className="bg-gray-700 text-white py-2 px-4 rounded-xl flex items-center gap-2"
                            onClick={handleExport}
                        >
                            Export
                            <FaDownload className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 border-b">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 text-sm font-medium ${activeTab === tab ? "border-orange-500 text-orange-500" : "text-gray-500"}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table id="invoice-table" className="w-full text-left border-collapse">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2">Invoice ID</th>
                                <th className="px-4 py-2">Client</th>
                                <th className="px-4 py-2">Membership ID</th>
                                <th className="px-4 py-2">Phone Number</th>
                                <th className="px-4 py-2">Selling Date</th>
                                <th className="px-4 py-2">Category</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Amount</th>
                                <th className="px-4 py-2">Payment System</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data[activeTab].length > 0 ? (
                                data[activeTab].map((item, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="px-4 py-2">{item.id}</td>
                                        <td className="px-4 py-2">{item.client}</td>
                                        <td className="px-4 py-2">{item.membershipId}</td>
                                        <td className="px-4 py-2">{item.phone}</td>
                                        <td className="px-4 py-2">{item.date}</td>
                                        <td className="px-4 py-2">{item.category}</td>
                                        <td className="px-4 py-2">{item.quantity}</td>
                                        <td className="px-4 py-2">{item.amount}</td>
                                        <td className="px-4 py-2">{item.payment}</td>
                                        <td className="px-4 py-2">
                                            <FaEllipsisV className="h-5 w-5 cursor-pointer text-gray-500" />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10" className="text-center py-4 text-gray-500">
                                        No data available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InvoiceListTable;

