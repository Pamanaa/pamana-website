import { AdminButtonProps } from "@/utils/types";
import clsx from "clsx";
import { PlusCircle } from "@phosphor-icons/react/dist/ssr";

export const AdminButton: React.FC<AdminButtonProps> = ({ label, icon }) => {
  return (
    <button className="h-12 min-w-40 text-white bg-brown flex flex-row justify-center items-center gap-3 rounded-2xl py-4">
      <h1 className="dongle-body-bold">{label}</h1>
      {icon && <PlusCircle className="w-7 h-7" />}
    </button>
  );
};
