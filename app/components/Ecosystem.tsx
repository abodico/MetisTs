import React from "react";
import unidex from "../../public/assets/unidex.svg";
import league from "../../public/assets/vector.svg";
import maia from "../../public/assets/MaiaDao2.svg";
import hummus from "../../public/assets/Group31.svg";
import midas from "../../public/assets/midas.svg";
import tethys from "../../public/assets/Tethys.svg";
import netswap from "../../public/assets/netswap.svg";
import rightArrow from "../../public/assets/Group 33.svg";
import check from "../../public/assets/check.svg";
import Image from "next/image";
import Popup from "./Popup";
import TethysPopup from "../../public/assets/tethysPopup.svg";
export interface Card {
  image: string;
  cImage: string;
  title: string;
  gradient: string;
  started: boolean;
  completed: boolean;
}
const Ecosystem = (): React.ReactNode => {
  const cards: Card[] = [
    {
      image: tethys,
      title: "Tethys",
      gradient: "bg-gradient-tethys",
      completed: false,
      started: true,
      cImage: TethysPopup,
    },
    {
      image: unidex,
      title: "Unidex",
      gradient: "bg-gradient-unidex",
      completed: true,
      started: true,
      cImage: TethysPopup,
    },
    {
      image: maia,
      title: "Maia",
      gradient: "bg-gradient-maia",
      completed: false,
      started: false,
      cImage: TethysPopup,
    },
    {
      image: netswap,
      title: "Netswap",
      gradient: "bg-gradient-netswap",
      completed: false,
      started: false,
      cImage: TethysPopup,
    },
    {
      image: hummus,
      title: "Hummus",
      gradient: "bg-gradient-hummus",
      completed: false,
      started: false,
      cImage: TethysPopup,
    },
    {
      image: midas,
      title: "Midas",
      gradient: "bg-gradient-midas",
      completed: false,
      started: false,
      cImage: TethysPopup,
    },
    {
      image: league,
      title: "League Tech",
      gradient: "bg-gradient-league",
      completed: false,
      started: false,
      cImage: TethysPopup,
    },
  ];
  return (
    <div className="container | lg:pb-36 pb-24 ">
      <h2 className="text-white | lg:text-[46px] text-[36px] | font-bold text-center | lg:pt-[111px] pt-20">
        Ecosystem dApps
      </h2>
      <div className="flex flex-wrap gap-5 | lg:mt-[87px] mt-7">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`${item.gradient} overflow-hidden | lg:w-[calc(50%-10px)] w-full | lg:h-[140px] h-28  | rounded-[30px] flex items-center relative`}
          >
            {/* text */}
            <div className="lg:ml-10 ml-9">
              <h3 className="text-white | lg:text-[30px] text-[24px] | font-semibold">
                {item.title}
              </h3>
              <Image
                src={rightArrow}
                className="w-[25px] h-[25px]"
                alt="right-arrow"
              />
            </div>
            {/* card-image */}
            <Image
              src={item.image}
              alt={item.title}
              className="absolute bottom-0 right-0 h-full w-auto"
            />
            {/* if-completed-overlay */}
            <div
              className={`${
                !item.completed && "hidden"
              } w-full h-full bg-[rgba(0,0,0,0.8)] absolute top-0 left-0 z-10 `}
            >
              <div className="px-4 py-2 bg-[#00FFA3] w-fit absolute top-5 right-5 rounded-[50px] flex items-center, gap-1.5">
                <p className="text-sm font-semibold ">COMPLETED</p>
                <Image
                  src={check}
                  alt="check"
                  className="w-4 "
                  width={16}
                  height={16}
                />
              </div>
            </div>
            {/* if-started-overlay */}
            <div
              className={`${
                item.completed ? "hidden" : item.started ? "block" : "hidden"
              } px-4 py-2 bg-[#00D2FF] w-fit absolute top-5 right-5 rounded-[50px] flex items-center gap-1.5`}
            >
              <p className="text-sm font-semibold ">IN PROGRESS</p>
              <div className="w-4 h-4 rounded-full border-2 border-black border-r-transparent relative -rotate-45"></div>
            </div>
          </div>
        ))}
      </div>
      <Popup {...cards[1]} />
    </div>
  );
};

export default Ecosystem;
