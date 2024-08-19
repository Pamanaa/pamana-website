import Image from "next/image";
import pamanahomeimg from "@/assets/images/Login.png";
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
import { Card, Review } from "@/components/home";

export default function Home() {
  const rooms = [
    { image: room1, name: "Deluxe Studio", price: "6,400" },
    { image: room2, name: "Double Room", price: "6,400" },
  ];
  return (
    <>
      <div className="relative grid h-[750px] place-items-center">
        <Image
          src={pamanahomeimg}
          alt="Pamana Home Image"
          className="absolute h-full w-full object-cover"
        />

        <Image
          src={wave}
          className="absolute bottom-[-90px] w-full"
          alt="waveelement2"
        />
        <div className="absolute grid place-items-center">
          <h1 className="text-white cormorant-sc-t1-bold">PAMANA</h1>
          <h2 className="-mt-11 text-white cormorant-sc-t4-bold">
            RESORTS AND HOTELS
          </h2>
        </div>
      </div>

      <div className="relative">
        <h1 className="text-center ephesis-h1">Welcome to Pamana</h1>
        <p className="text-center dongle-h2-light">
          A beautiful cove with fine sand perfect for swimming. See right
        </p>
        <p className="-mt-7 text-center dongle-h2-light">
          before your eyes the perfect sunset at its best. A service synonymous
          to
        </p>
        <p className="-mt-7 mb-5 text-center dongle-h2-light">
          a Filipino hospitality
        </p>
      </div>

      <div className="mt-15 flex">
        <Image src={home1} alt="home1" className="ml-auto self-center" />
        <Image src={home2} alt="home2" className="ml-auto mr-auto" />
        <Image src={home3} alt="home3" className="mr-auto self-center" />
      </div>
      <div className="mt-8 flex justify-center space-x-10">
        <Button primary label="ABOUT US" link=""></Button>
        <Button label="AMENITIES & OFFERS" link=""></Button>
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
        <h1 className="mt-[120px] text-center ephesis-h1">
          This Month&apos;s Exclusive Offers
        </h1>
        <p className="text-center dongle-h2-light">
          Avail Pamana Resort and Hotel’s latest deals and offers for this
          month!
        </p>
        <p className="-mt-7 text-center dongle-h2-light">
          Experience the best vacation at its finest price.
        </p>
      </div>
      <div className="mt-7 flex">
        <Image src={stock4} alt="stock4" className="self-center"></Image>
        <Image
          src={stock2}
          alt="stock2"
          className="ml-auto mr-auto self-center"
        ></Image>
        <Image
          src={deals}
          alt="deals"
          className="ml-auto mr-auto self-center"
        ></Image>
        <Image
          src={stock1}
          alt="stock1"
          className="ml-auto mr-auto self-center"
        ></Image>
        <Image src={stock3} alt="stock3" className="self-center"></Image>
      </div>
      <div>
        <h1 className="mt-[120px] text-center ephesis-h1">
          Relax in Serenity and Comfort
        </h1>
        <p className="text-center dongle-h2-light">
          Feel the exhilaration of being near the legendary MetLife Stadium,
          home to
        </p>
        <p className="-mt-7 text-center dongle-h2-light">
          unforgettable events. Our lavish accommodations promise a stay beyond
          compare. 
        </p>
      </div>
      <div className="relative -mt-7 grid h-[750px] place-items-center">
        <Image
          className="absolute bottom-[-50px] h-[400px] w-full"
          src={color}
          alt="bg"
        ></Image>

        <div className="absolute flex space-x-8">
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
          <h1 className="text-white ephesis-h1">Savor Culinary Delights</h1>
          <p className="text-white dongle-h2-light">
            Prepare your palate, for imaginative organic dishes, mouth-watering{" "}
          </p>
          <p className="text-white dongle-h2-light">
            local favorites, and delicate pastries at Pamana.
          </p>
        </div>
        <div className="absolute mt-[400px]">
          <Button primary label="SEE RESTAURANTS"></Button>
        </div>
      </div>
      <div>
        <h1 className="mt-[100px] text-center ephesis-h1">
          Witness Pamana Events
        </h1>
        <p className="text-center dongle-h2-light">
          Prepare your palate, for imaginative organic dishes, mouth-watering{" "}
        </p>
        <p className="-mt-7 text-center dongle-h2-light">
          local favorites, and delicate pastries at Pamana.
        </p>
      </div>
      <div className="relative mt-3 h-[500px]">
        <Image
          className="absolute -bottom-11 h-[360px] w-full"
          src={color}
          alt="bg"
        ></Image>

        <div className="relative z-10 flex">
          <Image
            className="mr-auto mt-[20px] self-center"
            src={event1}
            alt="event1"
          ></Image>
          <Image
            className="ml-auto mr-auto mt-[10px] w-[600px]"
            src={event2}
            alt="event2"
          ></Image>
          <Image
            className="ml-auto mt-[20px] w-[450px] self-center"
            src={event3}
            alt="event3"
          ></Image>
        </div>
      </div>
      <div className="relative flex h-screen items-center justify-center">
        <Image
          className="absolute h-full w-full object-cover brightness-50"
          src={wedding}
          alt="wedding"
        ></Image>
        <div className="relative flex-col items-center text-center text-white">
          <h1 className="text-white ephesis-h1">
            Celebrate your Special Occasion
          </h1>
          <p className="text-white dongle-h2-light">
            Prepare your palate, for imaginative organic dishes, mouth-watering{" "}
          </p>
          <p className="text-white dongle-h2-light">
            local favorites, and delicate pastries at Pamana.
          </p>
        </div>
        <div className="absolute mt-[400px]">
          <Button primary label="SEE EVENTS"></Button>
        </div>
      </div>

      <div>
        <h1 className="mt-[120px] text-center ephesis-h1">Guest Reviews</h1>
      </div>
      <div className="flex justify-center space-x-10">
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
        <Button label="Add a review"></Button>
      </div>
    </>
  );
}
