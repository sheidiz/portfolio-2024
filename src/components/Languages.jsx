import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import htmlIcon from "./../assets/icons/html.png";
import cssIcon from "./../assets/icons/css.png";
import jsIcon from "./../assets/icons/javascript.png";
import reactIcon from "./../assets/icons/react.png";
import viteIcon from "./../assets/icons/vite.png";
import bootstrapIcon from "./../assets/icons/bootstrap.png";
import tailwindIcon from "./../assets/icons/tailwind.png";
import figmaIcon from "./../assets/icons/figma.png";
import javaIcon from "./../assets/icons/java.png";
import springIcon from "./../assets/icons/spring.png";
import gitIcon from "./../assets/icons/git.png";
import mysqlIcon from "./../assets/icons/mysql.png";
import postgresqlIcon from "./../assets/icons/postgresql.png";
import postmanIcon from "./../assets/icons/postman.png";
import junitIcon from "./../assets/icons/junit5.png";
import swaggerIcon from "./../assets/icons/swagger.png";
import BentoContainer from "./BentoContainer";

const Languages = () => {
  const { language } = useLanguage();

  return (
    <div className="col-span-2 grid grid-cols-1 gap-y-3 md:mx-auto md:mt-3 md:grid-cols-2 md:gap-x-3 lg:col-span-1 lg:mt-0 lg:grid-cols-1">
      <BentoContainer
        className="text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h3 className="text-xl font-medium">
          Frontend {language == "es" ? "y herramientas" : "and tools"}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-4">
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={htmlIcon} className="h-6" /> HTML
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={cssIcon} className="h-6" /> CSS
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={jsIcon} className="h-6" /> JavaScript
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={reactIcon} className="h-6" /> React
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={viteIcon} className="h-6" /> Vite
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={bootstrapIcon} className="h-6" /> Bootstrap
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={tailwindIcon} className="h-6" /> Tailwind
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={figmaIcon} className="h-6" /> Figma
          </li>
        </ul>
      </BentoContainer>
      <BentoContainer
        className="text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h3 className="text-xl font-medium">
          Backend {language == "es" ? "y herramientas" : "and tools"}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-3 sm:gap-4">
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={javaIcon} className="h-6" /> Java
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={springIcon} className="h-6" /> Spring
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={gitIcon} className="h-6" /> Git
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={swaggerIcon} className="h-6" /> Swagger
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={mysqlIcon} className="h-6" /> MySQL
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={postgresqlIcon} className="h-6" /> PostgreSQL
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={postmanIcon} className="h-6" /> Postman
          </li>
          <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
            <img src={junitIcon} className="h-6" /> JUnit
          </li>
        </ul>
      </BentoContainer>
    </div>
  );
};

export default Languages;
