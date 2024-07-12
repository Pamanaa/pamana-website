import { Links } from "@/utils/types";

export const navlinks: Links[] = [
  {
    name: "HOME",
    link: "/",
    submenu: false,
  },
  {
    name: "ABOUT US",
    link: "/about-us",
    submenu: false,
  },
  {
    name: "GALLERY",
    link: "/gallery",
    submenu: false,
  },
  {
    name: "ACCOMMODATION",
    link: "/accommodations",
    submenu: true,
    sublinks: [
      {
        name: "CABANAS",
        link: "/accommodations/cabanas",
      },
      {
        name: "SINGLE",
        link: "/accommodations/single",
      },
      {
        name: "DELUXE",
        link: "/accommodations/deluxe",
      },
    ],
  },
  {
    name: "AMENITIES & OFFERS",
    link: "/amenities-offers",
    submenu: true,
    sublinks: [
      {
        name: "AMENITIES",
        link: "/amenities-offers/amenities",
      },
      {
        name: "OFFERS",
        link: "/amenities-offers/offers",
      },
      {
        name: "EVENTS",
        link: "/amenities-offers/events",
      },
      {
        name: "PROMOS",
        link: "/amenities-offers/promos",
      },
      {
        name: "RESTAURANTS",
        link: "/amenities-offers/restaurants",
      },
    ],
  },
];
