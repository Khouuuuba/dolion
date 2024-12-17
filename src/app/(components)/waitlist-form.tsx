'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";

export function WaitlistForm() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [isInfluencer, setIsInfluencer] = React.useState(false);
  const [isAgency, setIsAgency] = React.useState(false);
  const [isIndividual, setIsIndividual] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/mpwzgrgn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          isInfluencer,
          isAgency,
          isIndividual,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl mx-auto text-center space-y-4 md:space-y-8 px-2 md:px-4"
    >
      <div className="space-y-2 md:space-y-4">
        <h2 className="text-xl md:text-3xl font-bold text-foreground font-serif">
          Join the Waitlist
        </h2>
        <p className="text-sm md:text-lg text-foreground/80 font-medium">
          Experience the future of AI-powered social influence.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isInfluencer}
              onCheckedChange={(checked) => setIsInfluencer(checked as boolean)}
            />
            <label className="text-sm font-medium leading-none whitespace-nowrap">
              I'm an influencer
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isAgency}
              onCheckedChange={(checked) => setIsAgency(checked as boolean)}
            />
            <label className="text-sm font-medium leading-none whitespace-nowrap">
              I'm a business
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isIndividual}
              onCheckedChange={(checked) => setIsIndividual(checked as boolean)}
            />
            <label className="text-sm font-medium leading-none whitespace-nowrap">
              I'm an individual
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 text-foreground placeholder:text-foreground/60"
          />

          <Button type="submit" size="lg" className="font-semibold w-full">
            Join Waitlist
          </Button>
        </div>
      </form>

      {submitted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-medium text-primary"
        >
          Thanks for joining! We'll keep you updated.
        </motion.p>
      )}
    </motion.div>
  );
}
