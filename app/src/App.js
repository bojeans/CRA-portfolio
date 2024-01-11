import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import { DarkModeProvider } from "./components/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work-experience" element={<WorkExperience />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
