import React, { useState } from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "./utils/DarkModeToggle";
import { FaHome } from "react-icons/fa";

// Shared react-scroll props so every link scrolls smoothly and
// highlights itself while its section is in view (scroll-spy).
const scrollProps = {
  smooth: true,
  spy: true,
  duration: 500,
  offset: -64, // height of the sticky navbar (h-16)
  activeClass: "bg-gray-100 text-black font-bold",
};

const SECTIONS = [
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "qualifications", label: "Qualifications" },
  { to: "projects", label: "Projects" },
  { to: "work-experience", label: "Work Exp" },
];

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeMenu = () => setIsNavOpen(false);
  const toggleMenu = () => setIsNavOpen((open) => !open);

  const MobileLink = ({ to, label }) => (
    <div className="w-full flex justify-center">
      <Link
        {...scrollProps}
        to={to}
        onClick={closeMenu}
        className="cursor-pointer text-gray-50 hover:bg-gray-100 hover:text-black hover:font-bold text-center px-3 py-2 rounded-md text-base font-medium"
      >
        {label}
      </Link>
    </div>
  );

  const NavItem = ({ label, to }) => (
    <li className="mr-4 my-2 lg:my-0">
      <Link
        {...scrollProps}
        to={to}
        className="cursor-pointer text-gray-50 hover:bg-gray-100 hover:text-black hover:font-bold px-3 py-2 rounded-md text-sm font-medium md:text-lg lg:text-xl"
      >
        {label}
      </Link>
    </li>
  );

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              {...scrollProps}
              to="home"
              onClick={closeMenu}
              className="cursor-pointer text-gray-50 text-xl hover:bg-gray-100 hover:text-black hover:font-bold px-3 py-2 rounded-md font-medium"
            >
              <FaHome className="text-3xl" aria-label="Home Page" />
            </Link>
          </div>
          <div className="md:hidden flex items-center justify-center flex-grow">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isNavOpen}
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
              {SECTIONS.map((item) => (
                <NavItem key={item.to} to={item.to} label={item.label} />
              ))}
            </ul>
            <DarkModeToggle />
          </div>
        </div>
      </div>
      <div
        className={`${isNavOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <MobileLink to="home" label="Home" />
        {SECTIONS.map((item) => (
          <MobileLink key={item.to} to={item.to} label={item.label} />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
