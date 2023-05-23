import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
  FaGit,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="text-3xl md:text-6xl">
      <NavBar />
      <h1 className="font-bold text-center mt-6 mb-4">About Me</h1>
      <div className="text-2xl text-center ml-3 grid grid-cols-7 space-y-0 md:text-3xl">
        <FaReact />
        <FaNode />
        <FaHtml5 />
        <FaCss3 />
        <FaJs />
        <FaGithub />
        <FaGit />
      </div>

      <Footer />
    </div>
  );
};

export default About;
