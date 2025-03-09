"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  checkIn: z.date(),
  checkOut: z.date(),
  room: z.number(),
  numberOfGuests: z.number(),
});

function BookingForm() {
  // get room query param
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      checkIn: new Date(),
      checkOut: new Date(),
      room: 0,
      numberOfGuests: 1,
    },
  });
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
            {/* <Input {...form.register("room")} placeholder="Room" /> */}

            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Check In</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Check In"
                      {...field}
                      type="date"
                      value={field.value.toISOString().split("T")[0]}
                    />
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
                    <Input
                      placeholder="Check Out"
                      {...field}
                      type="date"
                      value={field.value.toISOString().split("T")[0]}
                    />
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
