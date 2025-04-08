"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

import { Room } from "@/types";
import { useSearchParams } from "next/navigation";
import { roomData } from "@/lib/data";

import { sendEmail } from "./utils";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  checkIn: z.string(),
  checkOut: z.string(),
  room: z.string(),
  numberOfGuests: z.number(),
});

function BookingForm() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("room") || "0";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      room: roomId,
      numberOfGuests: 1,
    },
  });

  // Update room value when roomId changes
  React.useEffect(() => {
    if (roomId) {
      form.setValue("room", roomId);
    }
  }, [roomId, form]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    const roomSelected = roomData.find((room: Room) => room.id === parseInt(values.room));
    console.log(roomSelected);
    // post request to booking api
    const result = sendEmail(values);
    console.log(result);
    if (result) {
      form.setValue("name", "");
      form.setValue("email", "");
      form.setValue("phone", "");
      form.setValue("checkIn", "");
      form.setValue("checkOut", "");
      form.setValue("room", "");
      form.setValue("numberOfGuests", 1);
      toast.success("Email sent successfully");
      // set to default values
      form.reset();
    } else {
      toast.error("Email failed to send");
    }
  };
  console.log(form.formState.errors);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-2xl mx-auto bg-amber-50 p-6 rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
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
                  <Input placeholder="Your email" type="email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="room"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="w-full rounded-lg border border-gray-300 p-2 text-black"
                    value={field.value}
                  >
                    <option value="">Select a room</option>
                    {roomData?.map((room: Room) => (
                      <option key={room.id} value={room.id}>
                        {room.floor}
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
                  <Input placeholder="Number of guests" {...field} type="number" min={1} max={2} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors"
        >
          Submit Booking
        </button>
      </form>
    </Form>
  );
}

export default BookingForm;
