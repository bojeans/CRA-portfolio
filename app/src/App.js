import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import About from "./components/AboutMe/About";
import Projects from "./components/Projects/Projects";
import ProjectsNew from "./components/Projects/ProjectsNew";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Contact from "./components/Contact";
import Skills from "./components/Skills/Skills";
import { DarkModeProvider } from "./components/utils/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projectsNew" element={<ProjectsNew />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
