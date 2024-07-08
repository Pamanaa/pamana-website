import { RoomDetails as RoomDetailsType } from "@/utils/types";
import EditButton from "./EditButton";

interface RoomDetailsProps {
  details: RoomDetailsType;
}

const RoomDetails = ({ details }: RoomDetailsProps) => {
  return (
    <div className="room-details">
      <div className="room-details-header">
        <h3>Room Details</h3>
        <EditButton />
      </div>
      <div className="room-details-body">
        <p>Capacity: {details.capacity}</p>
        <p>Rate: ${details.rate}</p>
        <p>Bed Details: {details.bedDetails}</p>
      </div>
      <EditButton />
    </div>
  );
};

export default RoomDetails;
