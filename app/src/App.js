import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import About from "./components/AboutMe/About";
import Projects from "./components/Projects/Projects";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Qualifications from "./components/Qualifications";
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
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
