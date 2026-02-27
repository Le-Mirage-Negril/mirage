"use client";
import React, { useState } from "react";
import AnimatedSection from "../animations/AnimatedSection";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Typography from "../ui/Typography";
import type { WeddingCard } from "@/types";
import Image from "next/image";

interface WeddingCardsProps {
  weddingCards: WeddingCard[];
}

function WeddingCards({ weddingCards }: WeddingCardsProps) {
  const [currentCard, setCurrentCard] = useState<number>(0);

  if (!weddingCards || weddingCards.length === 0) {
    return null;
  }

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
    <div className="space-y-12 md:py-12 py-8 max-w-5xl mx-auto">
      {weddingCards.map((card: WeddingCard, index: number) => (
        <AnimatedSection
          delay={0.4}
          key={card?.id}
          className={cn(index === currentCard ? "block" : "hidden")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-4">
            <Image
              src={card?.image?.url}
              alt={card?.image?.alt || "Wedding"}
              width={500}
              height={500}
              className="max-w-full h-[300px] md:max-w-[500px] md:h-[500px] w-full object-cover mx-auto rounded-md"
            />

            <div className=" flex flex-col justify-center gap-5">
              <h2 className="text-2xl lg:text-3xl text-center font-serif text-white font-medium">
                {card?.title}
              </h2>
              <p className=" leading-relaxed text-white">{card?.description}</p>
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
            {weddingCards[currentCard]?.title}
          </Typography>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Button
            variant="outline"
            className="rounded-full w-fit mx-auto"
            onClick={() => handlePrevCard(currentCard - 1)}
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
