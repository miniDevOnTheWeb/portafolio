import { Navbar } from "./components/Navbar"
import { ContactPage } from "./Pages/ContactPage"
import { PersonalData } from "./Pages/PersonalData"
import { SkillsPage } from "./Pages/Skills"
import { StudiesPage } from "./Pages/StudiesPage"
import { WelcomePage } from "./Pages/WelcomePage"
import './index.css'
import { ExplainedSkillsPage } from "./Pages/ExplainedSkills"
function App() {
  return (
    <main className="main-page">
      <Navbar />
      <WelcomePage />
      <PersonalData />
      <SkillsPage />
      <StudiesPage />
      <ContactPage />
      <ExplainedSkillsPage />
    </main>
  )
}

export default App
