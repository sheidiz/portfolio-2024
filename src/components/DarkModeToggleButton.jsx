import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { MdSunny } from 'react-icons/md';
import { AiFillMoon } from 'react-icons/ai';

const DarkModeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useContext(DarkModeContext);

  return (
    <div className={`w-fit md:ml-2 px-2 py-1 flex gap-2 justify-center border-2 border-[#CFCECE] bg-white rounded-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.3)] transition-opacity duration-300`}>
    <button onClick={toggleTheme} className="text-xl md:text-2xl">
      {isDarkMode ? <MdSunny className='text-[#F6E232] mr-7' /> : <AiFillMoon className='text-[#302F66] ml-7' />}
    </button>
    </div>
  );
};

export default DarkModeToggleButton;
