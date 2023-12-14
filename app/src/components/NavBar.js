import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaFacebookF, FaLinkedin, FaRegUser } from "react-icons/fa";
import cv from "../assets/cv.pdf";

// social link global variables
const github = process.env.REACT_APP_GITHUB_ENDPOINT;
const facebook = process.env.REACT_APP_FACEBOOK_ENDPOINT;
const linkedin = process.env.REACT_APP_LINKEDIN_ENDPOINT;

const SocialIcon = ({ icon, href }) => {
  return (
    <li className="mr-2 hover:bg-gray-700">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="hover:text-white"
      >
        {icon}
      </a>
    </li>
  );
};

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const NavItem = ({ label, to, onClick }) => {
    return (
      <li className="mr-6 my-2 lg:my-0 justify-right">
        <Link
          to={to}
          spy={"true"}
          smooth={"true"}
          duration={500}
          className="text-gray-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium md:text-lg"
          onClick={onClick}
        >
          {label}
        </Link>
      </li>
    );
  };

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-gray-50 text-2xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
          >
            My Portfolio
          </Link>

          <div className="hidden md:flex items-center justify-evenly flex-grow">
            <ul className="flex ">
              <NavItem to="/" label="home" />
              <NavItem to="/about" label="about" />
              <NavItem to="/projects" label="projects" />
            </ul>

            <ul className="flex text-white">
              <SocialIcon icon={<FaRegUser />} href={cv} />
              <SocialIcon icon={<FaLinkedin />} href={linkedin} />
              <SocialIcon icon={<FaGithub />} href={github} />
              <SocialIcon icon={<FaFacebookF />} href={facebook} />
            </ul>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isNavOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isNavOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isNavOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="text-gray-50 px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
          <Link
            to="/"
            className="text-gray-50 hover:bg-gray-100 hover:text-black items-center justify-center flex px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-50 hover:bg-gray-100 hover:text-black items-center justify-center flex px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-gray-50 hover:bg-gray-100 hover:text-black items-center justify-center flex px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
