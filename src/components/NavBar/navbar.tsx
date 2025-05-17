"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { navlinks } from "./navlinks";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = usePathname();
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
    console.log(name);
    if (name === "ACCOMMODATION") {
      router.push("/accommodations");
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30); // true if not at top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`${scrolled ? "bg-opacity-100 shadow-sm" : "bg-opacity-10"} fixed top-0 z-50 w-full bg-white p-2 transition-all duration-300`}
    >
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
                      className={`px-3 pt-1 !text-2xl !font-semibold ${
                        currentPath === link.link
                          ? scrolled
                            ? "border-b-4 border-beige text-brown"
                            : "border-b-4 border-beige/30 text-white"
                          : scrolled
                            ? "text-brown rounded-md  hover:bg-beige"
                            : "text-white rounded-md  hover:bg-beige/30"
                      } ${currentPath === link.link ? "dongle-header-active" : "dongle-header-regular"} `}
                      onClick={() => toggleMenu(link.name)}
                    >
                      {link.name}
                    </button>
                    {openMenu === link.name && (
                      <div
                        className={`absolute left-0 top-full mt-4 min-w-full max-w-full overflow-x-hidden rounded-b-xl pt-1 text-center shadow-lg ${scrolled ? "bg-beige text-brown" : "bg-beige/10 text-white"}`}
                      >
                        {link.sublinks?.map((sublink, index) => (
                          <React.Fragment key={sublink.name}>
                            <Link
                              className={`block w-full px-10 py-1 !text-2xl ${
                                currentPath === sublink.link
                                  ? "dongle-header-active"
                                  : "dongle-header-regular hover:font-bold"
                              }`}
                              href={sublink.link}
                              passHref
                            >
                              {sublink.name}
                            </Link>
                            {link.sublinks &&
                              index !== link.sublinks.length - 1 && (
                                <hr className="my-1 border-gray-100" />
                              )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    onClick={() => toggleMenu(link.name)}
                    href={link.link}
                    className={`px-3 pt-1 !text-2xl !font-semibold transition-all ${
                      currentPath === link.link
                        ? scrolled
                          ? "border-b-4 border-beige text-brown"
                          : "border-b-4 border-beige/30 text-white"
                        : scrolled
                          ? "text-brown rounded-md  hover:bg-beige"
                          : "text-white rounded-md  hover:bg-beige/30"
                    } ${currentPath === link.link ? "dongle-header-active" : "dongle-header-regular"} `}
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
                          {link.sublinks &&
                            index !== link.sublinks.length - 1 && (
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
