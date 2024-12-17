'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 w-full"
      >
        <div className="w-[280px] h-[70px] md:w-[448px] md:h-[112px] mx-auto">
          <Image
            src="https://assets.polymet.ai/fond-azure-081682"
            alt="Dolion Logo"
            width={1536}
            height={384}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-xl md:text-3xl font-bold text-foreground/90">
          The Social AI Platform
        </p>
        <p className="text-base md:text-lg text-foreground/80 mt-2 md:mt-6 font-medium max-w-[300px] md:max-w-2xl mx-auto">
          Automate your digital presence & stay connected with your audience.
        </p>
      </motion.div>
    </div>
  );
}
