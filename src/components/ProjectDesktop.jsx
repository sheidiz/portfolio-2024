import React from 'react'
import { FaFigma, FaGithub } from 'react-icons/fa';
import { MdLink } from 'react-icons/md';

export const ProjectDesktop = ({ project }) => {

  const { title, description, images, technologies, web, repository, figma } = project;

  return (
    <div className="bg-tertiary/90 dark:bg-secondary/90 rounded-2xl p-4 flex flex-col items-center justify-evenly hover:bg-tertiary hover:dark:bg-secondary">
      <h6 className='mb-1 text-quaternary font-semibold text-xl'>{title}</h6>
      <p className='text-light text-center text-sm select-none'>{description}</p>
      <div className='mt-5 relative h-44 md:h-52 w-64 md:w-full lg:w-4/5 mx-auto'>
        <img src={images[1]} alt={title + "2"} className='h-36 md:h-44 absolute top-1 left-[18%] sm:left-28 md:left-20 rotate-3 shadow-xl z-10 duration-150 hover:scale-110 hover:z-30' />
        <img src={images[0]} alt={title + "1"} className='h-36 md:h-44 absolute top-0 -left-2 shadow-xl z-20 duration-150 hover:scale-110' />
      </div>
      <ul className='mb-2 flex flex-wrap justify-center gap-2'>
        {technologies.map((tech, i) => (
          <li key={i} className='rounded-2xl bg-quaternary px-2 py-1 text-secondary text-xs'>{tech}</li>
        ))}
      </ul>
      <div className='mt-2 flex flex-wrap justify-center gap-4 text-lg text-light'>
        {repository && <a href={repository} target='_blank' className='hover:scale-110'><FaGithub /></a>}
        {web && <a href={web} target='_blank' className='hover:scale-110'><MdLink /></a>}
        {figma && <a href={figma} target='_blank' className='hover:scale-110'><FaFigma /></a>}
      </div>
    </div>
  )
}
