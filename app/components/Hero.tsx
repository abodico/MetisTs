import React from "react";
import SimpleSlider from "./HeroSlider";
import token2 from "../../public/assets/tokens 2.png";
import token3 from "../../public/assets/tokens 3.png";
import rightArrow from "../../public/assets/Group 33.svg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="lg:pb-[100px] pb-20 | container">
      <SimpleSlider />
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
          className="text-black bg-white rounded-[50px] leading-[18px] py-[15px] px-5 font-semibold mt-[52px] "
          type="button"
        >
          Connect your Wallet
        </button>
      </div>
      {/* claiming-card */}
      <div className="bg-[#003A92] w-full | lg:h-[100px] h-[90px] | rounded-[30px] | lg:pl-[47px] pl-5 | lg:mt-[57px] mt-10 | lg:py-8 py-4 | relative">
        <div className="flex | lg:gap-5 | items-center | xs:max-w-[50%] max-w-[65%] ">
          <p className="font-semibold | lg:text-[30px] text-2xl | text-white leading-[28px]">
            Claim your tokens
          </p>
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
