import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperience = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-800 pb-2">
          Tech Related
        </h2>
        <div className="flex flex-wrap justify-center">
          <WorkExperienceCard
            company="ABC Company"
            position="Software Developer"
            date="January 2020 - Present"
            description="Worked on developing and maintaining web applications using React and Node.js."
          />
          <WorkExperienceCard
            company="XYZ Corporation"
            position="Front-end Developer"
            date="June 2018 - December 2019"
            description="Collaborated with the design team to implement responsive user interfaces for various projects."
          />
        </div>
        <h2 className="text-3xl font-bold mt-8 border-b-2 border-gray-800 pb-2">
          Non-Tech Related
        </h2>
        <div className="flex flex-wrap justify-center">
          <WorkExperienceCard
            company="ABC Company"
            position="Software Developer"
            date="January 2020 - Present"
            description="Worked on developing and maintaining web applications using React and Node.js."
          />
          <WorkExperienceCard
            company="XYZ Corporation"
            position="Front-end Developer"
            date="June 2018 - December 2019"
            description="Collaborated with the design team to implement responsive user interfaces for various projects."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkExperience;
