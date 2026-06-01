"use client";

import { motion } from "motion/react";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 15, y: 50 }}
      animate={{ opacity: 1, rotateX: 0, y: 0 }}
      exit={{ opacity: 0, rotateX: -15, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
