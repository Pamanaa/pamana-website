import React from "react";
import Image from "next/image";
import { sectionsLinks, contactLinks } from "./footerLink";
import Link from "next/link";
import NewsletterInput from "../NewsletterInput";

const Footer = () => {
  return (
    <div className="relative h-[796px] w-full pt-[150px]">
      <Image
        src="/images/bg-footer.png"
        className="absolute inset-0"
        alt="background"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative min-h-[336px] w-full">
        <Image
          src="/images/wave.png"
          className="absolute top-0"
          alt="wave"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-end px-[100px]">
          <Image
            src="/images/logo-footer.png"
            alt="logo"
            width={403}
            height={204}
          />
        </div>
      </div>
      <div className="relative flex w-full justify-between bg-white px-[100px] pb-[50px]">
        <div className="flex w-[406px] flex-col gap-y-2.5">
          <h1 className="uppercase leading-none text-brown dongle-h1-bold">
            Newsletter
          </h1>
          <div className="flex flex-col gap-y-5">
            <p className="leading-none text-light-brown dongle-h3-regular">
              Get the latest news and updates on Pamana Resort
            </p>
            <NewsletterInput />
          </div>
        </div>
        <div className="flex w-[250px] flex-col gap-y-2.5">
          <h1 className="uppercase leading-none text-brown dongle-h1-bold">
            Sections
          </h1>
          {sectionsLinks.map((section, index) => (
            <Link
              key={index}
              href={section.link}
              className="leading-none text-light-brown dongle-h3-regular"
            >
              {section.text}
            </Link>
          ))}
        </div>
        <div className="flex w-[406px] flex-col gap-y-2.5">
          <h1 className="uppercase leading-none text-brown dongle-h1-bold">
            Contact Us
          </h1>
          {contactLinks.map((contact, index) => (
            <div key={index} className="flex items-center gap-x-2.5">
              <contact.icon size={24} className="text-light-brown" />
              <Link
                href={contact.link}
                target="_blank"
                className="leading-none text-light-brown dongle-h3-regular"
              >
                {contact.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
