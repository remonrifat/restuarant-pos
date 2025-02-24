import { BsArrowRight } from "react-icons/bs";
import ButtonIcon from "../buttons/ButtonIcon";
import { GoArrowUpRight } from "react-icons/go";




const BannerHero = ({bannerimg}) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex bg-light-3 h-36 w-full relative rounded-2xl">
        <div className="bg-[#7549F1] w-6 flex items-center justify-center rounded-l-2xl p-5">
            
            <div className="-rotate-90 whitespace-nowrap text-white font-bold text-base uppercase">
                Fast Order
            </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center gap-1">
            <span className="text-[#7549F1] text-2xl font-bold">35%</span>
            <span className="text-sm font-normal">New Formula</span> <span className="text-lg font-bold">Gift Voucher</span>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="text-secondary-500 font-semibold">Continue </span>
            <span><BsArrowRight size={23} /></span>
            
          </div>
        </div>
        <div className="w-16 bg-white h-16 rounded-full absolute top-10 -right-8"></div>
      </div>

      <div className="bg-[#FFEAD3] w-full h-[470px] relative">
        <div className="text-[#9E4900] absolute top-4 left-4">Flat 15% Off</div>
        <img src={bannerimg} className="scale-125 absolute top-0" alt="" />
        <div className="flex flex-col justify-end items-center h-full py-10 z-40">
            <span className="font-bold text-xl">Vitamins &</span>
            <span className="text-xl">Supplements</span>
            <div><ButtonIcon text="Buy Now" icon={<GoArrowUpRight />} bg="text-white bg-primary-500" /></div>
        </div>
      </div>
    </div>
  );
};

export default BannerHero;
