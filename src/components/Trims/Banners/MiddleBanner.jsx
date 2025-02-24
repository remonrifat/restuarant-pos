// import React from 'react'

import { MdArrowOutward } from "react-icons/md"
import ButtonIcon from "../buttons/ButtonIcon"

const MiddleBanner = ({bannerbg, promoimg, bannertitle, subtext}) => {
    return (
        <div className="relative contain-layout">
            <img
                src={bannerbg}
                className="w-full xl:h-60 h-28 rounded-2xl object-cover "
                alt=""
            />
            <div className=" px-14 gap-10 flex justify-center items-center absolute top-0">
                <div className="z-20 h-full">
                    <img src={promoimg} className="object-cover xl:h-72 h-32" alt="" />
                </div>
                <div className="flex items-center justify-evenly">
                    <div className="z-20 flex flex-col w-4/6 px-8">
                        <span className="font-normal xl:text-lg text-sm text-dark-2">{bannertitle}</span>
                        <span className="font-bold xl:text-4xl text-lg text-dark-1">
                            {subtext}
                        </span>
                    </div>
                    <div className="z-20 ">
                        <ButtonIcon text="Product Details" bg=" xl:text-lg text-xs font-normal bg-primary-500" icon={<MdArrowOutward />} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MiddleBanner