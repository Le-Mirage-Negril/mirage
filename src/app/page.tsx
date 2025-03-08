import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/layout/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-auto bg-cyan-950 divide-y-8 divide-cyan-600 space-y-10">
        <Hero />
        <section className="container mx-auto md:py-40 py-10 px-4 md:px-2 ">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center space-y-4">
              <div className="flex flex-col justify-center items-center space-y-4">
                <h2 className="text-4xl font-serif leading-4">Relax. Jump. Hedonism.</h2>
                <p className="text-md text-center">
                  Mirage Resort is a small private property, Clothing Optional, Adults Only Resort.{" "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-40">
                <Image
                  src="/swim-2.jpg"
                  alt="Hotel Lobby"
                  className="w-full rounded-lg  shadow-lg max-h-[600px] object-cover"
                  width={300}
                  height={500}
                />
                <Image
                  src="/swim-4.jpg"
                  alt="Hotel Lobby"
                  className="w-full rounded-lg shadow-lg max-h-[600px] object-cover translate-y-16"
                  width={300}
                  height={500}
                />
                <Image
                  src="/swim-3.jpg"
                  alt="Hotel Lobby"
                  className="w-full rounded-lg shadow-lg max-h-[600px] object-cover translate-y-32"
                  width={300}
                  height={500}
                />
              </div>
            </div>
          </AnimatedSection>
        </section>
        {/* romance */}
      </div>
      <section className=" mx-auto ">
        <AnimatedSection>
          <div className="bg-[url(/swimming.jpg)] bg-cover bg-center bg-no-repeat h-[600px] max-height-full  flex flex-col justify-center items-center space-y-4 brightness-90">
            <div className="flex flex-col justify-center items-center space-y-4 py-40 brightness-100">
              <h2 className="text-4xl font-serif leading-4 ">Romance.</h2>
              <p className="text-center text-md">
                independence, quietude and the utmost privacy - great for nature lovers!
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
