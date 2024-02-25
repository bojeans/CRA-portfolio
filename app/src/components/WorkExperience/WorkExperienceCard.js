import React from "react";
import CollapsibleText from "../utils/CollapsibleText";

const WorkExperienceCard = ({ company, position, date, description, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 sm:w-1/2 lg:w-1/3 workexperience-page">
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{company}</h3>
        <h4 className="text-gray-600 text-lg mb-2 work_experience_details">
          {position}
        </h4>
        <h4 className="text-gray-600 text-lg mb-2 work_experience_details">
          {date}
        </h4>

        {description && (
          <CollapsibleText
            text={description}
            className="text-gray-700 text-base work_experience_details"
          />
        )}
        {link}
      </div>
    </div>
  );
};

export default WorkExperienceCard;
