import React from "react";

const ContainerBackground = ({ children }) => {
  return (
    <div className="about-card dark-border rounded-lg shadow-lg p-8 m-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
      {children}
    </div>
  );
};

export default ContainerBackground;
