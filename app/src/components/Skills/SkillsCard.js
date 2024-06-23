import React from "react";
// import CollapsibleText from "../utils/CollapsibleText";

const SkillsCard = ({ icon, experience, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 skills-page md:gap-y-6">
      <div className="h-full flex flex-col px-6 py-4 dark-border">
        <h2 className="text-lg text-center font-sans mb-2 md:mb-8 md:text-2xl work_experience_details">
          {experience}
        </h2>
        <ul className="flex-grow flex items-center justify-center flex-wrap font-bold text-gray-400 gap-6 text-3xl mt-2 mb-5 skills-icons md:text-4xl lg:text-5xl">
          {icon}
        </ul>
        {/* Uncomment the following block if you want to include the description */}
        {/* <p className="font-serif text-base work_experience_details">
          {description && <CollapsibleText text={description} />}
        </p> */}
      </div>
    </div>
  );
};

export default SkillsCard;
