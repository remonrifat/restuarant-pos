import React, { useState, useRef } from "react";
import { FaDownload, FaEllipsisV } from "react-icons/fa";

const InventoryListTable = () => {
    const [activeTab, setActiveTab] = useState("All");
    const tableRef = useRef(null); 

    
    const tableData = {
        All: [
            {
                id: "#PID0001",
                product: "lkhf dslkf hkdsaf ",
                qty: 2,
                date: "28/05/2024",
                price: "৳25,408",
                discount: "54%",
                offerPrice: "৳200",
                category: " asdfasdf!",
                activity: " asdfsd ",
            },
            {
                id: "#PID0001",
                product: "askdjhhfsad ! ",
                qty: 2,
                date: "28/05/2024",
                price: "৳25,408",
                discount: "54%",
                offerPrice: "৳200",
                category: " asadsf !",
                activity: " sadfewr ",
            },
            
        ],
        Published: [
            {
                id: "#PID0002",
                product: "Pepperoni Pizza",
                qty: 120,
                date: "20/03/2024",
                price: "৳18,000",
                discount: "45%",
                offerPrice: "৳9,900",
                category: "Fast Food",
                activity: "Unpublish",
            },
        ],
        "Up-Coming": [
            {
                id: "#PID0003",
                product: "Vegan Pizza",
                qty: 80,
                date: "15/02/2024",
                price: "৳20,000",
                discount: "30%",
                offerPrice: "৳14,000",
                category: "Fast Food",
                activity: "Publish",
            },
        ],
        Offered: [
            {
                id: "#PID0004",
                product: "Margherita Pizza",
                qty: 300,
                date: "12/01/2024",
                price: "৳10,000",
                discount: "60%",
                offerPrice: "৳4,000",
                category: "Fast Food",
                activity: "Publish",
            },
        ],
    };

    const handleExportToPDF = () => {
        const tableHTML = tableRef.current.outerHTML; 
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
            <html>
            <head>
                <title>Inventory List</title>
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 8px;
                        text-align: center;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Inventory List - ${activeTab}</h1>
                ${tableHTML}
            </body>
            </html>
        `);
        newWindow.document.close();
        newWindow.print(); 
    };

    return (
        <div className="px-8 border border-gray-300 p-9 rounded-xl mt-7">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl font-bold">Inventory List</h1>
                <div className="flex gap-10">
                    <h5 className="mt-2">Filter :</h5>
                    <select className="pl-8 pr-7 border border-gray-400 rounded-xl" defaultValue="By Category">
                        <option>By Category</option>
                        <option>Food</option>
                        <option>Drink</option>
                    </select>
                    <input
                        type="date"
                        className="pl-8 pr-8 border border-gray-400 rounded-xl"
                    />
                    <button
                        onClick={handleExportToPDF}
                        className="bg-gray-600 text-white py-2 px-4 rounded-xl flex items-center gap-2"
                    >
                        Export
                        <FaDownload className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-4 border-b pb-2">
                {Object.keys(tableData).map((tab) => (
                    <button
                        key={tab}
                        className={`pb-2 ${
                            activeTab === tab
                                ? "text-orange-500 "
                                : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto mt-4 rounded">
                <table
                    ref={tableRef} // Attach the reference here
                    className="table-auto w-full border-collapse border border-gray-200"
                >
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="border border-gray-300 p-2">Product ID</th>
                            <th className="border border-gray-300 p-2">Products</th>
                            <th className="border border-gray-300 p-2">Available QTY</th>
                            <th className="border border-gray-300 p-2">Publish Date</th>
                            <th className="border border-gray-300 p-2">Regular Price</th>
                            <th className="border border-gray-300 p-2">Discount</th>
                            <th className="border border-gray-300 p-2">Offer Price</th>
                            <th className="border border-gray-300 p-2">Category</th>
                            <th className="border border-gray-300 p-2">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData[activeTab].map((item, index) => (
                            <tr key={index} className="text-center">
                                <td className="border-t p-2">{item.id}</td>
                                <td className="border-t p-2">{item.product}</td>
                                <td className="border-t p-2">{item.qty}</td>
                                <td className="border-t p-2">{item.date}</td>
                                <td className="border-t p-2">{item.price}</td>
                                <td className="border-t p-2 text-orange-500">{item.discount}</td>
                                <td className="border-t p-2">{item.offerPrice}</td>
                                <td className="border-t p-2">{item.category}</td>
                                <td className="border-t p-2 text-green-500">{item.activity}</td>
                                <td className="border-t p-2">
                                    <FaEllipsisV className="text-gray-500 cursor-pointer" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InventoryListTable;
