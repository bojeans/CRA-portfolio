import React from "react";
import CollapsibleText from "../utils/CollapsibleText";

const SkillsCard = ({ icon, experience, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 sm:w-1/2 lg:w-1/3 workexperience-page">
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2 work_experience_company">{icon}</p>
        <p className="text-gray-600 text-lg mb-2 work_experience_details">
          {experience}
        </p>
        <p className="text-gray-700 font-sans text-base work_experience_details">
          {description && <CollapsibleText text={description} />}
        </p>
      </div>
    </div>
  );
};

export default SkillsCard;
