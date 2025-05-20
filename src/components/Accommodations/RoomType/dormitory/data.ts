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

export const DormitoryData: RoomData[] = [
  {
    name: "Dormitory (10pax)",
    description: "Dormitory (10pax) description.",
    image: "/images/rooms/dormitory/Dormitory(10pax).jpg",
    price: "₱ 14,850",
    bed: "5 bunk beds",
    capacity: "10-person capacity",
    breakfast: "Breakfast included",
    roomsize: "44 m²"
  },
  {
    name: "Dormitory (6pax)",
    description: "Dormitory (6pax) description.",
    image: "/images/rooms/dormitory/Dormitory(6pax)2.jpg",
    price: "₱ 9,020",
    bed: "3 bunk beds",
    capacity: "6-person capacity",
    breakfast: "Breakfast included",
    roomsize: "26 m²"
  },
  {
    name: "Bahay Kubo",
    description: "Bahay Kubo description.",
    image: "/images/rooms/dormitory/BahayKubo.jpg",
    price: "₱ 8,250",
    bed: "2 bunk beds",
    capacity: "8-person capacity",
    breakfast: "Breakfast included",
    roomsize: "23 m²"
  },
]
