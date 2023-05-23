import cv from "../assets/cv.pdf";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FaGithub, FaFacebookF, FaLinkedin, FaRegUser } from "react-icons/fa";

const github = "https://github.com/bojeans";

const About = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl font-bold text-center mt-6 mb-4 md:text-6xl">
        About Me
      </h1>

      <div className="flex text-3xl items-center justify-center font-bold ml-3 md:text-2xl">
        <ul>
          <li className="mb-3">
            <a href={cv} target="_blank" rel="noreferrer">
              <FaRegUser />
            </a>
          </li>
          <li className="mb-3 text-blue-800">
            <a
              href="https://www.linkedin.com/in/chris-anderson-4b289b189/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="mb-3">
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
          <li className="mb-3 text-blue-800">
            <a
              href="https://www.facebook.com/chris.anderson.58152/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default About;
