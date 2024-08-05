import React, { useState } from 'react';
import translations from '../translations/data';
import { useLanguage } from '../contexts/LanguageContext';

import DarkModeToggleButton from './DarkModeToggleButton';
import LanguageToggleButton from './LanguageToggleButton';

const Navbar = () => {
  const { language, switchLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className='mx-3 md:mx-auto md:w-fit flex flex-col md:flex-row gap-y-2 align-middle items-center md:justify-center rounded-full px-4 md:px-36 py-2 md:py-3 bg-tertiary/90 dark:bg-primary/90'>
      <ul className='flex justify-evenly md:justify-center items-center gap-x-4 text-white'>
        <li className='font-semibold hover:scale-[102%]'><a href="#about">{t.menu.about}</a></li>
        <li className='font-semibold hover:scale-[102%]'><a href="#experience">{t.menu.experience}</a></li>
        <li className='font-semibold hover:scale-[102%]'><a href="#projects">{t.menu.projects}</a></li>
      </ul>
      <div className="flex gap-4">
        <LanguageToggleButton />
        <DarkModeToggleButton />
      </div>
    </nav>
  )
}

export default Navbar