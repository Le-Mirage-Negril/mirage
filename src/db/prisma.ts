import "dotenv/config";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

// https://neon.tech/docs/guides/prisma
// Sets up WebSocket connections, which enables Neon to use WebSocket communication.
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

// Creates a new connection pool using the provided connection string, allowing multiple concurrent connections.
const pool = new Pool({ connectionString });

// Instantiates the Prisma adapter using the Neon connection pool to handle the connection between Prisma and Neon.
const adapter = new PrismaNeon(pool);

export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    room: {
      winterRate: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        compute(room: any) {
          return room?.winterRate?.toString();
        },
      },
      summerRate: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        compute(room: any) {
          return room?.summerRate?.toString();
        },
      },
      price: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        compute(room: any) {
          return room?.price?.toString();
        },
      },
    },
  },
});
