import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/LogoW.png";
import {
  Door,
  SealPercent,
  CreditCard,
  SunHorizon,
  Smiley,
  Waves,
  Island,
  BookBookmark,
} from "@phosphor-icons/react/dist/ssr";

// Define menu items data
const menuItems = [
  { icon: Door, text: "Hotel Rooms", type: "rooms", href: "/hotelrooms" },
  { icon: SealPercent, text: "Promos", type: "deals", href: "/promos" },
  {
    icon: CreditCard,
    text: "Loyalty Card",
    type: "deals",
    href: "/loyaltycard",
  },
  { icon: SunHorizon, text: "Day Tour", type: "offers", href: "/daytour" },
  {
    icon: Smiley,
    text: "Surprise Setup",
    type: "offers",
    href: "/surprisesetup",
  },
  {
    icon: Waves,
    text: "Water Activities",
    type: "offers",
    href: "/wateractivities",
  },
  {
    icon: Island,
    text: "Island Hopping",
    type: "offers",
    href: "/islandhopping",
  },
  {
    icon: BookBookmark,
    text: "Booking Requests",
    type: "booking",
    href: "/bookingrequests",
  },
];

const IconComponent = ({
  icon: Icon,
  text,
  href,
  isSelected,
}: {
  icon: React.ElementType;
  text: string;
  href: string;
  isSelected: boolean;
}) => {
  const baseClassName =
    "dongle-body-regular flex items-center text-center w-60 h-14 rounded-xl pl-5 gap-2";
  const selectedClassName = "text-white bg-[#AA7B62] mb-4";
  const defaultClassName = "text-brown";

  return (
    <li
      className={`${baseClassName} ${
        isSelected ? selectedClassName : defaultClassName
      } cursor-pointer`}
    >
      <Link href={href} className="flex items-center gap-2">
        <Icon size={32} />
        <span>{text}</span>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <nav className="bg-white min-h-[1090px] min-w-80 overflow-scroll">
      <div className="w-80 bg-brown h-24 flex flex-row justify-left pl-8 items-center">
        <Image src={logo} alt="logo" className="fill-white w-[78px] h-[65px]" />
        <div className="flex flex-col">
          <h1 className="font-ephesis text-5xl text-white">Pamana</h1>
          <p className="font-cormorant text-sm text-white leading-3">
            RESORTS AND HOTELS
          </p>
        </div>
      </div>
      <ul className="p-10">
        <h1 className="dongle-body-light">ROOMS</h1>
        {menuItems
          .filter((item) => item.type === "rooms")
          .map((item, index) => (
            <IconComponent
              key={index}
              icon={item.icon}
              text={item.text}
              href={item.href}
              isSelected={item.text === "Hotel Rooms"}
            />
          ))}

        <h1 className="dongle-body-light">DEALS</h1>
        {menuItems
          .filter((item) => item.type === "deals")
          .map((item, index) => (
            <IconComponent
              key={index}
              icon={item.icon}
              text={item.text}
              href={item.href}
              isSelected={false}
            />
          ))}

        <h1 className="dongle-body-light">OFFERS</h1>
        {menuItems
          .filter((item) => item.type === "offers")
          .map((item, index) => (
            <IconComponent
              key={index}
              icon={item.icon}
              text={item.text}
              href={item.href}
              isSelected={false}
            />
          ))}

        <h1 className="dongle-body-light">BOOKING</h1>
        {menuItems
          .filter((item) => item.type === "booking")
          .map((item, index) => (
            <IconComponent
              key={index}
              icon={item.icon}
              text={item.text}
              href={item.href}
              isSelected={false}
            />
          ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
