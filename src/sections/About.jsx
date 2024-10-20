import React from 'react'
import translations from '../translations/data';
import { useLanguage } from '../contexts/LanguageContext';
import Perfil from "../assets/Perfil.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Languages from '../components/Languages';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className='max-w-[1400px] mx-3 mt-3 md:mx-auto grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3'>
      <div className='col-span-2 md:col-span-1 bg-lightbox rounded-2xl p-4'>
        <h1 className='mb-1 text-2xl md:text-3xl font-bold text-white'>Sheila Diz</h1>
        <h2 className='md:text-xl font-bold text-quaternary/80'>{t.title}</h2>
        <div className='my-3 w-28 h-2 border-t border-t-white'></div>
        <p className='mb-2 text-white text-sm md:text-base'>{t.description[0]}</p>
        <p className='text-white text-sm md:text-base'>{t.description[1]}</p>
      </div>
      <div className='col-span-2 md:col-span-1 w-full h-full flex gap-2 md:gap-3'>
        <img
          src={Perfil}
          alt="Foto de perfil"
          className="w-2/3 md:w-3/5 sm:w-full h-auto max-h-full object-cover rounded-2xl"
        />
        <ul className='w-full flex flex-col justify-between gap-y-2 md:gap-y-3 md:col-span-1'>
          <li className='w-full h-full flex justify-center items-center bg-lightbox dark:bg-darkbox p-4 text-2xl min-[500px]:text-3xl rounded-2xl text-white'><a href="https://www.linkedin.com/in/sheila-diz" target="_blank"><FaLinkedin className='inline mb-1 mr-1' /></a></li>
          <li className='w-full h-full flex justify-center items-center bg-lightbox dark:bg-darkbox p-4 text-2xl min-[500px]:text-3xl rounded-2xl text-white'><a href="https://github.com/sheidiz" target="_blank"><FaGithub className='inline mb-1 mr-1' /></a></li>
          <li className='w-full h-full flex justify-center items-center bg-lightbox dark:bg-darkbox p-4 text-2xl min-[500px]:text-3xl rounded-2xl text-white'><a href="mailto:dizsheila07@gmail.com" target="_blank"><MdEmail className='inline mb-1 mr-1' /></a></li>
        </ul>
      </div>
      <Languages />
    </section >
  )
}

export default About;