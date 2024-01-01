"use client";
import React, { useState } from "react";
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
import UnidexPopup from "../../public/assets/UnidexPopup.svg";
import midasPopup from "../../public/assets/midasPopup.svg";
import HummusPopup from "../../public/assets/Group 31.svg";
import MaiaDaoPopup from "../../public/assets/Maia Dao.svg";
import NetswapPopup from "../../public/assets/NetswapPopup.svg";
import leaguePopup from "../../public/assets/league tech.svg";
interface Step {
  step: string;
  completed: boolean;
}
export interface Card {
  image: string;
  cImage: string;
  title: string;
  video: string;
  poster: string;
  gradient: string;
  started: Boolean;
  completed: Boolean;
  steps: Step[];
}
const cards: Card[] = [
  {
    image: tethys,
    title: "Tethys",
    gradient: "bg-gradient-tethys",
    completed: false,
    started: true,
    steps: [
      { step: "Swap at least 1 Metis token", completed: true },
      { step: "Add Liquidity", completed: true },
      { step: "Long at least 0.5 Metis", completed: false },
    ],
    cImage: TethysPopup,
    poster: "https://assets.codepen.io/6093409/river.jpg",
    video: "https://assets.codepen.io/6093409/river.mp4",
  },
  {
    image: unidex,
    title: "Unidex",
    gradient: "bg-gradient-unidex",
    completed: true,
    started: true,
    steps: [
      { step: "Swap at least 1 Metis token", completed: true },
      { step: "Add Liquidity", completed: true },
      { step: "Long at least 0.5 Metis", completed: false },
    ],
    cImage: UnidexPopup,
    poster: "https://assets.codepen.io/6093409/river.jpg",
    video: "",
  },
  {
    image: maia,
    title: "Maia",
    gradient: "bg-gradient-maia",
    completed: false,
    started: true,
    steps: [
      { step: "Swap at least 1 Metis token", completed: true },
      { step: "Add Liquidity", completed: true },
      { step: "Long at least 0.5 Metis", completed: false },
    ],
    cImage: MaiaDaoPopup,
    poster: "https://assets.codepen.io/6093409/river.jpg",
    video: "https://assets.codepen.io/6093409/river.mp4",
  },
  {
    image: netswap,
    title: "Netswap",
    gradient: "bg-gradient-netswap",
    completed: false,
    started: true,
    steps: [
      { step: "Swap at least 1 Metis token", completed: true },
      { step: "Add Liquidity", completed: true },
      { step: "Long at least 0.5 Metis", completed: false },
    ],
    cImage: NetswapPopup,
    poster: "https://assets.codepen.io/6093409/river.jpg",
    video: "https://assets.codepen.io/6093409/river.mp4",
  },
  {
    image: hummus,
    title: "Hummus",
    gradient: "bg-gradient-hummus",
    completed: false,
    started: true,
    steps: [
      { step: "Swap at least 1 Metis token", completed: true },
      { step: "Add Liquidity", completed: true },
      { step: "Long at least 0.5 Metis", completed: false },
    ],
    cImage: HummusPopup,
    poster: "https://assets.codepen.io/6093409/river.jpg",
    video: " ",
  },
  {
    image: midas,
    title: "Midas",
    gradient: "bg-gradient-midas",
    completed: false,
    started: true,
    steps: [
      { step: "Swap at least 1 Metis token", completed: true },
      { step: "Add Liquidity", completed: true },
      { step: "Long at least 0.5 Metis", completed: false },
    ],
    cImage: midasPopup,
    poster: "https://assets.codepen.io/6093409/river.jpg",
    video: "https://assets.codepen.io/6093409/river.mp4",
  },
  {
    image: league,
    title: "League Tech",
    gradient: "bg-gradient-league",
    completed: false,
    started: true,
    steps: [
      { step: "Swap at least 1 Metis token", completed: true },
      { step: "Add Liquidity", completed: true },
      { step: "Long at least 0.5 Metis", completed: false },
    ],
    cImage: leaguePopup,
    poster: "https://assets.codepen.io/6093409/river.jpg",
    video: " ",
  },
];
// box-shadow: 0px_0px_8px_0px_#FFFFFF80;
const Ecosystem = (): React.ReactNode => {
  const [pop, setPop] = useState<number>(-1);
  const togglePop = (index: number) => setPop(index);
  return (
    <div className="container | lg:pb-36 pb-24 ">
      <h2 className="text-white | lg:text-[46px] text-[36px] | font-bold text-center | lg:pt-[111px] pt-20">
        Ecosystem dApps
      </h2>
      <div className="flex flex-wrap gap-5 | lg:mt-[87px] mt-7">
        {cards.map((item, index) => (
          <div
            onClick={() => setPop(index)}
            key={index}
            className={`${item.gradient} overflow-hidden | lg:w-[calc(50%-10px)] w-full | lg:h-[140px] h-28  | rounded-[30px] flex items-center relative cursor-pointer`}
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
      <Popup {...cards[pop]} togglePop={togglePop} pop={pop} />
    </div>
  );
};

export default Ecosystem;
