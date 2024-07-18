import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  title: string;
  body: string;
  link: string;
};

const AmenitiesCard = ({ src, title, body, link }: Props) => {
  //TODO: replace body and link with lao-muang-dong font style
  return (
    <>
      <div className="flex w-full flex-col gap-y-10">
        <div className="relative h-[467px] w-full">
          <Image
            src={src}
            className="rounded-xl"
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col">
            <h1 className="text-brown dongle-h2-regular">{title}</h1>
            <p className="leading-tight text-brown dongle-h3-light">{body}</p>
          </div>
          <Link
            href={link}
            className="hover: text-aqua underline underline-offset-8 dongle-h3-light hover:dongle-h3-regular"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </>
  );
};

export default AmenitiesCard;
