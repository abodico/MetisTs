import React from "react";
import logo from "../../public/assets/Metis Light Background.svg";
import Image from "next/image";
import twi from "../../public/assets/twi.svg";
import tele from "../../public/assets/telegram.svg";
import discord from "../../public/assets/discord.svg";
import youtube from "../../public/assets/you.svg";
import git from "../../public/assets/github.svg";
import med from "../../public/assets/medium.svg";
import Link from "next/link";
const Footer = () => {
  const icons = [
    {
      icon: twi,
      link: "",
    },
    {
      icon: tele,
      link: "",
    },
    {
      icon: med,
      link: "",
    },
    {
      icon: discord,
      link: "",
    },
    {
      icon: git,
      link: "",
    },
    {
      icon: youtube,
      link: "",
    },
  ];
  const list1 = [
    "Platform",
    "Knowledge",
    "Carrers",
    "Search",
    "Subscribe",
    "Brand Assets",
  ];
  const list2 = [
    "Community",
    "Company",
    "Ecosystem",
    "Terms & conditions",
    "Contact",
  ];
  return (
    <div className="container pt-[54px] lg:pb-40 pb-32">
      {/* logo & icons */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <Image
          src={logo}
          className="lg:w-[197px] w-28 | lg:h-10"
          alt="logo"
          width={197}
          height={42}
        />
        {/* lg-icons */}
        <div className=" items-center gap-2.5 lg:flex hidden">
          {icons.map((item, index) => (
            <Link href={item.link} key={index}>
              <Image
                src={item.icon}
                className="w-12 h-12"
                alt="icon"
                width={50}
                height={50}
              />
            </Link>
          ))}
        </div>
      </div>
      {/* lists */}
      <div className="flex items-start | lg:gap-36 gap-16 | text-white text-[13px] font-poppins mt-[47px]">
        {/* first-list */}
        <ul className="flex flex-col gap-4">
          {list1.map((item, index) => (
            <li key={index} className="">
              <Link href="">{item}</Link>
            </li>
          ))}
        </ul>
        {/* second-list */}
        <ul className="flex flex-col gap-4">
          {list2.map((item, index) => (
            <li key={index} className="">
              <Link href="">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile-icons */}
      <div className=" items-center gap-2.5 lg:hidden flex mt-8">
        {icons.map((item, index) => (
          <Link href={item.link} key={index}>
            <Image
              src={item.icon}
              className="w-8 h-8"
              alt="icon"
              width={50}
              height={50}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
