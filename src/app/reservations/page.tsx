import ParallaxSection from "@/components/animations/ParallaxSection";
import BookingForm from "@/components/forms/BookingForm";

import React from "react";

function page() {
  return (
    <div className="mx-auto w-screen bg-cyan-950">
      <ParallaxSection speed={-0.2} className="w-full h-full">
        <div className="flex justify-center flex-col items-center h-screen space-y-4">
          <h1 className="text-4xl text-center text-white pb-20">Reservations</h1>
          <div>
            <BookingForm />
          </div>
        </div>
      </ParallaxSection>
      {/* form with room, dates, get num guests and name email */}
    </div>
  );
}

export default page;
