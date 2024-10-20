import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../translations/data";
import { FaRegCircleCheck } from "react-icons/fa6";

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="experience"
      className="mx-3 mt-3 grid max-w-[1400px] grid-cols-1 text-white md:mx-auto md:grid-cols-2 md:gap-x-3 md:px-2 2xl:px-0"
    >
      <div className="education-section rounded-2xl bg-tertiary p-4 dark:bg-secondary">
        <h3 className="text-xl font-medium">
          {language == "es" ? "Educación" : "Education"}
        </h3>
        <div className="flex justify-center p-3 text-lg">
          <div className="space-y-6 border-l-2 border-dashed">
            {t.education.map((item, i) => (
              <div key={i} className="relative w-full">
                <FaRegCircleCheck className="absolute top-0 z-10 -ml-3.5 h-7 w-7 rounded-full bg-tertiary text-light" />
                <div className="ml-6">
                  <h4 className="font-bold text-light">{item.title}</h4>
                  <p className="mt-1 max-w-screen-sm text-sm text-light/80">
                    {item.institution}
                  </p>
                  <p className="mt-1 max-w-screen-sm text-sm text-light/60">
                    {item.description}
                  </p>
                  <span className="mt-1 block text-sm font-semibold text-quaternary/75">
                    {item.dates}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="experience-section mt-3 rounded-2xl bg-tertiary p-4 dark:bg-secondary md:mt-0">
        <h3 className="text-xl font-medium">
          {language == "es" ? "Experiencia Laboral" : "Work Experience"}
        </h3>
        <div className="flex justify-center p-3 text-lg">
          <div className="space-y-6 border-l-2 border-dashed">
            {t.work.map((item, index) => (
              <div key={index} className="relative w-full">
                <FaRegCircleCheck className="absolute top-0 z-10 -ml-3.5 h-7 w-7 rounded-full bg-tertiary text-light" />
                <div className="ml-6">
                  <h4 className="font-semibold text-light">{item.title}</h4>
                  <p className="mt-1 max-w-screen-sm text-sm text-light/80">
                    {item.institution}
                  </p>
                  <ul className="ml-3 mt-1 max-w-screen-sm list-disc text-sm text-light/60">
                    {item.description.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                  <span className="mt-1 block text-sm font-semibold text-quaternary/75">
                    {item.dates}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
