"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { Card } from "@/components/home";
import { CustomSwiper } from "@/components/home";
import { TITLE_BUTTONS } from "@/utils/constants";
import {
  Aerial,
  DefaultHomeImgs,
  ExclusiveOffers,
  PamanaEvents,
  WaveImgs,
  RoomImgs,
  Color,
  Tempresto,
  Wedding,
} from "@/utils/images";
import { motion } from "framer-motion";

export default function Home() {
  const rooms = [
    { image: RoomImgs[0], name: "Deluxe Studio", price: "6,400" },
    { image: RoomImgs[1], name: "Double Room", price: "6,400" },
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
          src={WaveImgs[0]}
          alt="waveelement2"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute bottom-[-90px] h-auto w-full"
          priority
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
          src={DefaultHomeImgs[0]}
          alt="home1"
          className="self-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        />
        <motion.img
          src={DefaultHomeImgs[1]}
          alt="home2"
          className="self-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        />
        <motion.img
          src={DefaultHomeImgs[2]}
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
      <div className="relative grid h-[700px] place-items-center">
        {/* Background Aerial Image */}
        <Image
          src={Aerial[0]}
          alt="aerial"
          fill
          className="absolute mt-[75px] object-cover"
          priority
        />

        {/* Wave overlay */}
        <Image
          src={WaveImgs[1]}
          alt="wave 2"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-[50px] h-auto w-full"
        />
      </div>

      <div className="relative">
        <motion.h1
          className="pt-44 text-center ephesis-h1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          This Month&apos;s Exclusive Offers
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
        <div className="mt-12">
          <CustomSwiper propWhichIsArray={ExclusiveOffers}></CustomSwiper>
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
        {/* wala sa figma */}
        {/* <Image
          className="absolute h-[600px] w-full object-cover"
          src={Color[0]}
          width={0}
          height={0}
          alt="bg"
        ></Image> */}

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
          src={Tempresto[0]}
          alt="tempresto"
          width={0}
          height={0}
          sizes="auto"
          className="absolute h-screen w-screen brightness-50"
        />
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

        <div className="z-10 flex gap-x-12 w-full">
          <motion.img
            src={PamanaEvents[0]}
            alt="event1"
            className="self-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          />
          <motion.img
            src={PamanaEvents[1]}
            alt="event2"
            className="w-[600px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          />
          <motion.img
            src={PamanaEvents[2]}
            alt="event3"
            className="self-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
      <div className="relative flex h-screen items-center justify-center">
        <Image
          src={Wedding[0]}
          alt="wedding"
          width={0}
          height={0}
          sizes="auto"
          className="absolute h-screen w-screen brightness-50"
        />
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

      {/* TODO: Make this a component */}
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
