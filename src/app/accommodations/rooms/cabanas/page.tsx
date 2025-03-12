import React from "react";
import Image from "next/image";
import { FaBed, FaWifi, FaPerson, FaTv } from "react-icons/fa6";

const Cabanas = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mb-8 h-[400px] w-full">
        <h1 className="absolute inset-0 z-10 flex items-center justify-center text-6xl text-white cormorant-sc-t1-bold">
          CABANAS
        </h1>
        <div className="absolute inset-0 z-[5] bg-black/30" />
        <Image
          src="/images/rooms/cabanas-hero.jpg"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mb-12 grid gap-8 md:grid-cols-2">
        <div className="h-75 flex flex-col items-center justify-center">
          <h3 className="text-center dongle-h3-light">
            Prepare your palate, for imaginative organic dishes, mouth-watering
            local favorites, and delicate pastries at Pamana. Prepare your
            palate, for imaginative organic dishes, mouth-watering local
            favorites, and delicate pastries at Pamana.
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-9">
            <div className="flex h-48 w-full items-center justify-center align-middle">
              <div className="flex flex-col items-center justify-center align-middle">
                <FaBed />
                <h1 className="dongle-h3-light">Queen Bed</h1>
              </div>
            </div>
            <div className="flex h-48 w-full items-center justify-center align-middle">
              <div className="flex flex-col items-center justify-center align-middle">
                <FaWifi />
                <h1 className="dongle-h3-light">150 MBPS Speed</h1>
              </div>
            </div>
            <div className="flex h-48 w-full items-center justify-center align-middle">
              <div className="flex flex-col items-center justify-center align-middle">
                <div className="flex flex-row">
                  {" "}
                  <FaPerson />
                  <FaPerson />
                </div>
                <h1 className="dongle-h3-light">2-person Capacity</h1>
              </div>
            </div>
            <div className="flex h-48 w-full items-center justify-center align-middle">
              <div className="flex flex-col items-center justify-center align-middle">
                <FaTv />
                <h1 className="dongle-h3-light">TV with 50 Channels</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-12 rounded-xl border border-brown bg-transparent p-8 shadow-md">
          <h2 className="ephesis-h2">Reserve Room</h2>
          <hr />
          <div className="justify-left flex flex-row items-center">
            <h1 className="dongle-title-regular">₱ 4,350</h1>
            <h1 className="dongle-h2-light">/night</h1>
          </div>
          <div className="dongle-h3-light">
            Lorem ipsum dolor sit amet. Qui doloribus corrupti aut quia veniam
            sed internos soluta.
          </div>

          <button className="hover:bg-green-700 w-full rounded-lg bg-green px-5 py-2 text-white transition-colors dongle-h3-regular">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cabanas;
