import Rooms from "@/components/Accommodations/rooms/rooms-container";
import Image from "next/image";
import React from "react";

const Accommodations = () => {
  return (
    <main className="">
      <section>
        <Image
          src="/images/accommodation/accomm-hero.png"
          alt="Accommodation"
          className="h-[613px] w-full object-cover"
          width="0"
          height="0"
          sizes="100vw"
        />
      </section>

      <Rooms />
    </main>
  );
};

export default Accommodations;
