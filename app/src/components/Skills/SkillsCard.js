import React from "react";
import CollapsibleText from "../utils/CollapsibleText";

const SkillsCard = ({ icon, experience, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 sm:w-1/2 lg:w-1/3 workexperience-page">
      <div className="px-6 py-4">
        <ul className="flex font-bold text-3xl mt-2 mb-5 work_experience_company">
          {icon}
        </ul>
        <h3 className="text-lg font-serif mb-2 work_experience_details">
          {experience}
        </h3>

        <p className="font-sans text-base work_experience_details">
          {description && <CollapsibleText text={description} />}
        </p>
      </div>
    </div>
  );
};

export default SkillsCard;
