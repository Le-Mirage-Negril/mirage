import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "Jane Doe",
      email: "tonia@rockhouse.com",
      password: hashSync("123456", 10),
      isAdmin: true,
    },
  ],
  rooms: [
    {
      name: "Room 1",
      description: "This is a room",
      summerRate: 100.0,
      winterRate: 150.0,
      type: "single",
      images: ["https://via.placeholder.com/150"],
      floor: "First",
    },
    {
      name: "Room 2",
      description: "This is a room",
      summerRate: 200,
      type: "double",
      winterRate: 250,
      floor: "Second",
      images: ["https://via.placeholder.com/150"],
    },
    {
      name: "Room 3",
      description: "This is a room",
      summerRate: 300,
      winterRate: 350,
      type: "single",
      floor: "Third",
      images: ["https://via.placeholder.com/150"],
    },
  ],
  bookings: [
    // {
    //   roomId: 1,
    //   name: "John Doe",
    //   checkIn: "2025-03-09T15:08:25Z",
    //   checkOut: "2025-03-30T15:08:25Z",
    //   email: "tom@example.com",
    //   numberOfGuests: 1,
    //   phone: "1234567890",
    // },
  ],
};

export default sampleData;
