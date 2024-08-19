"use client";

import Image, { StaticImageData } from "next/image";
import { IoIosStar } from "react-icons/io";
import { IconContext } from "react-icons";
interface ReviewProps {
  review: string;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="h-[300px] w-[450px] rounded-3xl bg-white shadow-2xl">
      <h1 className="ml-[20px]">"</h1>
      <p className="-mt-11 ml-[40px] mr-[40px] text-center leading-none 2xl:text-[38px]">
        {review}
      </p>
      <h1 className="-mt-5 ml-[365px]">"</h1>
      <div className="-mt-[40px] flex justify-center space-x-2">
        <IconContext.Provider value={{ size: "30px" }}>
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />

          <IoIosStar />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Review;
