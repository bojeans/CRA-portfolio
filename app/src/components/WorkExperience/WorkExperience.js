import React from "react";
import WorkExpNonTech from "./WorkExpNonTech";
import WorkExpTech from "./WorkExpTech";

const WorkExperience = () => {
  return (
    <section id="work-experience" className="scroll-mt-20">
      <div className="container mx-auto p-4 workexperience-page">
        <h1 className="text-3xl font-bold text-center mt-6 mb-4 md:text-6xl">
          Work Experience
        </h1>

        <WorkExpTech />
        <WorkExpNonTech />
      </div>
    </section>
  );
};

export default WorkExperience;
