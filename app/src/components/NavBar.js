import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./utils/DarkModeToggle";

const MobileLink = ({ to, label }) => {
  return (
    <div className="w-full flex justify-center">
      <Link
        to={to}
        className="hover:w-1/3 text-gray-50 hover:bg-gray-100 hover:text-black hover:text-2xl hover:font-bold text-center px-3 py-2 rounded-md text-base font-medium"
      >
        {label}
      </Link>
    </div>
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
          className="text-gray-50 hover:bg-gray-100 hover:text-black hover:font-bold hover:text-2xl px-3 py-2 rounded-md text-sm font-medium md:text-lg"
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
            className="inline-block max-w-max text-gray-50 text-2xl hover:bg-gray-100 hover:text-black hover:font-bold hover:text-2xl px-3 py-2 rounded-md font-medium"
          >
            My Portfolio
          </Link>
          <DarkModeToggle />

          <div className="hidden md:flex items-center justify-evenly flex-grow">
            <ul className="flex ">
              <NavItem to="/" label="Home" />
              <NavItem to="/about" label="About" />
              <NavItem to="/projects" label="Projects" />
              <NavItem to="/work-experience" label="Work Experience" />
              <NavItem to="/contact" label="Contact" />
            </ul>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
        <MobileLink to="/" label="Home" />
        <MobileLink to="/about" label="About" />
        <MobileLink to="/projects" label="Projects" />
        <MobileLink to="/work-experience" label="Work Experience" />
        <MobileLink to="/contact" label="Contact" />
      </div>
    </nav>
  );
};

export default NavBar;
