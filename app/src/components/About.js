import cv from "../assets/cv.pdf";
import NavBar from "./NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl font-bold text-center mt-6 mb-4 md:text-6xl">
        About Me
      </h1>

      <div className="text-1.5xl text-blue-800 font-bold ml-3 md:text-2xl">
        <a href={cv} target="_blank" rel="noreferrer">
          1 Page CV/Resume
        </a>
      </div>
    </div>
  );
};

export default About;
