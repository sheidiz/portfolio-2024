import React from "react";

const BentoContainer = ({ className, children }) => {
  return (
    <div
      className={`rounded-2xl border border-secondary bg-lightbox p-4 dark:bg-darkbox ${className}`}
    >
      {children}
    </div>
  );
};

export default BentoContainer;
