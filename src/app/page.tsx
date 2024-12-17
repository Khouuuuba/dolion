'use client';

import React from "react";
import { Hero } from "../app/(components)/hero";
import { Features } from "../app/(components)/features";
import { WaitlistForm } from "../app/(components)/waitlist-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="container mx-auto px-4 py-4 md:py-16 space-y-6 md:space-y-12 relative">
        <div className="space-y-8 md:space-y-16">
          <Hero />
        </div>
        
        <Features />

        <div className="space-y-3 max-w-4xl mx-auto">
          <p className="text-center text-sm md:text-lg text-foreground/80 font-medium px-2">
            Integration with:
          </p>
          <div className="flex justify-center items-center px-2 md:px-4">
            <Image
              src="https://assets.polymet.ai/normal-copper-871590"
              alt="Social Platforms"
              width={450}
              height={56}
              className="w-[75%] md:w-[62.5%] h-auto object-contain brightness-0 invert"
            />
          </div>
        </div>

        <div className="py-4 md:py-16">
          <WaitlistForm />
        </div>

        <div className="text-center text-xs md:text-sm text-foreground/60 py-4 w-full">
          Powered by{" "}
          <a
            href="https://x.com/primisprotocol"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Primis Protocol
          </a>
        </div>
      </div>
    </div>
  );
}
