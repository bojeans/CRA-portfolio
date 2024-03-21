import React, { useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-center items-center p-1">
      <button
        className={`dark-mode-toggle ${darkMode ? "dark" : "light"}`}
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <IoSunnyOutline className="text-2xl hover:bg-gray-100 hover:text-black hover:font-bold dark:hover:text-black hover:rounded dark:text-yellow-300" />
        ) : (
          <MdOutlineDarkMode className="text-2xl hover:bg-gray-100 hover:text-black hover:font-bold text-gray-300 hover:rounded" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
