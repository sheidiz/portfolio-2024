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
        {t.projects.map((p, i) => (
          <div key={i} className="bg-tertiary dark:bg-secondary rounded-2xl p-4 flex flex-col items-center justify-evenly">
            <h6 className='mb-1 text-quaternary font-semibold text-xl'>{p.title}</h6>
            <p className='text-light text-center text-sm'>{p.description}</p>
            <ul className='my-2 flex flex-wrap justify-center gap-2'>
              {p.technologies.map((tech, i) => (
                <li key={i} className='rounded-2xl bg-quaternary px-2 py-1 text-secondary text-xs'>{tech}</li>
              ))}
            </ul>
            <div className='my-2 flex flex-wrap justify-center gap-2'>
              {p.web && <a href={p.web}><MdLink /></a>}
              {p.repository && <a href={p.repository}><FaGithub /></a>}
              {p.figma && <a href={p.figma}><FaFigma /></a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;