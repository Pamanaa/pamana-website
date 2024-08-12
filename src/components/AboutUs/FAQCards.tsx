// components/FAQCard.tsx

import React from "react";
import styles from "./FAQCards.module.css";

interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCards: React.FC<FAQCardProps> = ({ question, answer }) => {
  return (
    <>
      <div className="relative">
        <div className="mx-auto min-h-[450px] max-w-[375px] rounded-3xl border-2 border-[#8DBC83] bg-white p-6 text-center">
          <div className="absolute -top-8 left-1/2 flex h-20 w-20 -translate-x-1/2 transform items-center justify-center rounded-full bg-[#8DBC83] text-[70px] font-extrabold text-white">
            <span>?</span>
          </div>
          <div className="mt-8">
            <h3 className="mb-2 mt-4 text-[45px] font-bold leading-none text-[#7A4424]">
              {question}
            </h3>
            <p className="text-[30px] leading-tight text-[#77442B]">{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQCards;
