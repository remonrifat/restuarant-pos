import { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import ButtonIcon from "../buttons/ButtonIcon";

const BannerDOW = ({
  bannerleftbg,
  bannerrightbg,
  promoimgleft,
  promoimgright,
}) => {
  // Example: Set the deal end date 9 days from the current date
  const dealEndDate = new Date();
  dealEndDate.setDate(dealEndDate.getDate() + 9);

  // Initialize state variables for the countdown timer
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = dealEndDate - now;
    if (difference < 0) {
      // Deal has expired
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    // Update the countdown timer every second
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="2xl:max-w-[1700px] xl:max-w-[1450px] lg:max-w-[1200px] md:max-w-[960px] max-w-[800px] mx-auto xl:h-[549px] md:h-[660px] h-[800px] flex flex-col lg:flex-row justify-center gap-8 items-center">
      {/* Left Section */}
      <div className="h-full xl:w-[40%] lg:w-[50%] w-[95%] flex flex-col gap-8 justify-between relative">
        <div className="relative h-full">
          <img
            src="/src/assets/img/Home/image 34.png"
            className="h-full w-full rounded-2xl"
            alt="Pyridoxine Vitamin B6"
          />
          <div className="bg-white bg-opacity-5 flex justify-evenly items-center h-full w-full absolute top-0 z-20">
            <div className="flex flex-col pl-10 gap-3">
              <div className="lg:text-lg text-dark-2">Pyridoxine Vitamin B6</div>
              <div className="lg:text-4xl text-xl lg:font-bold font-semibold">Vitamins And Supplements</div>
              <div>
                <ButtonIcon
                  text="View Products"
                  bg="bg-green-600 text-black font-semibold"
                  icon={<MdArrowOutward />}
                />
              </div>
            </div>
            {/* <img
              src={promoimgleft}
              className="xl:max-h-80 xl:max-w-96 lg:max-h-72 lg:max-w-80 max-h-40 max-w-40"
              alt="Promo Image"
            /> */}
          </div>
        </div>
        {/* Countdown Timer */}
        <div className="h-40 p-6 w-full bg-black text-white flex flex-col md:flex-row items-center justify-center gap-6 rounded-2xl">
          <div className="text-3xl font-bold mb-4 md:mb-0">Deal Of The Week</div>
          <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 justify-center md:justify-start">
            <div className="flex flex-col items-center py-3 w-20 bg-dark-1 rounded-lg">
              <span className="text-2xl font-bold">{timeRemaining.days}</span>
              <span className="text-sm font-normal">Days</span>
            </div>
            <div className="flex flex-col items-center py-3 w-20 bg-dark-1 rounded-lg">
              <span className="text-2xl font-bold">{timeRemaining.hours}</span>
              <span className="text-sm font-normal">Hours</span>
            </div>
            <div className="flex flex-col items-center py-3 w-20 bg-dark-1 rounded-lg">
              <span className="text-2xl font-bold">{timeRemaining.minutes}</span>
              <span className="text-sm font-normal">Minutes</span>
            </div>
            <div className="flex flex-col items-center py-3 w-20 bg-dark-1 rounded-lg">
              <span className="text-2xl font-bold">{timeRemaining.seconds}</span>
              <span className="text-sm font-normal">Seconds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="h-full xl:w-[60%] lg:w-[50%] w-[95%] relative">
        <img
          src={bannerrightbg}
          className="object-cover h-full w-full absolute top-0 rounded-2xl"
          alt="Right Banner"
        />
        <div className="flex justify-evenly h-full w-full">
          <div className="flex flex-col pl-10 gap-16 absolute top-10 left-1 z-20">
            <div className="lg:text-lg text-dark-2">Pyridoxine Vitamin B6</div>
            <div className="lg:text-6xl text-xl font-bold">
              Vitamins And <br /> Supplements
            </div>
            <div>
              <ButtonIcon
                text="View This Product"
                bg="bg-green-600 text-dark-1 font-semibold"
                icon={<MdArrowOutward />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDOW;
