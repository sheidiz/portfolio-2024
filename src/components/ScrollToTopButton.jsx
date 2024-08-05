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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 shadow dark:shadow-light/30 bg-quaternary/80 text-white rounded-full transition-transform duration-300 hover:bg-quaternary hover:-translate-y-2 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <FaChevronUp className="size-8 md:size-11 p-2 md:p-3" />
    </button>
  );
};

export default ScrollToTopButton;