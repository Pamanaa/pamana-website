import Image, { StaticImageData } from "next/image";
import { Button } from "../button";
import pax from "@/assets/images/home/pax.png";
import tv from "@/assets/images/home/tv.png";
import wifi from "@/assets/images/home/wifi.png";
import bed from "@/assets/images/home/bed.png";

interface CardProps {
  image: StaticImageData;
  name: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ image, name, price }) => {
  return (
    <div className="}] mr-10 h-[570px] w-[550px] rounded-2xl bg-[rgb(254,255,243)] shadow-xl">
      <Image className="w-full rounded-t-2xl" src={image} alt={name}></Image>
      <h1 className="ml-7 mt-5 dongle-h1-bold">{name}</h1>
      <p className="-mt-8 ml-7 text-[#468EA0]">&#8369;{price}</p>
      <div className="-mt-14 mb-6 ml-[380px] mr-[50px] flex">
        <Image
          className="ml-auto mr-[10px] self-center"
          src={pax}
          alt="pax"
        ></Image>
        <Image
          className="ml-auto mr-[10px] self-center"
          src={bed}
          alt="bed"
        ></Image>

        <Image
          className="ml-auto mr-[10px] self-center"
          src={wifi}
          alt="wifi"
        ></Image>
        <Image
          className="ml-auto mr-auto self-center"
          src={tv}
          alt="tv"
        ></Image>
      </div>
      <div className="-mt-5 w-full">
        <button className="h-[55px] items-center justify-center rounded-b-2xl bg-[#7a4424] text-center leading-none text-white xs:dongle-body-regular lg:w-[550px] lg:pt-[10px] lg:dongle-h3-regular">
          SEE DETAILS &#8594;
        </button>
      </div>
    </div>
  );
};

export default Card;
