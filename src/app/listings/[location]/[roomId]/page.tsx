import React from 'react';
import { useParams } from 'next/navigation';

const RoomDetailsPage: React.FC = () => {
  const params = useParams();
  const location = params.location as string;
  const roomId = params.roomId as string;

  return (
    <div>
      <h1>Room Details</h1>
      <p>Location: {location}</p>
      <p>Room ID: {roomId}</p>
    </div>
  );
};

export default RoomDetailsPage;