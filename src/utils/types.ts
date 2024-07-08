export interface ButtonProps {
  primary?: boolean;
  label: string;
}

export interface DatabaseUserAttributes {
  email: string;
  firstName: string;
}

export interface RoomDetails{
  capacity: number;
  rate: number;
  bedDetails: string;
  airconditioned: boolean;
  television: boolean;
  wifi: boolean;
  images?: string[];
}

export interface Room{
  id: string;
  name: string;
  details: RoomDetails;
}