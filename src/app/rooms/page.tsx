import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggeredGroup from "@/components/animations/StaggeredGroup";
import ContactForm from "@/components/forms/ContactForm";
import Hero from "@/components/layout/Hero";
import PageWrapper from "@/components/layout/PageWrapper";
import RoomSection from "@/components/rooms/RoomSection";
import Typography from "@/components/ui/Typography";
import { localRooms } from "@/lib/data";
import { RoomData } from "@/types";
import React from "react";

async function Page() {
  const rooms = localRooms;

  return (
    <div className="mx-auto w-screen bg-white">
      <Hero image="/room-1.jpg" />
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 z-20 text-center">
          <AnimatedSection delay={0.2}>
            <Typography variant="h1">Rooms & Rates</Typography>
          </AnimatedSection>
        </div>
      </section>

      <PageWrapper className=" pb-6">
        <section className="container mx-auto px-4">
          <AnimatedSection delay={0.4} className="space-y-4 pb-4">
            <Typography variant="h2" className="pb-2">
              Our Rooms
            </Typography>
            <p className="font-bold text-center mb-4">
              Please contact us to find out more about our seasonal discounts of up to 20% off room
              rates.
            </p>
            <p className="text-center">
              Mirage Resort is a three level property with three room preference choices.
            </p>
          </AnimatedSection>

          <StaggeredGroup>
            <div className="md:space-y-12">
              {rooms.map((room: RoomData, index: number) => (
                <RoomSection key={index} {...room} />
              ))}
            </div>
          </StaggeredGroup>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <AnimatedSection delay={0.5} className="flex">
              <div className="bg-amber-50 p-6 rounded-lg max-w-3xl mx-auto my-1 shadow-md">
                <Typography variant="h3" className="text-center mb-3">
                  Additional Information
                </Typography>
                <p className="text-gray-700">
                  There is an additional 10% service charge & 10% Gov. tax and room tax of US$1.00
                  per room night implemented by the Government of Jamaica will be applied upon
                  client&apos;s arrival at the hotel.
                </p>
                <p className="text-gray-700 mt-2 font-medium">
                  We offer a complementary continental breakfast.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.5} className="flex">
              <div className="bg-cyan-50 p-6 rounded-lg max-w-3xl mx-auto my-8 shadow-md">
                <Typography variant="h3" className="text-center mb-3">
                  Guest Privileges
                </Typography>
                <p className="text-gray-700">
                  Guests at Mirage Resort are welcome to spend a day on Negril&apos;s sparkling
                  7-mile beach at our sister property, the Charela Inn Hotel. Towels and beach
                  chairs included. For any three day stay or more, a US$20 voucher per room will be
                  given for use at the Charela Inn.
                </p>
                <p className="text-gray-700 mt-4">
                  We offer a complimentary continental breakfast for our guests. There are several
                  bars and restaurants within close walking distance to make your stay complete.
                </p>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.6}>
            <div className="w-full max-w-3xl mx-auto pb-20 bg-gradient-to-r from-cyan-50 to-amber-50 p-6 md:my-10 rounded-lg shadow-md">
              <Typography variant="h3" className="text-center mb-4 text-cyan-900">
                Room Amenities
              </Typography>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-cyan-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-cyan-900">Ceiling Fan</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-cyan-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-cyan-900">Air Conditioning</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-cyan-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-cyan-900">Cable TV</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-cyan-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-cyan-900">Refrigerator</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-cyan-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-cyan-900">Coffee Maker</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-cyan-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-cyan-900">Spacious Bathroom</span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4 mt-4 bg-white p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                  </svg>
                  <span className="font-medium text-cyan-900">
                    Free WiFi throughout the property
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-cyan-800 font-medium">
                  King and double beds available to suit your needs
                </p>
              </div>
            </div>
          </AnimatedSection>
          <ContactForm title="Contact Us" />
        </section>
      </PageWrapper>
    </div>
  );
}

export default Page;


