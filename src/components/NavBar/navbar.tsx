"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/Logo.png";
import Link from "next/link";
import { navlinks } from "./navlinks"; // Adjust the path based on your project structure

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <nav className="bg-white p-2">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Pamana" width={50} height={50} />
            </Link>
          </div>
          <div className="hidden items-center space-x-4 md:flex">
            {navlinks.map(link => (
              <div key={link.name} className="relative">
                {link.submenu ? (
                  <div>
                    <button
                      className="rounded-md px-3 py-2 text-brown dongle-header-active focus:outline-none"
                      onClick={() => toggleMenu(link.name)}
                    >
                      {link.name}
                    </button>
                    {openMenu === link.name && (
                      <div className="absolute left-0 top-full mt-2 rounded-md bg-white px-3 py-1 shadow-lg">
                        {link.sublinks?.map(sublink => (
                          <Link
                            className="block py-1 text-brown dongle-header-active"
                            key={sublink.name}
                            href={sublink.link}
                            passHref
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    className="rounded-md px-3 py-2 dongle-header-active"
                    href={link.link}
                    passHref
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => toggleMenu("mobileMenu")}
              className="text-brown focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {openMenu === "mobileMenu" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Responsive Menu */}
        {openMenu === "mobileMenu" && (
          <div className="mt-2 md:hidden">
            {navlinks.map(link => (
              <div key={link.name} className="py-1">
                {link.submenu ? (
                  <div className="ml-4">
                    <p className="text-brown dongle-header-regular">
                      {link.name}
                    </p>
                    <div className="mt-1">
                      {link.sublinks?.map(sublink => (
                        <Link
                          className="block py-1 text-brown dongle-header-regular"
                          key={sublink.name}
                          href={sublink.link}
                          passHref
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    className="block py-1 text-brown dongle-header-regular"
                    key={link.name}
                    href={link.link}
                    passHref
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
