
// eslint-disable-next-line react/prop-types
const BannerDownloadApp = ({ bgimage, promoimg, downGoogle, downISO, bannertitle, bannersubtext }) => {
    return (
        <div className="h-full">
            <img src={bgimage} className="object-cover h-full" alt="" />
            <div className="flex flex-col md:flex-row justify-center items-center gap-20 absolute top-0 bg-slate-30 w-full h-full lg:px-40 px-10">
                <div className="w-3/4">
                    <img src={promoimg} className="object-cover " alt="" />
                </div>
                <div className="flex flex-col lg:gap-14 gap-7">
                    <span className="font-bold lg:text-4xl text-2xl">
                        {bannertitle}
                    
                    </span>
                    <span className="font-semibold lg:text-xl text-lg text-dark-2">
                        {bannersubtext}
                        
                    </span>
                    <div className="flex gap-6">
                        <img src={downGoogle} className="lg:h-20 h-12 w-fit" alt="" />
                        <img src={downISO} className="lg:h-20 h-12 w-fit" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerDownloadApp