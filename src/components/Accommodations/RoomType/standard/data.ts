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

export const StandardData: RoomData[] = [
  {
    name: "Studio Room (Seaview)",
    description: "Studio room description.",
    image: "/images/rooms/standard/StudioRoom.jpg",
    price: "₱ 6,800",
    bed: "2 Queen bed",
    capacity: "4-person capacity",
    breakfast: "Breakfast included",
    roomsize: "17 m²"
  },
  {
    name: "Double Room",
    description: "Double room description.",
    image: "/images/rooms/standard/DoubleRoom.jpg",
    price: "₱ 3,630",
    bed: "1 Double bed",
    capacity: "2-person capacity",
    breakfast: "Breakfast included",
    roomsize: "12 m²"
  },
  {
    name: "Standard Double Room",
    description: "Standard Double room description.",
    image: "/images/rooms/standard/StandardDouble.jpg",
    price: "₱ 3,300",
    bed: "1 Double bed",
    capacity: "2-person capacity",
    breakfast: "Breakfast included",
    roomsize: "13 m²"
  },
]
