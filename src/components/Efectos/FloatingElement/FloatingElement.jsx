import React from 'react';
import { motion } from 'framer-motion';

export const FloatingElement = ({ children, hoverOffset = -5, floatOffset = -10, duration = 4 }) => {
  return (
    <motion.div
      whileHover={{ y: hoverOffset }}
      animate={{
        y: [0, floatOffset, 0],
        transition: {
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
    >
      {children}
    </motion.div>
  );
};

