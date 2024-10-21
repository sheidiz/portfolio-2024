import React from "react";
import { motion } from "framer-motion";

const BentoContainer = ({
  className,
  children,
  initial,
  animate,
  transition,
}) => {
  return (
    <motion.div
      className={`rounded-2xl border border-secondary bg-lightbox p-4 dark:bg-darkbox ${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default BentoContainer;
