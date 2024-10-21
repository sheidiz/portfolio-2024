import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../translations/data";
import { ProjectMobile } from "../components/projects/ProjectMobile";
import { ProjectDesktop } from "../components/projects/ProjectDesktop";
import BentoContainer from "../components/BentoContainer";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className="mt-5">
      <h5 className="mb-5 text-xl font-semibold text-white">
        {language == "es" ? "Proyectos Personales" : "Personal Projects"}
      </h5>
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
