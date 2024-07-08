import { getName } from "@/app/features/auth/queries/get-user";
import { fetchRooms } from "@/components/hotel-rooms/actions";
import RoomsPage from "@/components/hotel-rooms/rooms";
import { ArrowsClockwise, User } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const HotelRooms = async () => {
  const userName = await getName();
  const rooms = await fetchRooms();

  return (
    <main className="dongle-h1-bold ">
      <h1>HOTEL ROOMS</h1>
      <div className="flex flex-row w-full justify-between gap-4 ">
        <div className="flex flex-row bg-beige justify-center items-center gap-4 w-3/4 h-24 rounded-2xl outline__standard">
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
        <div className="flex flex-row bg-beige justify-center items-center gap-4 w-3/4 h-24 rounded-2xl outline__standard">
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

export default HotelRooms;
