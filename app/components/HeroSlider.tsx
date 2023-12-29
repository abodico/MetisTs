"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import frame from "../../public/assets/Frame 6258-2.png";
import mbFrame from "../../public/assets/Frame 6258-4.png";
import Image from "next/image";
import ellipse from "../../public/assets/Ellipse 51.png";
const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    infinite: true,
  };
  const imgs = [
    { lg: frame, mobile: mbFrame },
    { lg: frame, mobile: mbFrame },
    { lg: frame, mobile: mbFrame },
    { lg: frame, mobile: mbFrame },
  ];
  return (
    <div className="relative mt-[54px] mx-auto">
      <Slider
        {...settings}
        className=" 2xl:w-[1060px] lg:h-[440px] lg:w-full z-10 "
      >
        {imgs.map((item, index) => (
          <div
            key={index}
            className="rounded-[40px] overflow-hidden 2xl:w-[1060px] 2xl:h-[440px] w-full "
          >
            <Image
              src={item.lg}
              alt="frame"
              className="max-h-full max-w-full mx-auto lg:!block !hidden"
              // width={1060}
              // height={440}
            />
            <Image
              src={item.mobile}
              alt="frame"
              className="max-h-full max-w-full mx-auto lg:!hidden !block"
              // width={1060}
              // height={440}
            />
          </div>
        ))}
      </Slider>
      <Image
        src={ellipse}
        className="w-[1127px] scale-[1.15] h-[259px] absolute -bottom-24"
        alt="ellipse"
        width={1127}
        height={259}
      />
    </div>
  );
};

export default HeroSlider;
