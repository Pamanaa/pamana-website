import React from "react";
import { roomslist } from "./rooms";
import Image from "next/image";
import { Button } from "@/components/Button/main-btn";

interface ContainerStyle {
  invert?: boolean;
}

const Rooms: React.FC<ContainerStyle> = ({}) => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col items-center">
        {/* First Wave */}
        <div className="flex h-60 items-end bg-beige">
          <Image
            src="/images/wave/wave-cabana-upper.png"
            alt="Wave"
            className="h-44 w-auto min-w-[1920px]"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>

        {/* First Room (Cabanas) */}
        <div className="mt-10 flex h-[467px] flex-col items-start bg-background">
          <div className="flex max-w-full flex-row items-center justify-center gap-24">
            <Image
              src={roomslist[0].image}
              alt={roomslist[0].name}
              width={598}
              height={407}
            />
            <div className="flex w-1/3 flex-col justify-center gap-12">
              <h1 className="leading-3 dongle-h1-bold">{roomslist[0].name}</h1>
              <p className="font-lao text-xl">{roomslist[0].description}</p>
              <Button
                label={`VIEW ${roomslist[0].name.toUpperCase()}`}
                primary
                link="accommodations/rooms/cabanas"
              />
            </div>
          </div>
        </div>

        {/* Second Room (Single) */}
        <div className="flex h-[467px] flex-col items-start bg-background">
          <div className="flex max-w-full flex-row-reverse items-center justify-center gap-24">
            <Image
              src={roomslist[1].image}
              alt={roomslist[1].name}
              width={598}
              height={407}
            />
            <div className="flex w-1/3 flex-col justify-center gap-12">
              <h1 className="leading-3 dongle-h1-bold">{roomslist[1].name}</h1>
              <p className="font-lao text-xl">{roomslist[1].description}</p>
              <Button
                label={`VIEW ${roomslist[1].name.toUpperCase()}`}
                primary
                link="accommodations/rooms/single"
              />
            </div>
          </div>
        </div>

        {/* Second Wave */}
        <div className="flex h-60 rotate-180 items-end bg-lightbrown">
          <Image
            src="/images/wave/wave-cabana-upper.png"
            alt="Wave"
            className="h-44 w-auto min-w-[1920px]"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>

        {/* Third Wave */}
        <div className="flex h-60 items-end bg-beige">
          <Image
            src="/images/wave/wave-cabana-upper.png"
            alt="Wave"
            className="h-44 w-auto min-w-[1920px]"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>

        {/* Third Room (Deluxe) */}
        <div className="flex h-[467px] flex-col items-start bg-background">
          <div className="flex max-w-full flex-row items-center justify-center gap-24">
            <Image
              src={roomslist[2].image}
              alt={roomslist[2].name}
              width={598}
              height={407}
            />
            <div className="flex w-1/3 flex-col justify-center gap-12">
              <h1 className="leading-3 dongle-h1-bold">{roomslist[2].name}</h1>
              <p className="font-lao text-xl">{roomslist[2].description}</p>
              <Button
                label={`VIEW ${roomslist[2].name.toUpperCase()}`}
                primary
                link="accommodations/rooms/deluxe"
              />
            </div>
          </div>
        </div>

        {/* Fourth Room (Dormitory) */}
        <div className="flex h-[467px] flex-col items-start bg-background">
          <div className="flex max-w-full flex-row-reverse items-center justify-center gap-24">
            <Image
              src={roomslist[3].image}
              alt={roomslist[3].name}
              width={598}
              height={407}
            />
            <div className="flex w-1/3 flex-col justify-center gap-12">
              <h1 className="leading-3 dongle-h1-bold">{roomslist[3].name}</h1>
              <p className="font-lao text-xl">{roomslist[3].description}</p>
              <Button
                label={`VIEW ${roomslist[3].name.toUpperCase()}`}
                primary
                link="accommodations/rooms/dormitory"
              />
            </div>
          </div>
        </div>

        {/* Fourth Wave */}
        <div className="flex h-60 rotate-180 items-end bg-lightbrown">
          <Image
            src="/images/wave/wave-cabana-upper.png"
            alt="Wave"
            className="h-44 w-auto min-w-[1920px]"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
