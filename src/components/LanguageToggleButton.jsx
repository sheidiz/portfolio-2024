import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext';
import EsFlag from '../assets/es-flag.png';
import EnFlag from '../assets/en-flag.png';

const LanguageToggleButton = () => {
  const { language, switchLanguage } = useLanguage();

  const handleLanguageSwitch = (lang) => {
    switchLanguage(lang);
  };

  return (
    <div className='pl-3 pr-3 sm:pr-7 py-1 flex gap-2 justify-center border-2 border-[#CFCECE] bg-white rounded-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.3)] transition-opacity duration-300'>
      {language == "es" ?
        <button className='w-fit text-slate-500 text-sm md:text-base font-semibold flex items-center gap-x-2' onClick={() => handleLanguageSwitch('en')}>EN <img src={EnFlag} className='h-4 md:h-5 inline-block' /></button>
        :
        <button className='w-fit text-slate-500 text-sm md:text-base font-semibold flex items-center gap-x-2' onClick={() => handleLanguageSwitch('es')}><img src={EsFlag} className='h-4 md:h-5 inline-block' /> ES</button>
      }
    </div>
  )
}

export default LanguageToggleButton