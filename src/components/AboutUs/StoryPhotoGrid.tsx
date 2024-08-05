import React from "react";
import Image from "next/image";
import image1 from "/public/images/about/About_Pamana-Story-1.png";
import image2 from "/public/images/about/About_Pamana-Story-2.png";
import image3 from "/public/images/about/About_Pamana-Story-3.png";

const StoryPhotoGrid = () => {
  return (
    <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3">
      <Image
        src={image1}
        alt="Description of Image 1"
        className="h-auto max-w-full rounded-3xl object-cover"
      />
      <Image
        src={image2}
        alt="Description of Image 2"
        className="-mt-3 h-80 max-w-full rounded-3xl object-cover"
      />
      <Image
        src={image3}
        alt="Description of Image 3"
        className="h-auto max-w-full rounded-3xl object-cover"
      />
    </div>
  );
};

export default StoryPhotoGrid;
