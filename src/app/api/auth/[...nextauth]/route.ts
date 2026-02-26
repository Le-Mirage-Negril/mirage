// import { handlers } from "@/auth";

const handlers = {
  // eslint-disable-next-line
  GET: async (_: any) => {
    return new Response("GET request received");
  },
  POST: async (req: Request) => {
    const { username, password } = await req.json();
    // Here you would normally validate the credentials and create a session
    if (username === "admin" && password === "password") {
      return new Response("Login successful", { status: 200 });
    } else {
      return new Response("Invalid credentials", { status: 401 });
    }
  },
};

export const { GET, POST } = handlers;
