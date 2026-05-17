import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ExperiencePage from './pages/ExperiencePage'
import SkillsPage from './pages/SkillsPage'
import EducationPage from './pages/EducationPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
