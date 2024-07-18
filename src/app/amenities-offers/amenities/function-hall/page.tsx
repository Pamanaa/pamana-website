import React from "react";
import Image from "next/image";
import { Carousel, functionHallImages } from "@/components/Carousel";

const FunctionHall = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[641px] w-full">
        <Image
          src="/images/amenities/hall-1.png"
          className=""
          alt="function hall"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="uppercase text-white cormorant-sc-t1-bold">
            Function Hall
          </h1>
        </div>
      </div>

      {/* Information Section */}
      <div className="flex items-center justify-center py-20">
        <div className="flex w-[706px] flex-col items-center gap-y-[39px]">
          <div className="flex flex-col items-center">
            <h1 className="dongle-title-regular px-[50px] uppercase text-brown">
              Function Hall
            </h1>
            <hr className="w-full border-brown" />
          </div>
          <p className="text-center leading-none text-brown dongle-h3-light">
            Prepare your palate, for imaginative organic dishes, mouth-watering
            local favorites, and delicate pastries at Pamana. Prepare your
            palate, for imaginative organic dishes, mouth-watering local
            favorites, and delicate pastries at Pamana.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="py-10">
        <Carousel images={functionHallImages} />
      </div>
    </>
  );
};

export default FunctionHall;
