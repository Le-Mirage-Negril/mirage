"use client";
import React, { useState } from "react";
import AnimatedSection from "../animations/AnimatedSection";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Typography from "../ui/Typography";

interface WeddingCardsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  weddingCards: Record<string, any>[];
}

function WeddingCards({ weddingCards }: WeddingCardsProps) {
  const [currentCard, setCurrentCard] = useState<number>(0);

  const handleNextCard = (index: number) => {
    if (index < 0) {
      setCurrentCard(weddingCards.length - 1);
    } else if (index >= weddingCards.length) {
      setCurrentCard(0);
    } else {
      setCurrentCard(index);
    }
  };

  const handlePrevCard = (index: number) => {
    if (index < 0) {
      setCurrentCard(weddingCards.length - 1);
    } else if (index >= weddingCards.length) {
      setCurrentCard(0);
    } else {
      setCurrentCard(index);
    }
  };

  return (
    <div className="space-y-12 py-12 max-w-5xl mx-auto">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {weddingCards?.map((card: any, index: number) => (
        <AnimatedSection
          delay={0.4}
          key={card?.id}
          className={cn(index === currentCard ? "block" : "hidden")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card?.image?.url}
              alt="Wedding"
              className="max-w-[350px] h-[300px] md:max-w-[500px] md:h-[500px] w-full object-cover mx-auto rounded-md"
            />

            <div className=" flex flex-col justify-center gap-5">
              <h2 className="text-2xl lg:text-3xl text-center font-serif text-white font-medium">
                {card?.Title}
              </h2>
              <p className=" leading-relaxed ml-9 text-white">{card?.description}</p>
              <Button variant="outline" className="rounded-full w-fit mx-auto" asChild>
                <a href="#contact">Inquire</a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      ))}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-normal text-lg">
          <Typography variant="span" className="capitalize text-white mb-0">
            {currentCard + 1}/{weddingCards.length}
          </Typography>
          <Typography variant="p" className="capitalize font-serif text-white mb-0">
            {weddingCards[currentCard]?.Title}
          </Typography>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Button
            variant="outline"
            className="rounded-full w-fit mx-auto"
            onClick={() => handlePrevCard(currentCard + 1)}
          >
            <ArrowLeft fontSize={40} />
          </Button>
          <Button
            variant="outline"
            className="rounded-full w-fit mx-auto"
            onClick={() => handleNextCard(currentCard + 1)}
          >
            <ArrowRight fontSize={40} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WeddingCards;
