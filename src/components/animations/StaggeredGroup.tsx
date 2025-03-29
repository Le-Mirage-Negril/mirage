"use client";
import { useInView, motion } from "framer-motion";
import React, { ReactNode, useRef } from "react";

const StaggeredGroup = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 }); // Reduced threshold

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced stagger time
        delayChildren: 0.1, // Added small delay
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 }, // Reduced y movement
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }, // Smoother transition
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full"
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredGroup;