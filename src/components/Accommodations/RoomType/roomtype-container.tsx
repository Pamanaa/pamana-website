"use client";
import Image from "next/image";
import BedIcon from "@mui/icons-material/Bed";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import PeopleIcon from "@mui/icons-material/People";
import RestaurantIcon from "@mui/icons-material/Restaurant";

// interface RoomFeature {
//   icon: React.ReactNode;
//   label: string;
// }

interface RoomTypeContainerProps {
  name: string;
  image: string;
  description: string;
  price: string;
  bed: string;
  capacity: string;
  breakfast: string;
  roomsize: string;
}

const RoomTypeContainer = ({
  name,
  image,
  description,
  price,
  bed,
  capacity,
  breakfast,
  roomsize,
}: RoomTypeContainerProps) => {
  return (
    <div className="px-10 py-8">
      <div className="grid grid-cols-2 gap-4">
        {/* Description and Features */}
        <div className="flex flex-col items-center justify-center">
          <Image src={image} alt={name} width={400} height={400} />
          <div className="mt-12 grid w-full grid-cols-2 gap-x-10 gap-y-8">
            <div className="flex flex-col items-center text-center text-lightbrown">
              <BedIcon style={{ fontSize: 40 }} />
              <h1 className="dongle-h3-light">{bed}</h1>
            </div>
            <div className="flex flex-col items-center text-center text-lightbrown">
              <RestaurantIcon style={{ fontSize: 40 }} />
              <h1 className="dongle-h3-light">{breakfast}</h1>
            </div>
            <div className="flex flex-col items-center text-center text-lightbrown">
              <PeopleIcon style={{ fontSize: 40 }} />
              <h1 className="dongle-h3-light">{capacity}</h1>
            </div>
            <div className="flex flex-col items-center text-center text-lightbrown">
              <AspectRatioIcon style={{ fontSize: 40 }} />
              <h1 className="dongle-h3-light">{roomsize}</h1>
            </div>
          </div>
        </div>

        {/* Booking Box */}
        <div className="flex flex-col rounded-xl border border-brown bg-transparent p-6 shadow-md">
          <h2 className="mb-4 text-3xl text-brown ephesis-h2">
            Reserve {name}
          </h2>
          <hr className="mb-6 border-brown" />
          <div className="mb-6 flex flex-col">
            <div className="mb-2 flex flex-row items-baseline gap-1">
              <span className="dongle-name-regular text-5xl text-brown">
                {price}
              </span>
              <span className="text-brown dongle-h2-light">/night</span>
            </div>
            <div className="text-brown dongle-h3-light">{description}</div>
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
  );
};

export default RoomTypeContainer;
