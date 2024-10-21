import React from "react";
import translations from "../../translations/data";
import { useLanguage } from "../../contexts/LanguageContext";

import DarkModeToggleButton from "./DarkModeToggleButton";
import LanguageToggleButton from "./LanguageToggleButton";

const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className="flex w-full flex-col items-center gap-y-2 rounded-2xl border border-secondary bg-primary p-2 align-middle dark:bg-dm-primary min-[500px]:flex-row min-[500px]:justify-between min-[500px]:px-4 sm:mt-1 md:py-3">
      <ul className="flex w-full items-center justify-evenly gap-x-4 text-white min-[500px]:justify-start min-[500px]:gap-x-6">
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
