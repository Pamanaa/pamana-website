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

export const CabanaData: RoomData[] = [
  {
    name: "Cabana",
    description: "A cozy beachfront cabana with stunning ocean views and private porch.",
    image: "/images/rooms/cabana.png",
    price: "₱ 1,000",
    bed: "No bed",
    capacity: "10-person capacity",
    breakfast: "No breakfast included",
    roomsize: ""
  },
]