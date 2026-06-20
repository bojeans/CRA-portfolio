import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const getInitialDarkMode = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const stored = window.localStorage.getItem("darkMode");
  if (stored !== null) {
    return stored === "true";
  }

  // Fall back to the OS / browser preference on first visit.
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    window.localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
