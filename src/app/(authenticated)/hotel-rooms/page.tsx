import React from "react";
import { ArrowsClockwise, User } from "@phosphor-icons/react/dist/ssr";
import { getName } from "@/app/features/auth/queries/get-user";
import RoomsPage from "@/components/hotel-rooms/rooms";
import { Room } from "@/utils/types";
import { GetServerSideProps } from "next";
import rooms from "@/components/hotel-rooms/rooms";

interface HotelRoomsProps {
  rooms: Room[];
}

const HotelRooms = async () => {
  const userName = await getName();
  const rooms = await fetchRooms();

  return (
    <main className="dongle-h1-bold">
      <h1>HOTEL ROOMS</h1>
      <div className="flex flex-row w-full justify-between gap-4 ">
        <div className="flex flex-row bg-beige justify-center items-center gap-4 w-3/4 h-24 rounded-2xl outline-[#B6AF99] outline">
          <ArrowsClockwise
            size={40}
            className="bg-brown rounded-full p-2"
            fill="white"
          />
          <div className="flex flex-col ">
            <p className="dongle-h3-light m-0 leading-[32px]">Last Updated</p>
            <h1 className="dongle-h2-bold leading-[32px] m-0 ">
              10 minutes ago
            </h1>
          </div>
        </div>
        <div className="flex flex-row bg-beige justify-center items-center gap-4 w-3/4 h-24 rounded-2xl outline-[#B6AF99] outline">
          <User size={40} className="bg-brown rounded-full p-2" fill="white" />
          <div className="flex flex-col ">
            <p className="dongle-h3-light m-0 leading-[32px]">
              Changes made by:
            </p>
            <h1 className="dongle-h2-bold leading-[32px] m-0 ">{userName}</h1>
          </div>
        </div>
      </div>
      <RoomsPage rooms={rooms} />
    </main>
  );
};

export const fetchRooms = async (): Promise<Room[]> => {
  return [
    {
      id: "1",
      name: "Standard Double Room",
      details: {
        capacity: 2,
        rate: 100,
        bedDetails: "1 Double Bed",
        images: ["/images/standard-double.jpg"],
        airconditioned: false,
        television: false,
        wifi: false,
      },
    },
    {
      id: "2",
      name: "Deluxe Double Room",
      details: {
        capacity: 3,
        rate: 150,
        bedDetails: "1 King Bed",
        images: ["/images/deluxe-double.jpg"],
        airconditioned: false,
        television: false,
        wifi: false,
      },
    },
  ];
};

export default HotelRooms;
