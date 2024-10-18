import React from 'react'
import Accordion from '../components/Accordion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations/data';
import { FaRegCircleCheck } from 'react-icons/fa6';

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id='experience' className='max-w-4xl mx-3 mt-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-x-3 text-white'>
      <div className="education-section bg-tertiary dark:bg-secondary rounded-2xl p-4">
        <h3 className='text-xl font-medium'>{language == "es" ? "Educación" : "Education"}</h3>
        <div className="flex justify-center p-3 text-lg">
          <div className="space-y-6 border-l-2 border-dashed">
            {t.education.map((item, i) => (
              <div key={i} className="relative w-full">
                <FaRegCircleCheck className="bg-tertiary absolute top-0 z-10 -ml-3.5 h-7 w-7 rounded-full text-light" />
                <div className="ml-6">
                  <h4 className="font-bold text-light">{item.title}</h4>
                  <p className="mt-1 max-w-screen-sm text-sm text-light/80">{item.institution}</p>
                  <p className="mt-1 max-w-screen-sm text-sm text-light/60">{item.description}</p>
                  <span className="mt-1 block text-sm font-semibold text-quaternary/50">{item.dates}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="experience-section mt-3 md:mt-0 bg-tertiary dark:bg-secondary rounded-2xl p-4">
        <h3 className='text-xl font-medium'>{language == "es" ? "Experiencia Laboral" : "Work Experience"}</h3>
        <div className="flex justify-center p-3 text-lg">
          <div className="space-y-6 border-l-2 border-dashed">
            {t.work.map((item, index) => (
              <div key={index} className="relative w-full">
                <FaRegCircleCheck className="bg-tertiary absolute top-0 z-10 -ml-3.5 h-7 w-7 rounded-full text-light" />
                <div className="ml-6">
                  <h4 className="font-semibold text-light">{item.title}</h4>
                  <p className="mt-1 max-w-screen-sm text-sm text-light/80">{item.institution}</p>
                  <ul className="list-disc mt-1 ml-3 max-w-screen-sm text-sm text-light/60">
                    {item.description.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                  <span className="mt-1 block text-sm font-semibold text-quaternary/50">{item.dates}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience