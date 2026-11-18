import { rooms } from "./rooms.js";

export function getAvailableRooms() {
  return rooms.filter((room) => room.available);
}

export function findRoom(id) {
  return rooms.find((room) => room.id === id);
}

export function bookRoom(id, nights) {
  const room = findRoom(id);

  if (!room) {
    return "Номер не знайдено";
  }

  if (!room.available) {
    return "Номер недоступний";
  }

  if (!Number.isInteger(nights) || nights < 1) {
    return "Кількість ночей має бути цілим числом від 1";
  }

  let totalPrice = room.price * nights;

  if (nights >= 5) {
    totalPrice *= 0.85;
  }

  room.available = false;
  return `${totalPrice} грн`;
}