// pages/index.js

import FAQCards from "./FAQCards";

export default function FAQSection() {
  const faqs = [
    {
      question: "Do you accept walk-ins?",
      answer:
        "Lorem ipsum dolor sit amet. Qui doloribus corrupti aut quia veniam sed internos soluta.",
    },
    {
      question: "Is your hotel pet friendly?",
      answer:
        "Lorem ipsum dolor sit amet. Qui doloribus corrupti aut quia veniam sed internos soluta.",
    },
    {
      question: "Do you offer free buffet breakfast?",
      answer:
        "Lorem ipsum dolor sit amet. Qui doloribus corrupti aut quia veniam sed internos soluta. Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <h1 className="text-center font-ephesis text-[70px] text-[#7A4424]">
          Frequently Asked Questions
        </h1>
        <div className="flex justify-around px-40 py-20 dongle-h3-light">
          {faqs.map((faq, index) => (
            <FAQCards key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </>
  );
}
