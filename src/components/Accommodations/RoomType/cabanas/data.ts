export interface RoomData {
  name: string;
  description: string;
  image: string;
  price: string;
}

export const CabanaData: RoomData[] = [
  {
    name: "CABANAS",
    description: "A cozy beachfront cabana with stunning ocean views and private porch.",
    image: "/images/rooms/cabana.png",
    price: "₱ 4,350",
  },
]