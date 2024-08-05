import React from "react";
import { Video, HorizontalRuleStar } from "@/components";
import { AmenitiesCard, amenitiesCardData } from "@/components/AmenitiesCard";
import Image from "next/image";

const Amenities = () => {
  // TODO: replace the video link with proper video
  // TODO: make the leaves responsive?
  return (
    <>
      <Video
        src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
        controls={true}
        autoplay={false}
        loop={false}
        muted={false}
      />
      <div className="relative flex h-[551px] items-center justify-center">
        <Image
          src="/images/left-leaf.png"
          alt="Left Leaf"
          className="absolute left-0"
          height={467}
          width={300}
        />
        <div className="flex w-[706px] flex-col items-center gap-y-[39px]">
          <h1 className="text-brown ephesis-h1">Amenities</h1>
          <HorizontalRuleStar />
          <p className="text-center leading-none text-brown dongle-h3-light">
            Prepare your palate, for imaginative organic dishes, mouth-watering
            local favorites, and delicate pastries at Pamana. Buffet spreads for
            breakfast, lunch, and dinner.
          </p>
        </div>
        <Image
          src="/images/right-leaf.png"
          alt="Right Leaf"
          className="absolute right-0"
          height={467}
          width={300}
        />
      </div>
      <div className="flex gap-x-10 px-[140px] py-[70px]">
        {amenitiesCardData.map(amenity => (
          <AmenitiesCard
            key={amenity.index}
            src={amenity.src}
            title={amenity.title}
            body={amenity.body}
            link={amenity.link}
          />
        ))}
      </div>
    </>
  );
};

export default Amenities;
