"use client";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
  images: {
    src: string;
    title: string;
  }[];
};

const Carousel = ({ images }: Props) => {
  // TODO: update the functionality of this component according to the design in figma
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-[467px] w-full flex-shrink-0">
            <Image
              src={image.src}
              alt={image.title}
              layout="fill"
              objectFit="cover"
              className="h-full w-full"
            />
          </div>
        ))}
      </div>
      <div
        onClick={goToPrevious}
        className="absolute inset-y-0 left-0 w-1/4 cursor-pointer"
      />
      <div
        onClick={goToNext}
        className="absolute inset-y-0 right-0 w-1/4 cursor-pointer"
      />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full border-2 border-white ${currentIndex === index ? "bg-white" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
