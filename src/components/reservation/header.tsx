import React from "react";
import Image from "next/image";
import logo from "@/assets/images/LogoW.png";
import profile from "@/assets/images/profile.png";
import { getName } from "@/app/features/auth/queries/get-user";

const Header = async () => {
  const name = await getName();
  return (
    <nav className="bg-[#AA7562] w-full h-24 flex flex-row justify-end">
      <div className="flex justify-center items-center pr-8 gap-4">
        <div className="flex flex-col justify-center text-center items-end">
          <h1 className="text-white dongle-body-regular">Officer</h1>
          <h1 className="text-white font-dongle font-bold text-3xl leading-3">
            {name}
          </h1>
        </div>
        <Image src={profile} alt="profile" className="w-[58px] h-[58px]" />
      </div>
    </nav>
  );
};

export default Header;
