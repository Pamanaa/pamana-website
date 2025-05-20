export interface RoomData {
  name: string;
  description: string;
  image: string;
  price: string;
  bed: string;
  capacity: string;
  breakfast: string;
  roomsize: string;
}

export const DeluxeData: RoomData[] = [
  {
    name: "Deluxe Studio Room (Seaview)",
    description: "Deluxe Studio Room (Seaview) room description.",
    image: "/images/rooms/deluxe/DeluxeStudioRoomSeaview.jpg",
    price: "₱ 7,500",
    bed: "2 Double bed",
    capacity: "4-person capacity",
    breakfast: "Breakfast included",
    roomsize: "31 m²"
  },
  {
    name: "Deluxe Studio Room",
    description: "Deluxe Studio Room description.",
    image: "/images/rooms/deluxe/DeluxeStudioRoom.jpg",
    price: "₱ 6,380",
    bed: "2 Double bed",
    capacity: "4-person capacity",
    breakfast: "Breakfast included",
    roomsize: "17 m²"
  },
  {
    name: "Deluxe Triple Room",
    description: "Deluxe Triple room description.",
    image: "/images/rooms/deluxe/DeluxeTripleRoom.jpg",
    price: "₱ 4,950",
    bed: "1 single bed, 1 double bed",
    capacity: "3-person capacity",
    breakfast: "No Breakfast included",
    roomsize: "16 m²"
  },
  {
    name: "Deluxe Double Room (Seaview)",
    description: "Deluxe Double Room (Seaview) description.",
    image: "/images/rooms/deluxe/DeluxeDoubleRoomSeaview.jpg",
    price: "₱ 4,400",
    bed: "1 double bed",
    capacity: "2-person capacity",
    breakfast: "Breakfast included",
    roomsize: "19 m²"
  },
  {
    name: "Deluxe Double Room",
    description: "Deluxe Double Room description.",
    image: "/images/rooms/deluxe/DeluxeDoubleRoom.jpg",
    price: "₱ 3,850",
    bed: "1 queen bed",
    capacity: "2-person capacity",
    breakfast: "No Breakfast included",
    roomsize: "15 m²"
  },
]
