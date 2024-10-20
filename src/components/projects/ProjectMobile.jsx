import React from "react";
import { FaFigma, FaGithub, FaYoutube } from "react-icons/fa";
import { MdLink } from "react-icons/md";

export const ProjectMobile = ({ project }) => {
  const {
    title,
    description,
    images,
    technologies,
    web,
    repository,
    figma,
    video,
  } = project;

  return (
    <div className="flex flex-col items-center justify-evenly rounded-2xl bg-tertiary/90 p-4 hover:bg-tertiary dark:bg-secondary/90 hover:dark:bg-secondary">
      <h6 className="mb-1 text-xl font-semibold text-quaternary">{title}</h6>
      <p className="select-none text-center text-sm text-light">
        {description}
      </p>
      <div className="mx-auto mt-5 flex h-44 w-64 justify-evenly md:h-52 md:w-full lg:w-4/5">
        <img
          src={images[0]}
          alt={title + "1"}
          className="h-36 shadow-xl duration-150 hover:scale-110 md:h-44"
        />
        <img
          src={images[1]}
          alt={title + "2"}
          className="h-36 shadow-xl duration-150 hover:scale-110 md:h-44"
        />
        <img
          src={images[2]}
          alt={title + "3"}
          className="h-36 shadow-xl duration-150 hover:scale-110 md:h-44"
        />
      </div>
      <ul className="mb-2 flex flex-wrap justify-center gap-2">
        {technologies.map((tech, i) => (
          <li
            key={i}
            className="rounded-2xl bg-quaternary px-2 py-1 text-xs text-secondary"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-2 flex flex-wrap justify-center gap-4 text-lg text-light">
        {repository && (
          <a href={repository} target="_blank" className="hover:scale-110">
            <FaGithub />
          </a>
        )}
        {web && (
          <a href={web} target="_blank" className="hover:scale-110">
            <MdLink />
          </a>
        )}
        {figma && (
          <a href={figma} target="_blank" className="hover:scale-110">
            <FaFigma />
          </a>
        )}
        {video && (
          <a href={video} target="_blank" className="hover:scale-110">
            <FaYoutube />
          </a>
        )}
      </div>
    </div>
  );
};
