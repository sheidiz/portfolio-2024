import React from 'react'
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations/data';

const Languages = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className='max-w-4xl mx-3 md:mt-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-3'>
      <div className='bg-lightbox dark:bg-darkbox rounded-2xl p-4 text-white'>
        <h3 className='text-xl font-semibold'>Frontend {language == "es"? 'y herramientas' : 'and tools'}</h3>
        <ul className='mt-4 flex flex-wrap gap-x-4 gap-y-2'>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/html.png' className='h-6' /> HTML</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/css.png' className='h-6' /> CSS</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/javascript.png' className='h-6' /> JavaScript</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/react.png' className='h-6' /> React</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/vite.png' className='h-6' /> Vite</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/bootstrap.png' className='h-6' /> Bootstrap</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/tailwind.png' className='h-6' /> Tailwind</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/figma.png' className='h-6' /> Figma</li>
        </ul>
      </div>
      <div className='bg-lightbox dark:bg-darkbox rounded-2xl p-4 text-white'>
        <h3 className='text-xl font-semibold'>Backend {language == "es"? 'y herramientas' : 'and tools'}</h3>
        <ul className='mt-4 flex flex-wrap gap-x-4 gap-y-2'>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/java.png' className='h-6' /> Java</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/spring.png' className='h-6' /> Spring</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/springjpa.png' className='h-6' /> Spring JPA</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/git.png' className='h-6' /> Git</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/mysql.png' className='h-6' /> MySQL</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/swagger.png' className='h-6' /> Swagger</li>
        </ul>
      </div>
    </section>
  )
}

export default Languages;