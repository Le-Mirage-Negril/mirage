import AnimatedSection from "@/components/animations/AnimatedSection";
import BookingForm from "@/components/forms/BookingForm";
import Hero from "@/components/layout/Hero";
import { Button } from "@/components/ui/button";
import { ArrowBigDownDash } from "lucide-react";
import { Suspense } from "react";

function ReservationPage() {
  return (
    <div className="mx-auto w-screen bg-cyan-950">
      <Hero image="/room-1.jpg" />
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 z-20 text-center">
          <AnimatedSection delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif">
              Reservations
            </h1>
          </AnimatedSection>
          <div className="text-center">
            <Button className="text-white bg-amber-500" asChild>
              <a href="#booking-form" className="flex items-center justify-center">
                Book Now <ArrowBigDownDash className="w-10 h-10 animate-bounce" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-24 px-4" id="booking-form">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Book a Room</h2>
        <Suspense fallback={<div className="text-white text-center">Loading booking form...</div>}>
          <BookingForm />
        </Suspense>
      </section>
    </div>
  );
}

export default ReservationPage;
