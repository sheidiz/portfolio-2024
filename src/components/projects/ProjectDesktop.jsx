import React from "react";
import { motion } from "framer-motion";
import { FaFigma, FaGithub } from "react-icons/fa";
import { MdLink } from "react-icons/md";

export const ProjectDesktop = ({ project }) => {
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
    <motion.div
      className="flex flex-col items-center justify-evenly rounded-2xl border border-secondary bg-primary/80 p-4 hover:bg-primary dark:bg-dm-primary/90 hover:dark:bg-dm-primary"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <h6 className="mb-1 text-xl font-semibold text-tertiary">{title}</h6>
      <p className="select-none text-center text-sm text-light">
        {description}
      </p>
      <div className="relative mx-auto mt-5 h-44 w-64 md:h-52 md:w-full min-[1100px]:flex min-[1100px]:justify-evenly">
        <img
          src={images[1]}
          alt={title + "2"}
          className="absolute left-[18%] top-0 z-10 h-36 shadow-xl duration-150 hover:z-30 hover:scale-110 sm:left-28 md:left-20 md:h-44 lg:left-44 min-[1100px]:static min-[1100px]:left-[50%]"
        />
        <img
          src={images[0]}
          alt={title + "1"}
          className="absolute -left-2 top-0 z-20 h-36 shadow-xl duration-150 hover:scale-110 md:h-44 min-[1100px]:static"
        />
      </div>
      <ul className="mb-2 flex flex-wrap justify-center gap-2">
        {technologies.map((tech, i) => (
          <li
            key={i}
            className="rounded-2xl bg-tertiary px-2 py-1 text-xs text-primary"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-2 flex flex-wrap justify-center gap-4 text-lg text-light">
        {repository && (
          <a
            href={repository}
            target="_blank"
            className="hover:scale-110"
            aria-label={title + " Link GitHub"}
          >
            <FaGithub />
          </a>
        )}
        {web && (
          <a
            href={web}
            target="_blank"
            className="hover:scale-110"
            aria-label={title + " Link Demo"}
          >
            <MdLink />
          </a>
        )}
        {figma && (
          <a
            href={figma}
            target="_blank"
            className="hover:scale-110"
            aria-label={title + " Link Figma"}
          >
            <FaFigma />
          </a>
        )}
        {video && (
          <a
            href={video}
            target="_blank"
            className="hover:scale-110"
            aria-label={title + " Link Video"}
          >
            <FaYoutube />
          </a>
        )}
      </div>
    </motion.div>
  );
};
