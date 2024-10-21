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

const tools = {
  frontend: [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "Vite", icon: viteIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Tailwind", icon: tailwindIcon },
    { name: "Figma", icon: figmaIcon },
  ],
  backend: [
    { name: "Java", icon: javaIcon },
    { name: "Spring", icon: springIcon },
    { name: "JUnit", icon: junitIcon },
    { name: "Swagger", icon: swaggerIcon },
    { name: "Postman", icon: postmanIcon },
    { name: "Git", icon: gitIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "PostgreSQL", icon: postgresqlIcon },
  ],
};

const ToolItem = ({ name, icon }) => (
  <li className="flex flex-col items-center text-xs font-medium sm:text-sm">
    <img
      src={icon}
      className="h-6 drop-shadow-white"
      alt={`${name} icon`}
      aria-hidden="true"
    />
    {name}
  </li>
);

const Languages = () => {
  const { language } = useLanguage();
  const sectionTitle = (section) =>
    `${section} ${language === "es" ? "y herramientas" : "and tools"}`;

  return (
    <div className="col-span-2 grid grid-cols-1 gap-y-3 md:mx-auto md:mt-3 md:grid-cols-2 md:gap-x-3 lg:col-span-1 lg:mt-0 lg:grid-cols-1">
      <BentoContainer
        className="text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h3 className="text-xl font-medium">{sectionTitle("Frontend")}</h3>
        <ul className="mt-4 flex flex-wrap gap-4">
          {tools.frontend.map((tool) => (
            <ToolItem key={tool.name} {...tool} />
          ))}
        </ul>
      </BentoContainer>
      <BentoContainer
        className="text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h3 className="text-xl font-medium">{sectionTitle("Backend")}</h3>
        <ul className="mt-4 flex flex-wrap gap-3 sm:gap-4">
          {tools.backend.map((tool) => (
            <ToolItem key={tool.name} {...tool} />
          ))}
        </ul>
      </BentoContainer>
    </div>
  );
};

export default Languages;
