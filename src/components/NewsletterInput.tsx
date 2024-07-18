import React from "react";
import { FiSend } from "react-icons/fi";

const NewsletterInput = () => {
  // TODO: change the placeholder font style into dongle-h3-light
  // TODO: make this component dynamic
  return (
    <div className="relative flex w-full max-w-md items-center">
      <input
        type="email"
        className="w-full rounded-lg border-2 border-brown px-5 text-brown placeholder-light-brown dongle-h3-regular focus:outline-none"
        placeholder="Enter your email..."
      />
      <button className="absolute right-0 top-0 flex h-full w-14 items-center justify-center rounded-r-lg bg-brown text-white">
        <FiSend size={24} />
      </button>
    </div>
  );
};

export default NewsletterInput;
