"use client";

import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export default function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0 },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}: WordFadeInProps) {
  
  const _words = words.split(" ");

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "font-display text-3xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-[3rem]",
        className,
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={i} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
