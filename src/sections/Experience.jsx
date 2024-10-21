import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../translations/data";
import { FaRegCircleCheck } from "react-icons/fa6";
import BentoContainer from "../components/BentoContainer";

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="experience"
      className="mt-3 grid grid-cols-1 text-white md:grid-cols-2 md:gap-x-3"
    >
      <BentoContainer
        className=""
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <h3 className="text-xl font-medium">
          {language == "es" ? "Educación" : "Education"}
        </h3>
        <div className="flex justify-center p-3 text-lg">
          <div className="space-y-6 border-l-2 border-dashed">
            {t.education.map((item, i) => (
              <div key={i} className="relative w-full">
                <FaRegCircleCheck className="absolute top-0 z-10 -ml-3.5 h-7 w-7 rounded-full bg-secondary text-light" />
                <div className="ml-6">
                  <h4 className="font-bold text-light">{item.title}</h4>
                  <p className="mt-1 max-w-screen-sm text-sm text-light/80">
                    {item.institution}
                  </p>
                  <p className="mt-1 max-w-screen-sm text-sm text-light/60">
                    {item.description}
                  </p>
                  <span className="mt-1 block text-sm font-semibold text-tertiary/75">
                    {item.dates}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BentoContainer>
      <BentoContainer
        className="mt-3 md:mt-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <h3 className="text-xl font-medium">
          {language == "es" ? "Experiencia Laboral" : "Work Experience"}
        </h3>
        <div className="flex justify-center p-3 text-lg">
          <div className="space-y-6 border-l-2 border-dashed">
            {t.work.map((item, index) => (
              <div key={index} className="relative w-full">
                <FaRegCircleCheck className="absolute top-0 z-10 -ml-3.5 h-7 w-7 rounded-full bg-secondary text-light" />
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
                  <span className="mt-1 block text-sm font-semibold text-tertiary/75">
                    {item.dates}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BentoContainer>
    </section>
  );
};

export default Experience;
