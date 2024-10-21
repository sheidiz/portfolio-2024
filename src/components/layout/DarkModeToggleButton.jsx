import React, { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { MdSunny } from "react-icons/md";
import { AiFillMoon } from "react-icons/ai";

const DarkModeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useContext(DarkModeContext);

  return (
    <div
      className={`flex w-fit justify-center gap-2 rounded-full border-2 border-[#CFCECE] bg-white px-2 py-1 shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.3)] transition-opacity duration-300 md:ml-2`}
    >
      <button
        aria-label="Dark Mode"
        onClick={toggleTheme}
        className="text-xl md:text-2xl"
      >
        {isDarkMode ? (
          <MdSunny className="mr-7 text-[#F6E232]" />
        ) : (
          <AiFillMoon className="ml-7 text-[#302F66]" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggleButton;
