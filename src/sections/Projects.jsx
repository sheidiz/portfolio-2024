import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../translations/data";
import { FaFigma, FaGithub } from "react-icons/fa";
import { MdLink } from "react-icons/md";
import { ProjectDesktop } from "../components/ProjectDesktop";
import { ProjectMobile } from "../components/ProjectMobile";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className="mx-3 mt-3 max-w-4xl md:mx-auto">
      <div className="mb-3 rounded-2xl bg-lightbox p-4 dark:bg-darkbox">
        <h5 className="text-xl font-semibold text-white">
          {language == "es" ? "Proyectos Personales" : "Personal Projects"}
        </h5>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {t.projects && (
          <>
            <ProjectMobile project={t.projects[0]} />
            <ProjectDesktop project={t.projects[1]} />
            <ProjectDesktop project={t.projects[2]} />
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
