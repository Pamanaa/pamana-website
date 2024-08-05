import React from "react";
import { CiStar } from "react-icons/ci";

const HorizontalRuleStar = () => {
  return (
    <>
      <div className="flex w-full items-center gap-x-2.5">
        <hr className="flex-grow border-brown" />
        <CiStar className="text-brown" size={30} />
        <CiStar className="text-brown" size={30} />
        <CiStar className="text-brown" size={30} />
        <hr className="flex-grow border-brown" />
      </div>
    </>
  );
};

export default HorizontalRuleStar;
