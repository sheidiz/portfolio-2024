import React from "react";
import translations from "../translations/data";
import { useLanguage } from "../contexts/LanguageContext";
import Perfil from "../assets/Perfil.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Languages from "../components/Languages";
import BentoContainer from "../components/BentoContainer";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="about"
      className="mx-3 mt-3 grid max-w-[1400px] grid-cols-2 gap-2 md:mx-auto md:gap-3 md:px-2 lg:grid-cols-3 2xl:px-0"
    >
      <BentoContainer
        className="col-span-2 md:col-span-1"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h1 className="mb-1 text-2xl font-bold text-white md:text-3xl">
          Sheila Diz
        </h1>
        <h2 className="font-bold text-tertiary/80 md:text-xl">{t.title}</h2>
        <div className="my-3 h-2 w-28 border-t border-t-white"></div>
        <p className="mb-2 text-sm text-white md:text-base">
          {t.description[0]}
        </p>
        <p className="text-sm text-white md:text-base">{t.description[1]}</p>
      </BentoContainer>
      <motion.div
        className="col-span-2 flex h-full w-full gap-2 md:col-span-1 md:gap-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={Perfil}
          alt="Foto de perfil"
          className="h-auto max-h-full w-1/2 rounded-2xl border border-secondary object-cover sm:w-full md:w-3/4"
          variants={item}
        />
        <ul className="flex w-1/2 flex-col justify-between gap-y-2 md:col-span-1 md:w-1/4 md:gap-y-3">
          <motion.li
            variants={item}
            className="flex h-full w-full items-center justify-center rounded-2xl border border-secondary bg-lightbox p-4 text-2xl text-white dark:bg-darkbox min-[500px]:text-3xl lg:text-4xl"
          >
            <a
              href="https://www.linkedin.com/in/sheila-diz"
              target="_blank"
              aria-label="Link LinkedIn"
            >
              <FaLinkedin className="mb-1 mr-1 inline" />
            </a>
          </motion.li>
          <motion.li
            variants={item}
            className="flex h-full w-full items-center justify-center rounded-2xl border border-secondary bg-lightbox p-4 text-2xl text-white dark:bg-darkbox min-[500px]:text-3xl lg:text-4xl"
          >
            <a
              href="https://github.com/sheidiz"
              target="_blank"
              aria-label="Link GitHub"
            >
              <FaGithub className="mb-1 mr-1 inline" />
            </a>
          </motion.li>
          <motion.li
            variants={item}
            className="flex h-full w-full items-center justify-center rounded-2xl border border-secondary bg-lightbox p-4 text-2xl text-white dark:bg-darkbox min-[500px]:text-3xl lg:text-4xl"
          >
            <a
              href="mailto:dizsheila07@gmail.com"
              target="_blank"
              aria-label="Link Mail"
            >
              <MdEmail className="mb-1 mr-1 inline" />
            </a>
          </motion.li>
        </ul>
      </motion.div>
      <Languages />
    </section>
  );
};

export default About;
