import { Room } from "@/utils/types";
import AccordionList from "./AccordionList";
import { AdminButton } from "../buttons/adminbutton";
import { InfoButton } from "../buttons/infobutton";

interface Props {
  rooms: Room[];
}

const RoomsPage = ({ rooms }: Props) => {
  return (
    <div className="bg-[#FEFFF3] mt-6 py-12 px-11 rounded-3xl outline__standard">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="dongle-h2-bold">List of Pamana Rooms</h1>
        <AdminButton icon label="ADD ROOM" />
      </div>
      <AccordionList rooms={rooms} />
    </div>
  );
};

export default RoomsPage;
