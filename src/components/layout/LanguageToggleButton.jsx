import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import EsFlag from "../../assets/es-flag.png";
import EnFlag from "../../assets/en-flag.png";

const LanguageToggleButton = () => {
  const { language, switchLanguage } = useLanguage();

  const handleLanguageSwitch = (lang) => {
    switchLanguage(lang);
  };

  return (
    <div className="flex justify-center gap-2 rounded-full border-2 border-[#CFCECE] bg-white py-1 pl-3 pr-3 shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.3)] transition-opacity duration-300 min-[500px]:pr-7">
      {language == "es" ? (
        <button
          aria-label="Change to English Language"
          onClick={() => handleLanguageSwitch("en")}
          className="flex w-fit items-center gap-x-2 text-sm font-semibold text-slate-500 md:text-base"
        >
          EN{" "}
          <img
            src={EnFlag}
            className="inline-block h-4 md:h-5"
            aria-hidden="true"
          />
        </button>
      ) : (
        <button
          aria-label="Cambiar a lenguaje español"
          onClick={() => handleLanguageSwitch("es")}
          className="flex w-fit items-center gap-x-2 text-sm font-semibold text-slate-500 md:text-base"
        >
          <img
            src={EsFlag}
            className="inline-block h-4 md:h-5"
            aria-hidden="true"
          />{" "}
          ES
        </button>
      )}
    </div>
  );
};

export default LanguageToggleButton;
