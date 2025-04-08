import AnimatedSection from "@/components/animations/AnimatedSection";
import BookingForm from "@/components/forms/BookingForm";
import Hero from "@/components/layout/Hero";
import PageWrapper from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/Typography";
import { ArrowBigDownDash } from "lucide-react";
import { Suspense } from "react";

function ReservationPage() {
  return (
    <div className="mx-auto w-screen bg-cyan-950">
      <Hero image="/room-1.jpg" />
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 z-20 text-center">
          <AnimatedSection delay={0.2}>
            {/* comment */}
            <Typography variant="h1">Reservations</Typography>
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
      <PageWrapper className="bg-cyan-950">
        <section id="booking-form">
          <Typography variant="h2" className="text-center text-white pb-12">
            Book a Room
          </Typography>
          <Suspense
            fallback={<div className="text-white text-center">Loading booking form...</div>}
          >
            <BookingForm />
          </Suspense>
        </section>
      </PageWrapper>
    </div>
  );
}

export default ReservationPage;
