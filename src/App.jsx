import { useContext } from "react"
import { DarkModeContext } from "./contexts/DarkModeContext"
import Navbar from "./components/Navbar"
import ScrollToTopButton from "./components/ScrollToTopButton"
import About from "./sections/About"
import Languages from "./sections/Languages"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"

function App() {
  const { isDarkMode } = useContext(DarkModeContext); 

  return (
      <div>
        <header className="py-2">
          <Navbar />
        </header>
        <main className="pb-3">
          <About />
          <Languages />
          <Experience />
          <Projects />
          <ScrollToTopButton />
        </main>
      </div>
  )
}

export default App
