"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { getRooms } from "@/lib/actions/room.actions";
import { Room } from "@/types";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  checkIn: z.string(),
  checkOut: z.string(),
  room: z.number(),
  numberOfGuests: z.number(),
});

function BookingForm() {
  // TODO: get room query param
  const searchParams = useSearchParams();
  const room = searchParams.get("room");

  console.log(room, searchParams);
  const [rooms, setRooms] = React.useState([]);
  React.useEffect(() => {
    async function getAllRooms() {
      const allRooms = await getRooms();
      setRooms(allRooms);
    }
    getAllRooms();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      room: 0,
      numberOfGuests: 1,
    },
  });
  React.useEffect(() => {
    if (room) {
      console.log("room #", room);
      form.setValue("room", Number(room));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className=" px-4 py-8 w-full max-w-xl mx-auto rounded-lg shadow-md bg-cyan-50">
      <Form {...form}>
        <h2 className="text-2xl text-center mb-6">Book a Room</h2>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 md:gap-4 gap-2 mb-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              // defaultValue={room ? Number(room) : 0}
              name="room"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full rounded-lg border border-gray-300">
                      {rooms?.map((room: Room) => (
                        <option key={room.id} value={room.id}>
                          {room.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Check In</FormLabel>
                  <FormControl>
                    <Input placeholder="Check In" {...field} type="date" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="checkOut"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Check Out</FormLabel>
                  <FormControl>
                    <Input placeholder="Check Out" {...field} type="date" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numberOfGuests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guests</FormLabel>
                  <FormControl>
                    <Input placeholder="Guests" {...field} type="number" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-900 text-white text-lg font-semibold py-2 px-4 rounded-lg w-full"
          >
            Book Now
          </button>
        </form>
      </Form>
    </div>
  );
}

export default BookingForm;
