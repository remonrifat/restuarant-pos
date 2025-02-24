import React, { useState } from "react";
import { FaDownload, FaEllipsisV } from "react-icons/fa";

const OrderListTable = () => {
    const [activeTab, setActiveTab] = useState("AllOrders");

    const tabs = ["AllOrders", "Complete Orders", "Canceled Payment"];

    const data = {
        AllOrders: [
            {
                id: "#QWEFAHGA68",
                products: "Combo pasta",
                productImage: "https://s3-alpha-sig.figma.com/img/9930/4a11/4b19c6b7b9e50c820da1ebbea1d79166?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jpuJyOcSoKV3DUwaKrnrlCBx~qmt9RZwxhIK-yR~ofU9dZWRcHmQ6Q9WzqWB-JOuBJ2v4gDrCSm4n7JkdQg8E~IOT1FhsTZE0A-hbHHnG8cIM3QNWD3NrlVPLz41tn6hjbKcpVkz8N6rwBBBHV2V-hPNs903U34H~656PNGsvcqjmQ2s2bZPYP6PGLP7ss1tQqVlBpVYNzDuraWntdAXX4tC8kTclmrdooMut7OlrUYX~UZrr6F-DmHSpj1-X3YpG4PV2q6tKHoCRO2HYkoC5Lmy25C7Ia6wKGdIDmUh39ZX8b-ow5Xpqpb1L70-iNpWP2s1J7GiKdAwLMDuuQFvXw__",
                membershipId: "MEMFGBDF1234",
                phone: "1234453-45#$%6-7890",
                date: "2025-01-01",
                category: "Electronics",
                quantity: 2,
                amount: "$25,408",
                payment: "Digital Pay",
            }
        ],
        "Complete Orders": [
            {
                id: "#FGNJHGAHGA68",
                products: "chicken meat ball",
                productImage: "https://s3-alpha-sig.figma.com/img/9930/4a11/4b19c6b7b9e50c820da1ebbea1d79166?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jpuJyOcSoKV3DUwaKrnrlCBx~qmt9RZwxhIK-yR~ofU9dZWRcHmQ6Q9WzqWB-JOuBJ2v4gDrCSm4n7JkdQg8E~IOT1FhsTZE0A-hbHHnG8cIM3QNWD3NrlVPLz41tn6hjbKcpVkz8N6rwBBBHV2V-hPNs903U34H~656PNGsvcqjmQ2s2bZPYP6PGLP7ss1tQqVlBpVYNzDuraWntdAXX4tC8kTclmrdooMut7OlrUYX~UZrr6F-DmHSpj1-X3YpG4PV2q6tKHoCRO2HYkoC5Lmy25C7Ia6wKGdIDmUh39ZX8b-ow5Xpqpb1L70-iNpWP2s1J7GiKdAwLMDuuQFvXw__",
                membershipId: "MEM1234",
                phone: "123-456-7890",
                date: "2025-01-01",
                category: "Electronics",
                quantity: 2,
                amount: "$25,408",
                payment: "Digital Pay",
            }
        ],
        "Canceled Payment": [
            {
                id: "#AHGFGHA69",
                products: "italiano Pizza With extra cheeese",
                productImage: "https://s3-alpha-sig.figma.com/img/9930/4a11/4b19c6b7b9e50c820da1ebbea1d79166?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jpuJyOcSoKV3DUwaKrnrlCBx~qmt9RZwxhIK-yR~ofU9dZWRcHmQ6Q9WzqWB-JOuBJ2v4gDrCSm4n7JkdQg8E~IOT1FhsTZE0A-hbHHnG8cIM3QNWD3NrlVPLz41tn6hjbKcpVkz8N6rwBBBHV2V-hPNs903U34H~656PNGsvcqjmQ2s2bZPYP6PGLP7ss1tQqVlBpVYNzDuraWntdAXX4tC8kTclmrdooMut7OlrUYX~UZrr6F-DmHSpj1-X3YpG4PV2q6tKHoCRO2HYkoC5Lmy25C7Ia6wKGdIDmUh39ZX8b-ow5Xpqpb1L70-iNpWP2s1J7GiKdAwLMDuuQFvXw__",
                membershipId: "MEM5678",
                phone: "987-654-3210",
                date: "2025-01-03",
                category: "Furniture",
                quantity: 1,
                amount: "$15,800",
                payment: "Cash Pay",
            }
        ],
    };

    const handleTabClick = (tab) => setActiveTab(tab);

    return (
        <div className="px-8 border border-gray-300 p-9 rounded-xl mt-7">
            <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
                    <h1 className="text-4xl font-bold">Order List</h1>
                    <div className="flex gap-4 md:gap-10 flex-wrap md:flex-nowrap">
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
                        <button className="bg-gray-700 text-white py-2 px-4 rounded-xl flex items-center gap-2">
                            Export
                            <FaDownload className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-4 border-b">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 text-sm font-medium ${
                                activeTab === tab ? "border-orange-500 text-orange-500" : "text-gray-500"
                            }`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2">Invoice ID</th>
                                <th className="px-4 py-2">Products</th>
                                <th className="px-4 py-2">Membership ID</th>
                                <th className="px-4 py-2">Phone Number</th>
                                <th className="px-4 py-2">Selling Date</th>
                                <th className="px-4 py-2">Category</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Sell Amount</th>
                                <th className="px-4 py-2">Payment System</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data[activeTab] && data[activeTab].length > 0 ? (
                                data[activeTab].map((item, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="px-4 py-2">{item.id}</td>
                                        <td className="px-4 py-2 flex gap-2 items-center">
                                            <img src={item.productImage} alt={item.products} className="w-12 h-12 rounded-md" />
                                            {item.products}
                                        </td>
                                        <td className="px-4 py-2">{item.membershipId}</td>
                                        <td className="px-4 py-2">{item.phone}</td>
                                        <td className="px-4 py-2">{item.date}</td>
                                        <td className="px-4 py-2">{item.category}</td>
                                        <td className="px-4 py-2">{item.quantity}</td>
                                        <td className="px-4 py-2">{item.amount}</td>
                                        <td className="px-4 py-2">{item.payment}</td>
                                        <td className="px-4 py-2 text-gray-600 cursor-pointer">
                                            <FaEllipsisV />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10" className="px-4 py-2 text-center text-gray-500">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderListTable;
