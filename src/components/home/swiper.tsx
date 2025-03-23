"use client";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import Image, { StaticImageData } from "next/image";

const images = [
  "/images/gallery/1.png",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
];

interface SwiperProps {
  image: StaticImageData;
}

const CustomSwiper: React.FC<SwiperProps> = ({ image }) => {
  return (
    <>
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect={"coverflow"}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        pagination={true}
        centeredSlides={true}
        grabCursor={true}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              className="h-72 max-h-[600px] w-72 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomSwiper;
