"use client";

import RoomTypeContainer from "@/components/Accommodations/RoomType/roomtype-container";
import { CabanaData } from "@/components/Accommodations/RoomType/cabanas/data";

const CabanasPage = () => {
  const room = CabanaData[0]; // since it's an array with one cabana

  return (
    <RoomTypeContainer
      name={room.name}
      description={room.description}
      image={room.image}
      price={room.price}
    />
  );
};

export default CabanasPage;
