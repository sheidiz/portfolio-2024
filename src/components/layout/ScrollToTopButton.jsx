import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 rounded-full bg-tertiary/80 text-white shadow transition-transform duration-300 hover:-translate-y-2 hover:bg-tertiary dark:shadow-light/30 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ display: visible ? "block" : "none" }}
    >
      <FaChevronUp className="size-8 p-2 md:size-11 md:p-3" />
    </button>
  );
};

export default ScrollToTopButton;
