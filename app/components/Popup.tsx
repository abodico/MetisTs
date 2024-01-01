/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import check from "../../public/assets/check.svg";
import exit from "../../public/assets/exit.svg";
import { Card } from "./Ecosystem";
interface card extends Card {
  pop: number;
  togglePop: (index: number) => void;
}
const Popup = ({
  title,
  completed,
  started,
  cImage,
  video,
  poster,
  pop,
  togglePop,
  steps,
}: card): React.ReactNode => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div
      className={`${
        pop > -1 && !clicked ? "scale-100" : "scale-0"
      } bg-[rgba(0,0,0,0.6)] fixed z-10 top-0 left-0 w-full h-full box-border px-8 py-8 transition-transform duration-150 ease-linear`}
    >
      <div
        className={`max-h-full | lg:max-w-3xl max-w-full | px-8 pt-8 pb-10 | rounded-[20px] bg-[#313144] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
         transition-transform duration-150 ease-linear`}
      >
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
            className="w-4 h-4 cursor-pointer"
            alt="exit"
            width={16}
            height={16}
            onClick={() => {
              setClicked(true);
              setTimeout(() => {
                togglePop(-1);
                setClicked(false);
              }, 300);
            }}
          />
        </div>
        <div className="px-20">
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          {/* video */}
          <div
            className={`lg:w-[550px] w-[340px] | xl:h-[310px] lg:h-60 h-[194px] | max-w-full overflow-hidden rounded-[20px] bg-black mx-auto relative mt-5 ${
              !clicked && pop === -1 ? "hidden" : "block"
            }`}
          >
            <video
              poster={poster}
              loop
              autoPlay
              className="object-cover relative w-full h-full"
            >
              <source src={video} type="video/mp4" />
            </video>
            <img
              src={poster}
              className="absolute top-0 left-0 w-full h-full -z-10"
              alt="poster"
              width={1000}
              height={1000}
            />
          </div>
          {/* steps */}
          <div
            className={`${
              steps ? "block" : "hidden"
            } mt-5 flex gap-[10px] items-center`}
          >
            <div className=" flex flex-col">
              {steps?.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* ball */}
                  <div
                    className={`${
                      item.completed &&
                      "bg-white shadow-[0px_0px_8px_0px_#FFFFFF80]"
                    } w-[14px] h-[14px] rounded-full border-2 border-white `}
                  ></div>
                  {/* stick */}
                  <div
                    className={`${
                      index === steps.length - 1 && "hidden"
                    } w-0.5 bg-white h-5`}
                  ></div>
                </div>
              ))}
            </div>
            {/* text */}
            <div className="  gap-3 flex flex-col">
              {steps?.map((item, index) => (
                <p
                  key={index}
                  className={`${
                    item.completed && "opacity-50"
                  } text-white font-inter text-sm  `}
                >
                  {item.step}
                </p>
              ))}
            </div>
          </div>
        </div>
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
