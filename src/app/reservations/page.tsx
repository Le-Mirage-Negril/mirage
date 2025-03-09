import ParallaxSection from "@/components/animations/ParallaxSection";

import React from "react";

function page() {
  return (
    <div className="mx-auto w-screen  bg-cyan-900">
      <ParallaxSection speed={-0.2} className="w-full h-full">
        <div className="flex justify-center items-center h-screen">page</div>
      </ParallaxSection>
      {/* form with room, dates, get num guests and name email */}
    </div>
  );
}

export default page;
