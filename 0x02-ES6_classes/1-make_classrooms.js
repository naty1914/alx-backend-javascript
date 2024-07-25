import ClassRoom from './0-classroom';

function initializeRooms() {
  const room0 = new ClassRoom(19);
  const room1 = new ClassRoom(20);
  const room2 = new ClassRoom(34);
  const rooms = [room0, room1, room2];
  return rooms;
}
export default initializeRooms;
