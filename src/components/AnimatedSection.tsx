"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
}

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.2, // trigger when 20% is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
