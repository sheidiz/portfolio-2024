import React from "react";
import translations from "../../translations/data";
import { useLanguage } from "../../contexts/LanguageContext";

import DarkModeToggleButton from "./DarkModeToggleButton";
import LanguageToggleButton from "./LanguageToggleButton";

const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className="flex w-full max-w-[1400px] flex-col items-center gap-y-2 rounded-2xl bg-tertiary/90 px-2 py-2 align-middle dark:bg-primary/90 min-[500px]:flex-row min-[500px]:justify-between min-[500px]:px-4 sm:mx-1 md:py-3 lg:mx-auto">
      <ul className="flex w-full items-center justify-between gap-x-4 text-white min-[500px]:justify-start">
        <li className="font-semibold hover:scale-[102%]">
          <a href="#about">{t.menu.about}</a>
        </li>
        <li className="font-semibold hover:scale-[102%]">
          <a href="#experience">{t.menu.experience}</a>
        </li>
        <li className="font-semibold hover:scale-[102%]">
          <a href="#projects">{t.menu.projects}</a>
        </li>
      </ul>
      <div className="flex gap-4">
        <LanguageToggleButton />
        <DarkModeToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;
