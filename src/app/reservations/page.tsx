// import ParallaxSection from "@/components/animations/ParallaxSection";
import BookingForm from "@/components/forms/BookingForm";
// import Hero from "@/components/layout/Hero";
// import { Button } from "@/components/ui/button";
// import { ArrowBigDownDash } from "lucide-react";

function ReservationPage() {
  return (
    <div className="mx-auto w-screen bg-cyan-950">
      {/* <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Hero image="/room-2.jpg" />
        <ParallaxSection speed={-0.2}>
          <h1 className="text-4xl text-center text-white pb-20 font-serif">Reservations</h1>
          <div className="text-center">
            <Button className="text-white bg-amber-500" asChild>
              <a href="#booking-form" className="flex items-center justify-center">
                Book Now <ArrowBigDownDash className="w-10 h-10 animate-bounce" />
              </a>
            </Button>
          </div>
        </ParallaxSection>
      </section> */}
      <section className="py-24 px-4" id="booking-form">
        <BookingForm />
      </section>
    </div>
  );
}

export default ReservationPage;
