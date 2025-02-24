import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const BannerInfo = () => {
  return (
    <div className=" bg-orange-200 rounded-2xl py-6 md:px-10 px-7 flex md:flex-row flex-col  md:items-center justify-between 2xl:max-w-[1700px] xl:max-w-[1450px] lg:max-w-[1200px] md:max-w-[960px] max-w-[500px] mx-auto my-6 z-50 relative gap-5">
      <div className="flex gap-5 items-center">
        <div>
          <TbTruckDelivery className="lg:w-10 lg:h-10 w-5 h-5 text-primary-500" />
        </div>
        <div className="flex flex-col gap-3">
          <span className=" text-dark-1 text-sm font-normal">
            Delivery Time
          </span>
          <span className="text-dark-1 text-base font-bold">
            In 3-7 Days Delivery
          </span>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <RiSendPlaneFill className="lg:w-10 lg:h-10 w-5 h-5 text-primary-500" />
        </div>
        <div className="flex flex-col gap-3">
          <span className=" text-dark-1 text-sm font-normal">
            Payment Secure
          </span>
          <span className="text-dark-1 text-base font-bold">100% Protected</span>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <BiSolidPhoneCall className="lg:w-10 lg:h-10 w-5 h-5 text-primary-500" />
        </div>
        <div className="flex flex-col gap-3">
          <span className=" text-dark-1 text-sm font-normal">24/7 Support</span>
          <span className="text-dark-1 text-2xl font-bold">0123 666 999</span>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <IoMail className="lg:w-10 lg:h-10 w-5 h-5 text-primary-500" />
        </div>
        <div className="flex flex-col gap-3">
          <span className=" text-dark-1 text-sm font-normal">Mail Support</span>
          <span className="text-dark-1 text-base font-bold">
            contact@sitename.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default BannerInfo;