import About from "./sections/About"
import Experience from "./sections/Experience"
import Languages from "./sections/Languages"
import Navbar from "./components/Navbar"
import { LanguageProvider } from "./contexts/LanguageContext"
import Projects from "./sections/Projects"
import ScrollToTopButton from "./components/ScrollToTopButton"

function App() {

  return (
    <LanguageProvider>
      <div className="my-1 md:my-2">
        <header className="pb-2">
          <Navbar />
        </header>
        <main className="mb-3">
          <About />
          <Languages />
          <Experience />
          <Projects />
          <ScrollToTopButton />
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
