import { useContext } from "react";
import { DarkModeContext } from "./contexts/DarkModeContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/layout/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <HelmetProvider>
      <div className={isDarkMode ? "dark" : ""}>
        <Helmet>
          <title>Sheila Diz - Full Stack Java Developer</title>
          <meta
            name="description"
            content="En búsqueda de mi primer empleo como desarrolladora, donde pueda contribuir con mis habilidades y conocimientos en un entorno laboral dinámico."
          />
          <meta
            name="keywords"
            content="Sheila Diz, desarrolladora, full stack, back end, java, spring, trainee, empleo, trabajo, programación"
          />
          <link rel="icon" href="/favicon.ico" />
        </Helmet>
        <header className="p-2 font-primary">
          <Navbar />
        </header>
        <main className="pb-5 font-primary">
          <About />
          <Experience />
          <Projects />
          <ScrollToTopButton />
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
