"use client";

import RoomTypeContainer from "@/components/Accommodations/RoomType/roomtype-container";
import { DormitoryData } from "@/components/Accommodations/RoomType/dormitory/data";
import Image from "next/image";

const DormitoryPage = () => {
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="relative h-[613px] w-full">
        <h1 className="absolute inset-0 z-10 flex items-center justify-center text-7xl text-white cormorant-sc-t1-bold">
          DORMITORY
        </h1>
        <div className="absolute inset-0 z-[5] bg-black/30" />
        <Image
          src="/images/rooms/dormitory/Dormitory(10pax).jpg"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          alt="Dormitory Room Image"
        />
      </div>

      <div className="grid grid-cols-4 gap-0">
        <div className="relative h-[260px] overflow-hidden">
          <Image
            src="/images/rooms/dormitory/Dormitory(6pax)2.jpg"
            width={360}
            height={260}
            className="h-full w-full object-cover"
            alt="Dormitory Detail 1"
          />
        </div>
        <div className="relative h-[260px] overflow-hidden">
          <Image
            src="/images/rooms/dormitory/BahayKubo.jpg"
            width={360}
            height={260}
            className="h-full w-full object-cover"
            alt="Dormitory Detail 2"
          />
        </div>
        <div className="relative h-[260px] overflow-hidden">
          <Image
            src="/images/rooms/dormitory/Dormitory(6pax).jpg"
            width={360}
            height={260}
            className="h-full w-full object-cover"
            alt="Dormitory Detail 3"
          />
        </div>
        <div className="relative h-[260px] overflow-hidden">
          <Image
            src="/images/rooms/dormitory/BahayKubo2.jpg"
            width={360}
            height={260}
            className="h-full w-full object-cover"
            alt="Dormitory Detail 4"
          />
        </div>
      </div>

      {DormitoryData.map((room, index) => (
        <RoomTypeContainer
          key={index}
          name={room.name}
          description={room.description}
          image={room.image}
          price={room.price}
          bed={room.bed}
          capacity={room.capacity}
          breakfast={room.breakfast}
          roomsize={room.roomsize}
        />
      ))}
    </div>
  );
};

export default DormitoryPage;
