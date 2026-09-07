import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteShell from './components/SiteShell'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteShell />}>
          <Route index element={<LandingPage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="projects" element={<WorkPage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="work" element={<Navigate to="/projects" replace />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
