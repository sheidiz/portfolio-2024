import React, { useState } from 'react';
import translations from '../translations/data';
import { useLanguage } from '../contexts/LanguageContext';
import EsFlag from '../assets/es-flag.png';
import EnFlag from '../assets/en-flag.png';

const Navbar = () => {
  const { language, switchLanguage } = useLanguage();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const t = translations[language];

  const handleLanguageSwitch = (lang) => {
    setIsTransitioning(true);
    setTimeout(() => {
      switchLanguage(lang);
      setIsTransitioning(false);
    }, 100);
  };

  return (
    <nav className='mx-3 md:mx-auto md:w-fit flex flex-col md:flex-row gap-y-2 align-middle items-center md:justify-center rounded-full px-4 md:px-36 py-2 md:py-3 bg-tertiary/90 dark:bg-primary/90'>
      <ul className='flex justify-evenly md:justify-center items-center gap-x-4 text-white'>
        <li className='font-semibold hover:scale-[102%]'><a href="#about">{t.menu.about}</a></li>
        <li className='font-semibold hover:scale-[102%]'><a href="#experience">{t.menu.experience}</a></li>
        <li className='font-semibold hover:scale-[102%]'><a href="#projects">{t.menu.projects}</a></li>
      </ul>
      <div className={`w-fit md:ml-10 px-4 py-1 flex gap-2 justify-center border-2 border-[#CFCECE] bg-white rounded-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.3)] transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {language == "es" ?
          <button className='text-slate-500 text-xs md:text-sm font-semibold flex items-center gap-x-1' onClick={() => handleLanguageSwitch('en')}>EN <img src={EnFlag} className='h-4 md:h-fit inline-block' /></button>
          :
          <button className='text-slate-500 text-xs md:text-sm font-semibold flex items-center gap-x-1' onClick={() => handleLanguageSwitch('es')}><img src={EsFlag} className='h-4 md:h-fit inline-block' /> ES</button>
        }
      </div>
    </nav>

  )
}

export default Navbar