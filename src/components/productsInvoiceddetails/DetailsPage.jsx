import React from "react";

const InvoiceDetailsPage = () => {
  return (
    <div className="p-6 bg-gray-100  min-h-screen">
      <div className="max-w-4xl mx-auto bg-white border border-gray-300 shadow-md rounded-md">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h1 className="text-xl font-bold">Product Invoice Details</h1>
          <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
            Export
          </button>
        </div>

        {/* Invoice Info */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-sm font-bold">From</h2>
              <p>HSDS Cooking</p>
              <p>124 Country Street, Foodville</p>
              <p>State, Country: California, USA</p>
              <p>+1 234-567-8901</p>
              <p>gourmetdesign@xmail.com</p>
            </div>
            <div>
              <h2 className="text-sm font-bold">To</h2>
              <p>John Doe</p>
              <p>456 Diving Avenue, Eastville</p>
              <p>Country: New York, USA</p>
              <p>+1 234-567-8902</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-bold">Invoice Number:</p>
              <p>HSDS/05</p>
            </div>
            <div>
              <p className="font-bold">Invoice Date:</p>
              <p>5th December 2024</p>
            </div>
            <div>
              <p className="font-bold">Due Date:</p>
              <p>30th December 2024</p>
            </div>
          </div>
        </div>

        {/* Product Table */}
        <div className="p-6">
          <h2 className="text-lg font-bold mb-2">Product:</h2>
          <p className="text-sm text-gray-700 mb-4">American Breakfast Combo (5 in 1)</p>
          <table className="w-full text-sm border-t border-gray-300">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-4 py-2 text-left text-gray-700">Q.</th>
                <th className="px-4 py-2 text-left text-gray-700">Description</th>
                <th className="px-4 py-2 text-left text-gray-700">Quantity</th>
                <th className="px-4 py-2 text-left text-gray-700">Currency</th>
                <th className="px-4 py-2 text-left text-gray-700">Amount Paid</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2">#01</td>
                <td className="px-4 py-2">Garlic Breadsticks</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">USD</td>
                <td className="px-4 py-2">$4.00</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2">#02</td>
                <td className="px-4 py-2">Grilled Chicken Burger</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">USD</td>
                <td className="px-4 py-2">$8.00</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2">#03</td>
                <td className="px-4 py-2">French Fries</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">USD</td>
                <td className="px-4 py-2">$3.00</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2">#04</td>
                <td className="px-4 py-2">Soft Drink (Coke)</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">USD</td>
                <td className="px-4 py-2">$2.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2">#05</td>
                <td className="px-4 py-2">Chocolate Brownie</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">USD</td>
                <td className="px-4 py-2">$5.00</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 text-sm space-y-4">
            <div className="px-28 flex justify-between border-t border-gray-300 pt-2">
              <span>VAT (7.5%)</span>
              <span>$937.50</span>
            </div>
            <div className="flex px-28 justify-between">
              <span>Combo Discount (20%)</span>
              <span>$937.50</span>
            </div>
            <div className="flex px-28 justify-between border-t border-gray-300 pt-2">
              <span>Subtotal:</span>
              <span>$13,437.50</span>
            </div>
            <div className="flex px-28 justify-between font-bold text-lg border-t border-gray-300 pt-2">
              <span>Total:</span>
              <span>$13,437.50</span>
            </div>
          </div>
        </div>


        {/* Payment Terms */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">Payment Terms:</h2>
          <p>Payment Method: Cash, Credit/Debit Card, Bank Transfer</p>
          <p>Late Payment Policy: 2% of the total amount will be charged per day.</p>

          <h2 className="text-2xl font-bold">Payment Method:</h2>
          <p>Bank Name: ABC Bank</p>
          <p>Account Number: 123456789</p>
          <p>IBAN: ABCD1234567890</p>
          <p>Branch: California, USA</p>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-100 text-center text-sm">
          <p>
            Thank you for doing business with us at Gourmet Delight! If you have
            any questions or concerns, please don't hesitate to contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetailsPage;