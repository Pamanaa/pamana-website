import hero from "@/assets/images/accomm-hero.png";
import Rooms from "@/components/Accommodations/rooms/rooms-container";
import Image from "next/image";
import React from "react";

const Accommodations = () => {
  return (
    <main className="">
      <section>
        <Image
          src={hero}
          alt="Accommodation"
          className="w-full] h-[613px] object-cover"
        />
      </section>

      <Rooms />
    </main>
  );
};

export default Accommodations;
