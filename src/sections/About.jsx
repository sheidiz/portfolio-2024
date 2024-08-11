import React from 'react'
import translations from '../translations/data';
import { useLanguage } from '../contexts/LanguageContext';
import Perfil from "../assets/Perfil.jpeg";
import ArgentinaFlag from "../assets/Argentina.png";
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import CvEn from '../assets/Sheila Diz - Resume.pdf';
import CvEs from '../assets/Sheila Diz - CV.pdf';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className='max-w-4xl mx-3 mt-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-x-3'>
      <div className='bg-lightbox dark:bg-darkbox rounded-2xl p-4'>
        <h1 className='mb-1 text-3xl font-bold text-white'>Sheila Diz</h1>
        <h2 className='text-xl font-bold text-quaternary/80'>{t.title}</h2>
        <div className='my-3 w-28 h-2 border-t border-t-white'></div>
        <p className='mb-2 text-white text-sm md:text-base'>{t.description[0]}</p>
        <p className='text-white text-sm md:text-base'>{t.description[1]}</p>
      </div>
      <div className='my-3 md:my-0 grid grid-cols-1 md:grid-rows-2 gap-3'>
        <div className='flex flex-row gap-3'>
          <div className='md:relative w-1/2 md:w-1/2 h-full'>
            <img src={Perfil} alt="Foto de perfil" className='md:absolute inset-0 w-full h-full object-cover object-top rounded-2xl' />
          </div>
          <ul className="w-1/2 md:w-2/3 bg-lightbox dark:bg-darkbox p-4 rounded-2xl flex flex-col gap-y-3 justify-evenly text-white font-semibold">
            <li><a href="https://www.linkedin.com/in/sheila-diz" target="_blank"><FaLinkedin className='inline mb-1 mr-1' /> LinkedIn</a></li>
            <li><a href="https://github.com/sheidiz" target="_blank"><FaGithub className='inline mb-1 mr-1' /> GitHub</a></li>
            <li><a href="mailto:dizsheila07@gmail.com" target="_blank"><MdEmail className='inline mb-1 mr-1' /> Email</a></li>
            {language == "es" ?
              <li><a href={CvEs} download="Diz Sheila - CV.pdf"><FaFileDownload className='inline mb-1 mr-1' /> Descargar CV</a></li>
              :
              <li><a href={CvEn} download="Diz Sheila - Resume.pdf"><FaFileDownload className='inline mb-1 mr-1' /> Download Resume</a></li>
            }
          </ul>
        </div>
        <div className='py-2 bg-lightbox dark:bg-darkbox rounded-2xl flex flex-col items-center justify-center text-white font-medium'>
          <img src={ArgentinaFlag} alt="Bandera Argentina" className='pb-2' />
          Buenos Aires, Argentina
        </div>
      </div>
    </section>
  )
}

export default About;