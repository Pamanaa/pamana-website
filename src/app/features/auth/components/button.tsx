import clsx from "clsx";

interface ButtonProps {
  primary?: boolean;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ primary, label }) => {
  return (
    <button
      className={clsx(
        "flex h-[60px] items-center justify-center rounded-lg text-center leading-none text-light xs:w-[150px] xs:px-[10px] xs:py-[5px] xs:dongle-body-regular lg:w-[300px] lg:px-[20px] lg:pt-[10px] lg:dongle-h3-regular",
        primary ? "bg-[#468EA0]" : "bg-green"
      )}
    >
      {label}
    </button>
  );
};
