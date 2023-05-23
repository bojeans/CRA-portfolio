import { FaGithub, FaFacebookF, FaLinkedin, FaRegUser } from "react-icons/fa";
import cv from "../assets/cv.pdf";

// social link global variables
const github = process.env.REACT_APP_GITHUB_ENDPOINT;
const facebook = process.env.REACT_APP_FACEBOOK_ENDPOINT;
const linkedin = process.env.REACT_APP_LINKEDIN_ENDPOINT;

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-end py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="ml-3 md:text-2xl text-1.5xl mt-10 mb-2 hidden md:block">
          <p>Chris Anderson</p>
          <p>Web Developer 2020 - present date </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between h-16">
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li className="mb-3 hover:bg-gray-400 px-2 py-1 rounded-md">
              <a href={cv} target="_blank" rel="noreferrer">
                <FaRegUser />
              </a>
            </li>
            <li className="mb-3 hover:bg-gray-400 px-2 py-1 rounded-md text-blue-800">
              <a href={linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li className="mb-3 hover:bg-gray-400 px-2 py-1 rounded-md">
              <a href={github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </li>
            <li className="mb-3 hover:bg-gray-400 px-2 py-1 rounded-md text-blue-800">
              <a href={facebook} target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
