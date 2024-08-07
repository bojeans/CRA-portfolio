import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./utils/DarkModeToggle";
import { FaHome } from "react-icons/fa";

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
      <li className="mr-4 my-2 lg:my-0">
        <Link
          to={to}
          className="text-gray-50 hover:bg-gray-100 hover:text-black hover:font-bold px-3 py-2 rounded-md text-sm font-medium md:text-lg lg:text-xl"
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
          <div className="flex items-center">
            <Link
              to="/"
              className="text-gray-50 text-xl hover:bg-gray-100 hover:text-black hover:font-bold px-3 py-2 rounded-md font-medium"
            >
              <FaHome className="text-3xl" aria-label="Home Page" />
            </Link>
          </div>
          <div className="md:hidden flex items-center justify-center flex-grow">
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
          <div className="md:hidden">
            <DarkModeToggle />
          </div>
          <div className="hidden md:flex items-center justify-end flex-grow">
            <ul className="flex font-serif space-x-4">
              <NavItem to="/about" label="About" />
              <NavItem to="/skills" label="Skills" />
              <NavItem to="/qualifications" label="Qualifications" />
              <NavItem to="/projects" label="Projects" />
              <NavItem to="/work-experience" label="Work Exp" />
            </ul>
            <DarkModeToggle />
          </div>
        </div>
      </div>
      <div
        className={`${isNavOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <MobileLink to="/" label="Home" />
        <MobileLink to="/about" label="About" />
        <MobileLink to="/skills" label="Skills" />
        <MobileLink to="/qualifications" label="Qualifications" />
        <MobileLink to="/projects" label="Projects" />
        <MobileLink to="/work-experience" label="Work Exp" />
      </div>
    </nav>
  );
};

export default NavBar;
