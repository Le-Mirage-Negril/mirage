import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Testimonial } from "@/types";

interface TestimonialProps {
  testimonial: Testimonial;
  key: number | string;
}

function TestimonialCard({ testimonial, key }: TestimonialProps) {
  return (
    <Card key={key} className="bg-white shadow-md">
      <CardHeader>
        <div className="text-amber-500 text-2xl mb-2">★★★★★</div>
      </CardHeader>
      <CardContent>
        <p className="text-stone-700 italic mb-4">&quot;{testimonial.testimonial}&quot;</p>
        <div>
          <p className="font-medium text-stone-900">{testimonial.name}</p>
          <p className="text-sm text-stone-500">{testimonial.location}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
