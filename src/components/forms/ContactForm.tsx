"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Typography from "../ui/Typography";

import { toast } from "sonner";
import emailjs from "@emailjs/browser";
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(7, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

function ContactForm({
  title = "Contact Us",
  description = `Feel free to contact us at any time. We are here to provide you with more information and
        answer any questions you may have about our resort`,
  isWeddingForm = false,
}: {
  title?: string;
  description?: string;
  isWeddingForm?: boolean;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...(isWeddingForm
        ? {
            formTitle: "Wedding Enquiry",
          }
        : {
            formTitle: "Contact Us",
          }),
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    emailjs
      .send(
        "service_a7b44yl",
        "template_ugb7z57",
        {
          ...values,
        },
        "r9oLUPKSxZyTe75XQ"
      )
      .then(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (result: any) => {
          if (result.status === 200) {
            toast.success("Email sent successfully");
            form.reset();
            form.setValue("name", "");
            form.setValue("email", "");
            form.setValue("phone", "");
            form.setValue("message", "");
          }
        }
      );
  };

  return (
    <div className="max-w-2xl mx-auto container p-4 bg-gradient-to-b to-cyan-950 from-cyan-100 rounded-lg shadow-md">
      <Typography variant="h2" className="text-center   ">
        {title}
      </Typography>
      <p className="text-center mb-6 ">{description}</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6  rounded-lg">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Full Name</FormLabel>
                <FormControl>
                  <Input className="text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input className="text-white" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Phone</FormLabel>
                <FormControl>
                  <Input className="text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="text-white">
                <FormLabel className="text-white">Message</FormLabel>
                <FormControl className="text-white">
                  <Textarea className="min-h-[120px] text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <Button
              type="submit"
              className="font-serif w-full text-lg capitalize hover:bg-cyan-950 bg-cyan-800 cursor-pointer"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
