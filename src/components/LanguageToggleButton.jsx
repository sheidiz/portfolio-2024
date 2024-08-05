import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext';
import EsFlag from '../assets/es-flag.png';
import EnFlag from '../assets/en-flag.png';

const LanguageToggleButton = () => {
  const { language, switchLanguage } = useLanguage();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLanguageSwitch = (lang) => {
    setIsTransitioning(true);
    setTimeout(() => {
      switchLanguage(lang);
      setIsTransitioning(false);
    }, 100);
  };

  return (
    <div className={`w-fit md:ml-10 px-4 py-1 flex gap-2 justify-center border-2 border-[#CFCECE] bg-white rounded-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.3)] transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      {language == "es" ?
        <button className='text-slate-500 text-sm md:text-base font-semibold flex items-center gap-x-1' onClick={() => handleLanguageSwitch('en')}>EN <img src={EnFlag} className='h-4 md:h-5 inline-block' /></button>
        :
        <button className='text-slate-500 text-sm md:text-base font-semibold flex items-center gap-x-1' onClick={() => handleLanguageSwitch('es')}><img src={EsFlag} className='h-4 md:h-5 inline-block' /> ES</button>
      }
    </div>
  )
}

export default LanguageToggleButton