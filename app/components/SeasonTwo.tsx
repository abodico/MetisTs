import React from "react";
import rightArrowB from "../../public/assets/Group 33b.svg";
import Image from "next/image";
import twitter from "../../public/assets/Union.svg";
const SeasonTwo = () => {
  return (
    <div className="lg:pt-[117px] pt-24 | lg:pb-[104px] pb-48 | container">
      {/* white-card */}
      <div className="bg-white | lg:px-[40px] px-7 | lg:h-[100px] h-[90px] | flex items-center justify-between rounded-[30px] cursor-pointer">
        <div className="flex | lg:gap-5 | items-center max-w-[60%] ">
          <h4 className="text-black break-words | lg:text-[30px] text-2xl | font-semibold">
            Share on Twitter X
          </h4>
          <Image
            src={rightArrowB}
            className="w-6 h-6"
            width={25}
            height={25}
            alt="right-arrow"
          />
        </div>
        {/* twitter-logo */}
        <Image
          src={twitter}
          className="w-10 h-9"
          alt="twitter"
          width={40}
          height={37}
        />
      </div>
      {/* text-info */}
      <div className="text-center text-white | lg:mt-[83px] mt-20 ">
        <h2 className=" opacity-25 font-bold | lg:text-[66px] text-4xl | lg:leading-[77px] leading-[28px]">
          Season Two
        </h2>
        <h3 className="font-semibold | lg:text-[26px] text-[20px] | lg:mt-0 mt-2">
          COMING SOON
        </h3>
      </div>
    </div>
  );
};

export default SeasonTwo;
