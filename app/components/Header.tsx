import Image from "next/image";
import React from "react";
import Metis from "../../public/assets/Metis Light Background.svg";
import hover from "../../public/assets/hover.svg";
import img176 from "../../public/assets/image 176.png";
import upArrow from "../../public/assets/vector 96.svg";
import arrow from "../../public/assets/Vector 94.svg";
import mobileLogo from "../../public/assets/mobileLogo.svg";
const Header = () => {
  const list = "Developer Ecosystem Governance Company Bridge More".split(" ");
  return (
    <div className="flex items-center justify-between xl:px-[45px]  p-3 lg:py-5  ">
      {/* logo */}
      <div className="lg:w-[123px] lg:h-[44px] w-9 h-9 flex items-center">
        {/* lg-logo */}
        <Image
          src={Metis}
          width={200}
          height={200}
          alt="Metis-Light-Background"
          className=" max-w-full max-h-full lg:block hidden"
        />
        {/* non-lg-logo */}
        <Image
          src={mobileLogo}
          width={200}
          height={200}
          alt="Metis-Light-Background"
          className=" max-w-full max-h-full lg:hidden block"
        />
      </div>
      {/* list & bars & dark-mode-button  */}
      <div className="flex items-center xl:gap-5 lg:gap-2 gap-1">
        {/* the ul is block in lg devices and hidden otherwise */}
        <ul className="text-white text-[15px] xl:gap-4 gap-2 lg:flex hidden">
          {list.map((item, index) => (
            <li key={index} className="cursor-pointer font-medium">
              {item}
            </li>
          ))}
        </ul>
        <div className="xl:w-[400px] lg:w-[370px]  w-[275px] | lg:h-[50px] h-10 | bg-transparent | relative | rounded-[40px] | overflow-hidden | bg-light | lg:text-[18px] text-xs ">
          {/* blue-bar */}
          <div className="w-1/2 h-full bg-[#00D2FF] text-black flex items-center font-medium gap-2 | pl-4  ">
            <Image
              src={arrow}
              width={200}
              height={200}
              alt="arrow"
              className=" scale-125 w-[9px] h-1 "
            />
            <p className="font-poppins "> 36 Metis</p>
          </div>
          {/* white-bar */}
          <div className="w-1/2 h-full left-[31%] bg-white text-black flex items-center font-medium | lg:gap-3 gap-1.5 | pl-2 rounded-[40px] absolute top-0  ">
            <div className=" lg:w-[34px] w-[30px] | lg:h-[34px] h-[30px] | rounded-full border-[3px] box-border border-r-[#00d2ff] border-y-black border-l-black flex items-center text-center -rotate-[45deg]">
              <div className="font-poppins | lg:text-[13px] text-[10px] | relative | lg:w-[34px] w-[30px] | rotate-[45deg] ">
                XP
              </div>
              <div className="bg-black absolute | lg:top-[6px] top-1.5 | lg:left-[24px] left-[20px] | lg:w-[14px] w-[12px] | lg:h-[14px] h-[12px] | flex items-center justify-center rounded-full rotate-[45deg]">
                <Image
                  src={upArrow}
                  width={200}
                  height={200}
                  alt="arrow"
                  className=" text w-[12px] h-[4px] "
                />
              </div>
            </div>
            <p className="font-poppins">142</p>
          </div>
          {/* dark-bar */}
          <div className="w-1/2 h-full | lg:left-[54%] left-[56%] | bg-light text-white flex items-center font-medium gap-2 pl-2 rounded-[40px] absolute top-0  ">
            <Image
              src={img176}
              width={200}
              height={200}
              alt="arrow"
              className=" text | lg:w-[38px] w-8 | lg:h-[38px] h-8 "
            />
            <p className="font-poppins">0x8e...c06c</p>
          </div>
        </div>
        {/* dark-mode-button */}
        <div className="w-9 h-9 flex items-center">
          <Image
            src={hover}
            width={200}
            height={200}
            alt="hover"
            className=" max-w-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
