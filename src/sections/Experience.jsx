import React from 'react'
import Accordion from '../components/Accordion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations/data';

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id='experience' className='max-w-4xl mx-3 mt-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-x-3 text-white'>
      <div className="education-section">
        <Accordion name={language == "es" ? "Educación" : "Education"}>
          <div className="flex justify-center">
            <div className="space-y-6 border-l-2 border-dashed">
              {t.education.map((item, i)=>(
                <div key={i} className="relative w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="bg-light absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-tertiary">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
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
        </Accordion>
      </div>
      <div className="experience-section mt-3 md:mt-0">
        <Accordion name={language == "es" ? "Experiencia Laboral" : "Work Experience"}>
          <h4 className='mb-1 font-bold text-light'>Ukelele Growth Marketing</h4>
          <div className="flex justify-center">
            <div className="space-y-6 border-l-2 border-dashed">
              {t.work.map((item, i)=>(
                <div key={i} className="relative w-full">
                <div className="ml-6">
                  <h4 className="font-semibold text-light">{item.title}</h4>
                  <p className="mt-1 max-w-screen-sm text-sm text-light/60">{item.description}</p>
                  <span className="mt-1 block text-sm font-semibold text-quaternary/50">{item.dates}</span>
                </div>
              </div>
              ))}  
            </div>
          </div>
        </Accordion>
      </div>
    </section>
  )
}

export default Experience