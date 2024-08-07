import React from "react";
import wavebeige from "@/assets/images/wave-cabana-upper.png";
import Image from "next/image";

interface WaveProps {
  top: string;
  rotate?: string;
}

const WaveBeige: React.FC<WaveProps> = ({ top, rotate }) => {
  return (
    <div className="flex h-[240px] items-end bg-beige pb-[-5px]">
      <div className={` ${top} z-10 w-full ${rotate}`}>
        <Image src={wavebeige} alt="Wave" className="h-[200.08px] w-full" />
      </div>
    </div>
  );
};

export default WaveBeige;
