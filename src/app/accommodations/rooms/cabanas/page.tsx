"use client";
import Image from "next/image";
import BedIcon from "@mui/icons-material/Bed";
import WifiIcon from "@mui/icons-material/Wifi";
import PeopleIcon from "@mui/icons-material/People";
import TvIcon from "@mui/icons-material/Tv";

const Cabanas = () => {
  return (
    // Incorporate hover or onclick effects
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

      <div className="px-16 py-12">
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col items-center justify-center">
            <h3 className="max-w-[620px] text-center leading-10 text-brown dongle-h3-light">
              Prepare your palate, for imaginative organic dishes,
              mouth-watering local favorites, and delicate pastries at Pamana.
              Prepare your palate, for imaginative organic dishes,
              mouth-watering local favorites, and delicate pastries at Pamana.
            </h3>
            <div className="mt-12 grid w-full grid-cols-2 gap-x-16 gap-y-8">
              <div className="flex flex-col items-center text-center text-lightbrown">
                <BedIcon style={{ fontSize: 48 }} />
                <h1 className="dongle-h3-light">Queen Bed</h1>
              </div>
              <div className="flex flex-col items-center text-center text-lightbrown">
                <WifiIcon style={{ fontSize: 48 }} />
                <h1 className="dongle-h3-light">150 MBPS Speed</h1>
              </div>
              <div className="flex flex-col items-center text-center text-lightbrown">
                <PeopleIcon style={{ fontSize: 48 }} />
                <h1 className="dongle-h3-light">2-person Capacity</h1>
              </div>
              <div className="flex flex-col items-center text-center text-lightbrown">
                <TvIcon style={{ fontSize: 48 }} />
                <h1 className="dongle-h3-light">TV with 50 Channels</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-xl border border-brown bg-transparent p-8 shadow-md">
            <h2 className="mb-4 text-3xl text-brown ephesis-h2">
              Reserve Room
            </h2>
            <hr className="mb-6 border-brown" />
            <div className="mb-6 flex flex-col">
              <div className="mb-2 flex flex-row items-baseline gap-1">
                <span className="text-5xl text-brown dongle-title-regular">
                  ₱ 4,350
                </span>
                <span className="text-brown dongle-h2-light">/night</span>
              </div>
              <div className="text-brown dongle-h3-light">
                Lorem ipsum dolor sit amet. Qui doloribus corrupti aut quia
                veniam sed internos soluta.
              </div>
            </div>

            <button
              type="button"
              className="hover:bg-green-700 mt-auto w-full rounded-lg bg-green px-5 py-3 text-white transition-colors dongle-h3-regular"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cabanas;
