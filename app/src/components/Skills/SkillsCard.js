import React from "react";
import CollapsibleText from "../utils/CollapsibleText";

const SkillsCard = ({ icon, experience, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 skills-page md:gap-y-6">
      <div className="h-full px-6 py-4 dark-border">
        <ul className="flex flex-wrap items-center justify-center font-bold text-gray-400 gap-6 text-3xl mt-2 mb-5 skills-icons overflow-x-auto md:text-4xl lg:text-5xl">
          {icon}
        </ul>
        <h3 className="text-lg text-center font-sans mb-2 work_experience_details">
          {experience}
        </h3>

        <p className="font-serif text-base work_experience_details">
          {description && <CollapsibleText text={description} />}
        </p>
      </div>
    </div>
  );
};

export default SkillsCard;
