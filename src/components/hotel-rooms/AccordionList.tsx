import { Room } from "@/utils/types";
import AccordionItem from "./AccordionItem";

interface AccordionListProps {
  rooms: Room[];
}

const AccordionList = ({ rooms }: AccordionListProps) => {
  return (
    <div className="accordion-list">
      {rooms.map((room) => (
        <AccordionItem key={room.id} room={room} />
      ))}
    </div>
  );
};

export default AccordionList;
