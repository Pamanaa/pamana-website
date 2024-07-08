import { Room } from "@/utils/types";

export const fetchRooms = async (): Promise<Room[]> => {
    return [
      {
        id: "1",
        name: "Standard Double Room",
        details: {
          capacity: 2,
          rate: 100,
          bedDetails: "1 Double Bed",
          images: ["/images/standard-double.jpg"],
          airconditioned: false,
          television: false,
          wifi: false,
        },
      },
      {
        id: "2",
        name: "Deluxe Double Room",
        details: {
          capacity: 3,
          rate: 150,
          bedDetails: "1 King Bed",
          images: ["/images/deluxe-double.jpg"],
          airconditioned: false,
          television: false,
          wifi: false,
        },
      },
    ];
  };