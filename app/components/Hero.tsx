"use client";
import React from "react";
import token2 from "../../public/assets/tokens 2.png";
import token3 from "../../public/assets/tokens 3.png";
import rightArrow from "../../public/assets/Group 33.svg";
import Image from "next/image";
import frame from "../../public/assets/Frame 6258-2.png";
import mbFrame from "../../public/assets/Frame 6258-4.png";
import ellipse from "../../public/assets/Ellipse 51.png";
const Hero = (): React.ReactNode => {
  const [connected, setConnected] = React.useState(false);
  const [claimed, setClaimed] = React.useState(false);
  return (
    <div className="lg:pb-[100px] pb-20 | container">
      <div className="relative mt-[54px] mx-auto 2xl:w-[1060px] lg:h-[440px] lg:w-full z-10">
        <div className="rounded-[40px] overflow-hidden 2xl:w-[1060px] 2xl:h-[440px] w-full ">
          <Image
            src={frame}
            alt="frame"
            className="max-h-full max-w-full mx-auto lg:!block !hidden"
            width={1060}
            height={440}
          />
          <Image
            src={mbFrame}
            alt="frame"
            className="max-h-full max-w-full mx-auto lg:!hidden !block"
            width={1060}
            height={440}
          />
        </div>
        <Image
          src={ellipse}
          className="w-[1127px] scale-[1.15] h-[259px] absolute -bottom-24"
          alt="ellipse"
          width={1127}
          height={259}
        />
      </div>
      {/* text-info */}
      <div className="text-center">
        <h2 className="font-bold | lg:text-[66px] text-4xl | lg:leading-[77px] leading-10 | mt-[114px] text-white ">
          Season One
        </h2>
        <p className="text-white font-inter | lg:mt-2 mt-3 | lg:leading-normal leading-5 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button
          onClick={() => setConnected(true)}
          className={`${
            connected && "hidden"
          } text-black bg-white rounded-[50px] leading-[18px] py-[15px] px-5 font-semibold mt-[52px] `}
          type="button"
        >
          Connect your Wallet
        </button>
      </div>
      {/* claiming-card */}
      <div
        onClick={() => setClaimed(true)}
        className={`${
          claimed && "grayscale"
        } cursor-pointer bg-[#003A92] hover:shadow-[inset_0px_4px_50px_0px_#00D2FF4D] transition-shadow duration-200 w-full | lg:h-[100px] h-[90px] | rounded-[30px] | lg:pl-[47px] pl-5 | lg:mt-[57px] mt-10 | lg:py-8 py-4 | relative`}
      >
        <div className="flex | lg:gap-5 | items-center | xs:max-w-[50%] max-w-[65%] ">
          <button
            type="button"
            className="font-semibold | lg:text-[30px] text-2xl | text-white leading-[28px]"
          >
            Claim your tokens
          </button>
          <Image
            src={rightArrow}
            alt="arrow"
            width={25}
            height={25}
            className="relative z-10"
          />
        </div>
        <Image
          src={token2}
          className="absolute bottom-0 | lg:right-0 -right-4 | w-auto | lg:h-[100px] h-[90px]"
          alt="token2"
          width={177}
          height={179}
        />
        <Image
          src={token3}
          className="absolute bottom-0 | lg:right-8 right-4 w-auto | lg:h-[100px] h-[90px]"
          alt="token2"
          width={177}
          height={179}
        />
      </div>
    </div>
  );
};

export default Hero;
