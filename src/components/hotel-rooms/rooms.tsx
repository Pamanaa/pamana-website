import { Room } from "@/utils/types";
import AccordionList from "./AccordionList";

interface Props {
  rooms: Room[];
}

const RoomsPage = ({ rooms }: Props) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h1>List of Pamana Rooms</h1>
        <button>Add Room</button>
      </div>
      <AccordionList rooms={rooms} />
    </div>
  );
};

export default RoomsPage;
