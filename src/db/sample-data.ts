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
      description: "Spacious suite with city views and premium amenities",
      summerRate: 100.0,
      winterRate: 150.0,
      price: 199.99,
      type: "single",
      images: ["/room-2.jpg"],
      floor: "First",
      isFeatured: true,
    },
    {
      name: "Room 2",
      description: "Perfect for business travelers with dedicated workspace",
      summerRate: 200,
      type: "double",
      winterRate: 250.0,
      price: 299.99,
      isFeatured: true,
      floor: "Second",
      images: ["/room-2.jpg"],
    },
    {
      name: "Room 3",
      description: "Our finest accommodation with panoramic views",
      summerRate: 300.0,
      winterRate: 350.0,
      price: 499.99,
      isFeatured: true,
      type: "single",
      floor: "Third",
      images: ["/room-1.jpg"],
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
