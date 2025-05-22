"use client";

import RoomTypeContainer from "@/components/Accommodations/RoomType/roomtype-container";
import { RoomDataList } from "@/data/data";
import Image from "next/image";

const CabanasPage = () => {
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="relative h-[613px] w-full">
        <h1 className="absolute inset-0 z-10 flex items-center justify-center text-7xl text-white cormorant-sc-t1-bold">
          CABANAS
        </h1>
        <div className="absolute inset-0 z-[5] bg-black/30" />
        <Image
          src="/images/rooms/cabana.png"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          alt="Cabana Room Image"
        />
      </div>

      <div className="grid grid-cols-4 gap-0">
        <div className="relative h-[260px] overflow-hidden">
          <Image
            src="/images/rooms/cabana.png"
            width={360}
            height={260}
            className="h-full w-full object-cover"
            alt="Cabana Detail 1"
          />
        </div>
        <div className="relative h-[260px] overflow-hidden">
          <Image
            src="/images/rooms/cabana.png"
            width={360}
            height={260}
            className="h-full w-full object-cover"
            alt="Cabana Detail 2"
          />
        </div>
        <div className="relative h-[260px] overflow-hidden">
          <Image
            src="/images/rooms/cabana.png"
            width={360}
            height={260}
            className="h-full w-full object-cover"
            alt="Cabana Detail 3"
          />
        </div>
        <div className="relative h-[260px] overflow-hidden">
          <Image
            src="/images/rooms/cabana.png"
            width={360}
            height={260}
            className="h-full w-full object-cover"
            alt="Cabana Detail 4"
          />
        </div>
      </div>

      {/* <RoomTypeContainer
        name={room.name}
        description={room.description}
        image={room.image}
        price={room.price}
      /> */}
    </div>
  );
};

export default CabanasPage;
