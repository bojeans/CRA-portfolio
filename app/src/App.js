import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="grid m-8 place-content-center">
      <NavBar />

      <Routes>
        <Route path="/home" element={<LandingPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
