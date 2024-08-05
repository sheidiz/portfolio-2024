import About from "./components/About"
import Languages from "./components/Languages"
import Navbar from "./components/Navbar"
import { LanguageProvider } from "./contexts/LanguageContext"

function App() {

  return (
    <LanguageProvider>
      <div>
        <Navbar />
        <main>
          <About />
          <Languages />
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
