'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  ZapIcon,
  ShareIcon,
  BotIcon,
  BarChartIcon,
  LinkIcon,
  StoreIcon,
} from "lucide-react";

const features = [
  {
    icon: <ZapIcon className="w-5 h-5" />,
    title: "Easy 1 click deployment",
    description:
      "Deploy your social AI presence instantly without any coding experience.",
  },
  {
    icon: <ShareIcon className="w-5 h-5" />,
    title: "Active across all social platforms",
    description:
      "Maintain a consistent presence across multiple social media platforms with ease.",
  },
  {
    icon: <BotIcon className="w-5 h-5" />,
    title: "Automated social interaction",
    description:
      "Connect with engaging conversations. Reduce the need for content ideation, planning, & scheduling.",
  },
  {
    icon: <BarChartIcon className="w-5 h-5" />,
    title: "Social analytics dashboard",
    description:
      "Monitor and analyze your automated social media performance across all platforms in one place.",
  },
  {
    icon: <LinkIcon className="w-5 h-5" />,
    title: "On-chain presence & trading",
    description:
      "Interact with your audience on chain with NFTs and other digital experiences.",
  },
  {
    icon: <StoreIcon className="w-5 h-5" />,
    title: "Brand partnership marketplace",
    description: "Easily connect with brands and monetize your influence.",
  },
];

export function Features() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-4 rounded-xl border bg-card/60 backdrop-blur-sm text-card-foreground hover:shadow-md transition-shadow"
          id={`vje732_${index}`}
        >
          <div className="flex items-start gap-3" id={`373plt_${index}`}>
            <div
              className="p-2 bg-primary/10 rounded-full"
              id={`rdpsov_${index}`}
            >
              {feature.icon}
            </div>
            <div className="flex-1" id={`swqchj_${index}`}>
              <h3
                className="text-base font-bold mb-1 text-foreground"
                id={`15fzsa_${index}`}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm text-foreground/80 font-medium"
                id={`l1mfp9_${index}`}
              >
                {feature.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
