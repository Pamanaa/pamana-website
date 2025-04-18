"use client";

import Image, { StaticImageData } from "next/image";
import { FaTv } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoPersonSharp } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";

interface CardProps {
  image: string;
  name: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ image, name, price }) => {
  return (
    <div className="h-auto w-[30rem] rounded-2xl bg-[rgb(254,255,243)] shadow-xl">
      <Image
        src={image}
        alt={name}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full rounded-t-2xl object-cover"
      />
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex flex-col">
          <h1 className="!text-3xl dongle-h1-bold">{name}</h1>
          <p className="font-bold text-[#468EA0]">&#8369;{price}</p>
        </div>
        <div className="mb-6 flex">
          <IconContext.Provider value={{ size: "20px" }}>
            <div className="flex space-x-2">
              <IoPersonSharp />
              <IoBed />
              <FaTv />
              <FaWifi />
            </div>
          </IconContext.Provider>
        </div>
      </div>

      <div className="w-full bg-[#7a4424] rounded-b-2xl">
        <button className="w-full pt-2 py-1 !text-3xl items-center justify-center rounded-b-2xl  text-center leading-none text-white xs:dongle-body-regular lg:dongle-h3-regular">
          SEE DETAILS &#8594;
        </button>
      </div>
    </div>
  );
};

export default Card;
