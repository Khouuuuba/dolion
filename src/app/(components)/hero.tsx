'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        <div className="w-[448px] h-[112px] mx-auto">
          <Image
            src="https://assets.polymet.ai/fond-azure-081682"
            alt="Dolion Logo"
            width={1536}
            height={384}
            className="w-full h-full object-contain"
          />
        </div>
        <p
          className="text-2xl md:text-3xl font-bold text-foreground/90 font-serif"
        >
          The Social AI Platform
        </p>
        <p
          className="max-w-2xl mx-auto text-lg text-foreground/80 mt-6 font-medium"
        >
          Automate your digital presence & stay connected with your audience.
        </p>
      </motion.div>
    </div>
  );
}
