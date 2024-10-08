import React from 'react'
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations/data';
import htmlIcon from "./../assets/icons/html.png";
import cssIcon from "./../assets/icons/css.png";
import jsIcon from "./../assets/icons/javascript.png";
import reactIcon from "./../assets/icons/react.png";
import viteIcon from "./../assets/icons/vite.png";
import bootstrapIcon from "./../assets/icons/bootstrap.png";
import tailwindIcon from "./../assets/icons/tailwind.png";
import figmaIcon from "./../assets/icons/figma.png";
import javaIcon from "./../assets/icons/java.png";
import springIcon from "./../assets/icons/spring.png";
import springjpaIcon from "./../assets/icons/springjpa.png";
import gitIcon from "./../assets/icons/git.png";
import mysqlIcon from "./../assets/icons/mysql.png";
import junitIcon from "./../assets/icons/junit5.png";
import mockitoIcon from "./../assets/icons/mockito.png";

const Languages = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className='max-w-4xl mx-3 md:mt-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-3'>
      <div className='bg-lightbox dark:bg-darkbox rounded-2xl p-4 text-white'>
        <h3 className='text-xl font-semibold'>Frontend {language == "es"? 'y herramientas' : 'and tools'}</h3>
        <ul className='mt-4 flex flex-wrap gap-4'>
          <li className='flex flex-col items-center text-sm font-medium'><img src={htmlIcon} className='h-6' /> HTML</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src={cssIcon} className='h-6' /> CSS</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src={jsIcon} className='h-6' /> JavaScript</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src={reactIcon} className='h-6' /> React</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src={viteIcon} className='h-6' /> Vite</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src={bootstrapIcon} className='h-6' /> Bootstrap</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src={tailwindIcon} className='h-6' /> Tailwind</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src={figmaIcon} className='h-6' /> Figma</li>
        </ul>
      </div>
      <div className='bg-lightbox dark:bg-darkbox rounded-2xl p-4 text-white'>
        <h3 className='text-xl font-semibold'>Backend {language == "es"? 'y herramientas' : 'and tools'}</h3>
        <ul className='mt-4 flex flex-wrap gap-4'>
          <li className='flex flex-col items-center text-sm font-medium'><img src={javaIcon} className='h-6' /> Java</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src={springIcon} className='h-6' /> Spring</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src={springjpaIcon} className='h-6' /> Spring JPA</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src={gitIcon} className='h-6' /> Git</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src={mysqlIcon} className='h-6' /> MySQL</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src={junitIcon} className='h-6' /> JUnit</li>
          <li className='flex flex-col items-center text-sm font-medium'><img src={mockitoIcon} className='h-6' /> Mockito</li>
          {/*<li className='flex flex-col items-center text-sm font-medium'><img src='/src/assets/icons/swagger.png' className='h-6' /> Swagger</li>*/}
        </ul>
      </div>
    </section>
  )
}

export default Languages;
