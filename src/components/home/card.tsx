"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "../../app/features/auth/components/button";
import { FaTv } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoPersonSharp } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";

interface CardProps {
  image: StaticImageData;
  name: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ image, name, price }) => {
  return (
    <div className="}] h-[570px] w-[550px] rounded-2xl bg-[rgb(254,255,243)] shadow-xl">
      <Image className="w-full rounded-t-2xl" src={image} alt={name}></Image>
      <h1 className="ml-7 mt-5 dongle-h1-bold">{name}</h1>
      <p className="-mt-8 ml-7 text-[#468EA0]">&#8369;{price}</p>
      <div className="-mt-14 mb-6 ml-[380px] mr-[50px] flex">
        <IconContext.Provider value={{ size: "30px" }}>
          <div className="flex space-x-2">
            <IoPersonSharp />
            <IoBed />
            <FaTv />
            <FaWifi />
          </div>
        </IconContext.Provider>
      </div>
      <div className="-mt-5 w-full">
        <button className="h-[55px] items-center justify-center rounded-b-2xl bg-[#7a4424] text-center leading-none text-white xs:dongle-body-regular lg:w-[550px] lg:pt-[10px] lg:dongle-h3-regular">
          SEE DETAILS &#8594;
        </button>
      </div>
    </div>
  );
};

export default Card;
