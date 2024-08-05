import About from "./sections/About"
import Experience from "./sections/Experience"
import Languages from "./sections/Languages"
import Navbar from "./components/Navbar"
import { LanguageProvider } from "./contexts/LanguageContext"

function App() {

  return (
    <LanguageProvider>
      <div className="my-1 md:my-2">
        <Navbar />
        <main>
          <About />
          <Languages />
          <Experience />
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
