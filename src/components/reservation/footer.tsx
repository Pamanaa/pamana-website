import React from "react";
import Image from "next/image";
import logo from "@/assets/images/LogoW.png";

const Footer = () => {
  return (
    <nav className="bg-[#AA7562] w-full h-24 flex relative bottom-0 flex-row-reverse justify-between">
      <div className="w-80 bg-brown h-24 flex flex-row justify-left pl-8 items-center">
        <Image src={logo} alt="logo" className="fill-white w-[78px] h-[65px]" />
        <div className="flex flex-col ">
          <h1 className="font-ephesis text-5xl text-white">Pamana</h1>
          <p className="font-cormorant text-sm text-white leading-3">
            RESORTS AND HOTELS
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
