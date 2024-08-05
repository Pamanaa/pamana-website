"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { navlinks } from "./navlinks";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const currentPath = usePathname();

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
    console.log(name);
    if (name === "ACCOMMODATION") {
      router.push("/accommodations");
    }
  };

  return (
    <nav className="bg-white p-2 shadow-md">
      <div className="max-w-8xl px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo/Logo.png"
                alt="Pamana"
                width={64}
                height={64}
              />
            </Link>
          </div>
          <div className="hidden items-center space-x-4 md:flex">
            {navlinks.map(link => (
              <div key={link.name} className="relative">
                {link.submenu ? (
                  <div>
                    <button
                      className={`rounded-md px-3 py-2 text-brown ${
                        currentPath === link.link
                          ? "dongle-header-active"
                          : "dongle-header-regular hover:bg-beige"
                      }`}
                      onClick={() => toggleMenu(link.name)}
                    >
                      {link.name}
                    </button>
                    {openMenu === link.name && (
                      <div className="absolute left-0 top-full mt-2 rounded-b-xl bg-white pt-1 text-center shadow-lg">
                        {link.sublinks?.map((sublink, index) => (
                          <React.Fragment key={sublink.name}>
                            <Link
                              className={`block w-full px-10 py-1 text-brown ${
                                currentPath === sublink.link
                                  ? "dongle-header-active"
                                  : "dongle-header-regular hover:bg-beige"
                              }`}
                              href={sublink.link}
                              passHref
                            >
                              {sublink.name}
                            </Link>
                            {index !== link.sublinks.length - 1 && (
                              <hr className="my-1 border-gray-100" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    className={`rounded-md px-3 py-2 transition-all ${
                      currentPath === link.link
                        ? "dongle-header-active"
                        : "dongle-header-regular hover:bg-beige"
                    }`}
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
                  <div className="">
                    <p className="dongle-body-regular">{link.name}</p>
                    <div className="mt-1">
                      {link.sublinks?.map((sublink, index) => (
                        <React.Fragment key={sublink.name}>
                          <Link
                            className={`ml-4 block rounded-xl px-2 py-1 text-brown ${
                              currentPath === sublink.link
                                ? "dongle-body-bold"
                                : "dongle-body-regular hover:bg-beige"
                            }`}
                            href={sublink.link}
                            passHref
                          >
                            {sublink.name}
                          </Link>
                          {index !== link.sublinks.length - 1 && (
                            <hr className="my-1 border-gray-100" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    className={`block rounded-xl px-2 py-1 dongle-body-regular ${
                      currentPath === link.link
                        ? "dongle-body-bold"
                        : "dongle-body-regular hover:bg-beige"
                    }`}
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
