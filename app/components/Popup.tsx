import Image from "next/image";
import React from "react";
import check from "../../public/assets/check.svg";
import exit from "../../public/assets/exit.svg";
import { Card } from "./Ecosystem";
const Popup = (
  { image, title, gradient, completed, started, cImage }: Card,
  pop: boolean,
  setPop: Function
): React.ReactNode => {
  return (
    <div
      className={`${
        pop ? "block" : "hidden"
      } bg-[rgba(0,0,0,0.6)] fixed z-10 top-0 left-0 w-full h-full px-5`}
    >
      <div className="lg:max-w-3xl max-w-full | px-8 pt-8 pb-10 | rounded-[20px] bg-[#313144] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* header */}
        <div className="flex justify-between items-center">
          {/* status */}
          <div className="">
            {/* if-completed-overlay */}
            <div
              className={`${
                !completed && "hidden"
              } px-4 py-2 bg-[#00FFA3] w-fit  rounded-[50px] flex gap-1.5`}
            >
              <p className="text-sm font-semibold ">COMPLETED</p>
              <Image
                src={check}
                alt="check"
                className="w-4 "
                width={16}
                height={16}
              />
            </div>
            {/* if-started-overlay */}
            <div
              className={`${
                completed ? "hidden" : started ? "block" : "hidden"
              } px-4 py-2 bg-[#00D2FF] w-fit  rounded-[50px] flex items-center gap-1.5`}
            >
              <p className="text-sm font-semibold ">IN PROGRESS</p>
              <div className="w-4 h-4 rounded-full border-2 border-black border-r-transparent relative -rotate-45"></div>
            </div>
          </div>
          {/* exit-icon */}
          <Image
            src={exit}
            className="w-4 h-4"
            alt="exit"
            width={16}
            height={16}
          />
        </div>
        {/* img & info */}
        <Image
          src={cImage}
          className="w-52 h-14 mt-5 mx-auto"
          alt={title}
          width={210}
          height={56}
        />
        <p className="font-inter | lg:leading-5 leading-4 | lg:text-base text-sm | text-center text-white mt-5 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="lg:w-[550px] w-[340px] | lg:h-[310px] h-[194px] | max-w-full rounded-[20px] bg-black mx-auto mt-5 "></div>
        <button
          type="button"
          className="bg-black rounded-[50px] text-white font-semibold text-lg mx-auto w-64 h-12 mt-5 block"
        >
          Start Now
        </button>
      </div>
    </div>
  );
};

export default Popup;
