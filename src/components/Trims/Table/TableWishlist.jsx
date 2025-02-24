import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import topSelling5 from "/src/assets/img/Cart/PersonalCare1.png";
import ButtonQty from "../buttons/ButtonQty";
import { LuMinus, LuPlus } from "react-icons/lu";
import ButtonIcon from "../buttons/ButtonIcon";
import { PiHandbagLight } from "react-icons/pi";

const TableWishlist = () => {
  const item = [
    {
      productId: "unique_product_id_123",
      imageSrc: topSelling5,
      description: "Jungle Adult Cat Food Chicken & Fish - 500g",
      discount: "10%",
      productName: "Peracitamol",
      quantity: 1,
      price: "$120,000",
      inStock: true,
    },
    {
      productId: "unique_product_id_123",
      imageSrc: topSelling5,
      description: "Jungle Adult Cat Food Chicken & Fish - 500g",
      discount: "10%",
      productName: "Peracitamol",
      quantity: 1,
      price: "$120,000",
      inStock: false,
    },
    {
      productId: "unique_product_id_123",
      imageSrc: topSelling5,
      description: "Jungle Adult Cat Food Chicken & Fish - 500g",
      discount: "10%",
      productName: "Peracitamol",
      quantity: 1,
      price: "$120,000",
      inStock: true,
    },
    {
      productId: "unique_product_id_123",
      imageSrc: topSelling5,
      description: "Jungle Adult Cat Food Chicken & Fish - 500g",
      discount: "10%",
      productName: "Peracitamol",
      quantity: 1,
      price: "$120,000",
      inStock: false,
    },
    
  ];

  return (
    <div>
      {/* <!-- component --> */}
      <div className="px-4 sm:px-6 lg:px-0">
       
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300 border">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-xl font-medium text-black sm:pl-0"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-xl font-medium text-black sm:pl-0"
                    >
                      Offer
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-xl font-medium text-black sm:pl-0"
                    >
                      Generics
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-xl font-medium text-black sm:pl-0"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-xl font-medium text-black sm:pl-0"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-xl font-medium text-black sm:pl-0"
                    >
                      Stock Status
                    </th>
                  </tr>
                </thead>

                <tbody className="">
                 

                  {item.map((item) => (
                    <tr className="text-center" key={item.id}>
                      <td className="py-4 flex justify-center items-center gap-3 text-base font-medium sm:pl-0">
                        <div>
                          <AiOutlineDelete size={30} />
                        </div>
                        <div>
                          <img
                            src={item.imageSrc}
                            className="size-20 rounded-2xl"
                            alt=""
                          />
                        </div>
                        <div className="line-clamp-2 w-48">
                          {item.description}
                        </div>
                      </td>
                      <td className="py-4 text-base ">
                        <div className="flex justify-center">
                          <div
                            className={`bg-green-600 text-center text-white w-14 py-1 px-3 rounded-tr-xl rounded-bl-xl`}
                          >
                            {item.discount}
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-base">{item.productName}</td>
                      <td className="px-3 py-4 text-base ">
                        <div className="flex justify-center">
                          <ButtonQty
                            text={1}
                            bg="border"
                            fronticon={<LuMinus />}
                            backicon={<LuPlus />}
                          />
                        </div>
                      </td>
                      <td className="px-3 py-4 text-lg font-bold">
                        {item.price}
                      </td>
                      <td
                        className={`py-4 text-base font-medium sm:pl-0 ${
                          item.inStock ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {item.inStock ? "In Stock" : "Out of Stock"}
                      </td>
                      <td className="">
                      <div className="flex items-center justify-center ">
                        <ButtonIcon
                          fronticon={<PiHandbagLight color="red" />}
                          text="Buy Now"
                          bg="border border-secondary-500 text-secondary-500 -mt-1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center ">
                        <ButtonIcon
                          fronticon={<PiHandbagLight color="white" />}
                          text="Add to Cart"
                          bg=" bg-primary-500 text-white -mt-1"
                        />
                      </div>
                    </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TableWishlist;
