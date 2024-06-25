import React from "react";
import { useDarkMode } from "./DarkModeContext";
import DarkModeLayout from "./DarkModeLayout";

const ContainerBackground = ({ children }) => {
  const { darkMode } = useDarkMode();

  if (darkMode) {
    return <DarkModeLayout>{children}</DarkModeLayout>;
  }

  return (
    <div className="card p-8 m-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl bg-white text-black">
      {children}
    </div>
  );
};

export default ContainerBackground;
