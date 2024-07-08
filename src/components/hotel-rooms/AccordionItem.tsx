"use client";

import { useState } from "react";
import { Room } from "@/utils/types";
import RoomDetails from "./RoomDetails";

interface AccordionItemProps {
  room: Room;
}

const AccordionItem = ({ room }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div onClick={toggleAccordion} className="accordion-header">
        {room.name}
      </div>
      {isOpen && <RoomDetails details={room.details} />}
    </div>
  );
};

export default AccordionItem;
