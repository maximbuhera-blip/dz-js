import { getAvailableRooms, findRoom, bookRoom } from "./booking.js";

console.log("Доступні номери:", getAvailableRooms());
console.log("Номер з id = 4:", findRoom(4));

console.log("Бронювання номера 1 на 3 ночі:", bookRoom(1, 3));
console.log("Бронювання номера 2 на 5 ночей:", bookRoom(2, 5));
console.log("Бронювання номера 3 на 2 ночі:", bookRoom(3, 2));

console.log("Доступні номери після бронювання:", getAvailableRooms());