import { InfoButtonProps } from "@/utils/types";
import clsx from "clsx";

export const InfoButton: React.FC<InfoButtonProps> = ({ primary, label }) => {
  return (
    <button
      className={clsx(
        "lg:px-[20px] lg:pt-[10px] xs:px-[10px] xs:py-[5px]  lg:w-[300px] xs:w-[150px] h-[60px] rounded-lg flex items-center text-center justify-center text-light lg:dongle-h3-regular xs:dongle-body-regular leading-none",
        primary ? "bg-[#468EA0]" : "bg-green"
      )}
    >
      {label}
    </button>
  );
};
