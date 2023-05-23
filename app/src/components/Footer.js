import { FaGithub, FaFacebookF, FaLinkedin, FaRegUser } from "react-icons/fa";
import cv from "../assets/cv.pdf";

const github = "https://github.com/bojeans";
const facebook = "https://www.facebook.com/chris.anderson.58152/";
const linkedin = "https://www.linkedin.com/in/chris-anderson-4b289b189/";

const Footer = () => {
  return (
    <>
      <div className="ml-3 md:text-2xl text-1.5xl mt-10 mb-2">
        <p>Chris Anderson</p>
        <p>Web Developer 2020 - present date </p>
      </div>
      <div className="flex items-center justify-center font-bold ml-3">
        <ul>
          <li className="mb-3">
            <a href={cv} target="_blank" rel="noreferrer">
              <FaRegUser />
            </a>
          </li>
          <li className="mb-3 text-blue-800">
            <a href={linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li className="mb-3">
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
          <li className="mb-3 text-blue-800">
            <a href={facebook} target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
