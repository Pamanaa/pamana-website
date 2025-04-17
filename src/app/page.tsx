"use client";

import Image from "next/image";
import home1 from "@/public/images/home/home1.png";
import wave from "@/public/images/home/waveelement1.png";
import home2 from "@/public/images/home/home2.png";
import home3 from "@/public/images/home/home3.png";
import wave2 from "@/public/images/home/waveelement2.png";
import deals from "@/public/images/home/deals&offers.png";
import aerial from "@/public/images/home/aerial.jpg";
import stock1 from "@/public/images/home/stock1.png";
import stock2 from "@/public/images/home/stock2.png";
import stock3 from "@/public/images/home/stock3.png";
import stock4 from "@/public/images/home/stock4.png";
import room1 from "@/public/images/home/room1.png";
import room2 from "@/public/images/home/room2.png";
import { Button } from "@/components/Button";
import color from "@/public/images/home/beige.jpg";
import tempresto from "@/public/images/home/tempresto.jpg";
import event1 from "@/public/images/home/event1.png";
import event2 from "@/public/images/home/event2.png";
import event3 from "@/public/images/home/event3.png";
import wedding from "@/public/images/home/wedding.jpg";
import { Card, Review, CustomSwiper } from "@/components/home";
import { TITLE_BUTTONS } from "@/components/constants";
import { motion } from "framer-motion";

const images = [
  "/images/gallery/1.png",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
];

export default function Home() {
  const rooms = [
    { image: room1, name: "Deluxe Studio", price: "6,400" },
    { image: room2, name: "Double Room", price: "6,400" },
  ];
  return (
    <>
      <div className="relative grid h-[750px] place-items-center">
        <Image
          src="/images/login/Login.png"
          alt="Pamana Home Image"
          width={500} // Set a width
          height={300} // Set a height
          className="absolute h-full w-full object-cover"
        />

        <Image
          src={wave}
          className="absolute bottom-[-90px] w-full"
          alt="waveelement2"
        />

        <div className="absolute grid place-items-center pb-10">
          <h1
            className="text-white cormorant-sc-t1-bold"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
          >
            PAMANA
          </h1>
          <h2
            className="-mt-11 text-white cormorant-sc-t4-bold"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
          >
            RESORTS AND HOTELS
          </h2>
        </div>
      </div>

      <div className="relative">
        <h1 className="pt-10 text-center ephesis-h1">Welcome to Pamana</h1>
        <p className="px-60 py-4 text-center text-xl">
          A beautiful cove with fine sand perfect for swimming. See right before
          your eyes the perfect sunset at its best. A service synonymous to a
          Filipino hospitality
        </p>
      </div>

      <div className="mt-16 flex justify-center gap-x-8">
        <motion.img
          src={home1.src}
          alt="home1"
          className="self-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        />
        <motion.img
          src={home2.src}
          alt="home2"
          className="self-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        />
        <motion.img
          src={home3.src}
          alt="home3"
          className="self-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        />
      </div>
      <div className="mt-12 flex justify-center space-x-10">
        <Button
          primary
          label={TITLE_BUTTONS.ABOUT_US}
          link="/about-us"
        ></Button>
        <Button
          label={TITLE_BUTTONS.AMENITIES_OFFERS}
          link="/amenities-offers"
        ></Button>
      </div>
      <div className="relative h-[700px] place-items-center">
        <Image
          className="absolute mt-[75px] h-full w-full object-cover"
          src={aerial}
          alt="aerial"
        ></Image>
        <Image
          className="absolute top-[50px] w-full"
          src={wave2}
          alt="wave 2"
        ></Image>
      </div>

      <div className="relative">
        <motion.h1
          className="pt-44 text-center ephesis-h1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          This Month's Exclusive Offers
        </motion.h1>
        <motion.p
          className="px-60 pt-4 text-center text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Avail Pamana Resort and Hotel’s latest deals and offers for this
          month! Experience the best vacation at its finest price.
        </motion.p>
        <div>
          <CustomSwiper propWhichIsArray={images}></CustomSwiper>
        </div>
      </div>
      <div>
        <motion.h1
          className="pt-32 text-center ephesis-h1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Relax in Serenity and Comfort
        </motion.h1>
        <motion.p
          className="px-60 pt-4 text-center text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Feel the exhilaration of being near the legendary MetLife Stadium,
          home to unforgettable events. Our lavish accommodations promise a stay
          beyond compare. 
        </motion.p>
      </div>

      <div className="relative -mt-7 grid h-[750px] place-items-center">
        <Image
          className="absolute bottom-[-50px] h-[400px] w-full"
          src={color}
          alt="bg"
        ></Image>

        <div className="absolute flex gap-x-16">
          {rooms.map((room, index) => (
            <Card
              key={index}
              image={room.image}
              name={room.name}
              price={room.price}
            ></Card>
          ))}
        </div>
      </div>
      <div className="relative flex h-screen items-center justify-center">
        <Image
          className="absolute h-full w-full object-cover brightness-50"
          src={tempresto}
          alt="tempresto"
        ></Image>
        <div className="relative flex-col items-center text-center text-white">
          <motion.h1
            className="text-white ephesis-h1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Savor Culinary Delights
          </motion.h1>
          <motion.p
            className="px-60 pt-4 text-center text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Prepare your palate, for imaginative organic dishes, mouth-watering{" "}
            local favorites, and delicate pastries at Pamana.
          </motion.p>
        </div>
        <div className="absolute mt-[400px]">
          <Button
            primary
            label="SEE RESTAURANTS"
            link="/amenities-offers/restuarants"
          ></Button>
        </div>
      </div>
      <div>
        <h1 className="mt-[100px] text-center ephesis-h1">
          Witness Pamana Events
        </h1>
        <p className="px-60 pt-4 text-center text-xl">
          Prepare your palate, for imaginative organic dishes, mouth-watering
          local favorites, and delicate pastries at Pamana.
        </p>
      </div>
      <div className="my-10 flex h-[500px]">
        {/* <Image
          className="absolute -bottom-11 h-[360px] w-full"
          src={color}
          alt="bg"
        ></Image> */}

        <div className="z-10 flex gap-x-12">
          <motion.img
            src={event1.src}
            alt="event1"
            className="mr-auto mt-[20px] self-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          />
          <motion.img
            src={event2.src}
            alt="event2"
            className="ml-auto mr-auto mt-[10px] w-[600px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          />
          <motion.img
            src={event3.src}
            alt="event3"
            className="ml-auto mt-[20px] w-[450px] self-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
      <div className="relative flex h-screen items-center justify-center">
        <Image
          className="absolute h-full w-full object-cover brightness-50"
          src={wedding}
          alt="wedding"
        ></Image>
        <div className="relative flex-col items-center text-center text-white">
          <motion.h1
            className="text-white ephesis-h1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Celebrate your Special Occasion
          </motion.h1>
          <motion.p
            className="px-60 pt-4 text-center text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Prepare your palate, for imaginative organic dishes, mouth-watering{" "}
            local favorites, and delicate pastries at Pamana.
          </motion.p>
        </div>
        <div className="absolute mt-[400px]">
          <Button
            primary
            label="SEE EVENTS"
            link="/amenities-offers/events"
          ></Button>
        </div>
      </div>

      {/* <div>
        <h1 className="mt-[120px] text-center ephesis-h1">Guest Reviews</h1>
      </div> */}
      {/* <div className="flex justify-center space-x-10">
        <div className="mt-[150px]">
          <Review
            review={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor."
            }
          ></Review>
        </div>
        <div className="mt-[50px]">
          <Review
            review={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor."
            }
          ></Review>
        </div>
        <div className="mt-[150px]">
          <Review
            review={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor."
            }
          ></Review>
        </div>
      </div>
      <div>
        <p className="-mb-5 mt-8 text-center dongle-h2-light">
          Please tell us your experience!
        </p>
      </div>
      <div className="flex h-[150px] flex-col items-center justify-center">
        <Button label="Add a review" link="/about-us"></Button>
      </div> */}
    </>
  );
}
