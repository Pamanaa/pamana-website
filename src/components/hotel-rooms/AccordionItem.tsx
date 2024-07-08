"use client";

import { useState } from "react";
import { Room } from "@/utils/types";
import RoomDetails from "./RoomDetails";
import {
  CaretCircleRight,
  CaretCircleDown,
} from "@phosphor-icons/react/dist/ssr";

interface AccordionItemProps {
  room: Room;
}

const AccordionItem = ({ room }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item ">
      <div
        onClick={toggleAccordion}
        className="accordion-header bg-white outline__standard rounded-2xl py-1 px-4 mb-7 flex flex-row justify-between items-center cursor-pointer"
      >
        {room.name}
        {isOpen ? (
          <CaretCircleDown size={32} />
        ) : (
          <CaretCircleRight size={32} />
        )}
      </div>
      {isOpen && <RoomDetails details={room.details} />}
    </div>
  );
};

export default AccordionItem;
