import React from "react";

const Wave = () => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/about/wave.png')`,
      }}
    >
      <div className="text-center">
        <h1 className="font-ephesis text-[70px] text-[#7A4424]">About Us</h1>
        <p className="mb-4 px-60 py-6 text-[35px] text-[#77442B] dongle-h3-light">
          Lorem ipsum dolor sit amet. Qui doloribus corrupti aut quia veniam sed
          internos soluta. Aut impedit ipsam qui voluptatem magni et sunt
          aperiam aut dicta distinctio ut iusto nemo sed aspernatur velit. Ab
          fugiat optio quos...
        </p>
      </div>
    </div>
  );
};

export default Wave;
