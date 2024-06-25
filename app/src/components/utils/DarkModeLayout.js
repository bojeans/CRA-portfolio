import React from "react";

const DarkModeLayout = ({ children }) => {
  return (
    <div className="card p-8 m-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl dark-mode">
      {children}
    </div>
  );
};

export default DarkModeLayout;
