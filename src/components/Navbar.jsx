import React from 'react';
import translations from '../translations/data';
import { useLanguage } from '../contexts/LanguageContext';

import DarkModeToggleButton from './DarkModeToggleButton';
import LanguageToggleButton from './LanguageToggleButton';

const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className='sm:mx-1 w-full max-w-[1400px] lg:mx-auto flex flex-col min-[500px]:flex-row gap-y-2 align-middle items-center min-[500px]:justify-between rounded-2xl px-2 min-[500px]:px-4 py-2 md:py-3 bg-tertiary/90 dark:bg-primary/90'>
      <ul className='w-full flex justify-between min-[500px]:justify-start items-center gap-x-4 text-white'>
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