import React from 'react';
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../translations/data";
import { FaFigma, FaGithub } from 'react-icons/fa';
import { MdLink } from 'react-icons/md';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className='max-w-4xl mx-3 mt-3 md:mx-auto'>
      <div className='mb-3 bg-lightbox dark:bg-darkbox rounded-2xl p-4'>
        <h5 className='text-xl font-semibold text-white'>{language == "es" ? "Proyectos Personales" : "Personal Projects"}</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {t.projects && t.projects.map((p, i) => (
          <div key={i} className="bg-tertiary/90 dark:bg-secondary/90 rounded-2xl p-4 flex flex-col items-center justify-evenly hover:bg-tertiary hover:dark:bg-secondary">
            <h6 className='mb-1 text-quaternary font-semibold text-xl'>{p.title}</h6>
            <p className='text-light text-center text-sm select-none'>{p.description}</p>
            <div className='mt-5 relative h-44 md:h-52 w-full lg:w-4/5 mx-auto'>
              <img src={p.image2} alt={p.title + "2"} className='h-36 md:h-44 absolute top-1 left-20 sm:left-28 md:left-20 rotate-3 shadow-xl z-10 duration-150 hover:scale-110 hover:z-30' />
              <img src={p.image1} alt={p.title + "1"} className='h-36 md:h-44 absolute top-0 -left-1 shadow-xl z-20 duration-150 hover:scale-110' />
            </div>
            <ul className='mb-2 flex flex-wrap justify-center gap-2'>
              {p.technologies.map((tech, i) => (
                <li key={i} className='rounded-2xl bg-quaternary px-2 py-1 text-secondary text-xs'>{tech}</li>
              ))}
            </ul>
            <div className='mt-2 flex flex-wrap justify-center gap-4 text-lg text-light'>
              {p.web && <a href={p.web} target='_blank' className='hover:scale-110'><MdLink /></a>}
              {p.repository && <a href={p.repository} target='_blank' className='hover:scale-110'><FaGithub /></a>}
              {p.figma && <a href={p.figma} target='_blank' className='hover:scale-110'><FaFigma /></a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;