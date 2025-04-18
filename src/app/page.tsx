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

      <div className="mt-16 flex">
        <Image
          src={DefaultHomeImgs[0]}
          alt="home1"
          width={0}
          height={0}
          sizes="auto"
          className="ml-auto h-auto w-auto self-center"
        />
        <Image
          src={DefaultHomeImgs[1]}
          alt="home2"
          width={0}
          height={0}
          sizes="auto"
          className="ml-auto mr-auto h-auto w-auto"
        />
        <Image
          src={DefaultHomeImgs[2]}
          alt="home3"
          width={0}
          height={0}
          sizes="auto"
          className="mr-auto h-auto w-auto self-center"
        />
      </div>

      <div className="mt-8 flex justify-center space-x-10">
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
      <div>
        <CustomSwiper propWhichIsArray={ExclusiveOffers}></CustomSwiper>
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
          className="absolute bottom-[-50px] h-[400px] w-full object-cover"
          src={Color[0]}
          width={0}
          height={0}
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
          src={Tempresto[0]}
          alt="tempresto"
          width={0}
          height={0}
          sizes="auto"
          className="absolute h-screen w-screen brightness-50"
        />
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
        <p className="text-center dongle-h2-light">
          Prepare your palate, for imaginative organic dishes, mouth-watering{" "}
        </p>
        <p className="-mt-7 text-center dongle-h2-light">
          local favorites, and delicate pastries at Pamana.
        </p>
      </div>
      <div className="relative mt-3 h-[500px]">
        <Image
          src={Color[0]}
          alt="bg"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute -bottom-11 h-[360px] w-full object-cover"
        />

        <div className="relative z-10 flex">
          <Image
            src={PamanaEvents[0]}
            alt="event1"
            width={0}
            height={0}
            sizes="auto"
            className="mr-auto mt-[20px] h-auto w-auto max-w-full self-center"
          />
          <Image
            src={PamanaEvents[1]}
            alt="event2"
            width={0}
            height={0}
            sizes="auto"
            className="ml-auto mr-auto mt-[10px] h-auto w-[600px]"
          />
          <Image
            src={PamanaEvents[2]}
            alt="event3"
            width={0}
            height={0}
            sizes="auto"
            className="ml-auto mt-[20px] h-auto w-[450px] self-center"
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
