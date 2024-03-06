import React from "react";
import CollapsibleText from "../utils/CollapsibleText";

const WorkExperienceCard = ({
  company,
  position,
  date,
  description,
  link,
  fblink,
  ytlink,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 sm:w-1/2 lg:w-1/3 workexperience-page">
      <div className="px-6 py-4 w-full h-full dark-border">
        <h3 className="font-bold text-xl mb-2 work_experience_company">
          {company}
        </h3>
        <p className="text-gray-600 text-lg mb-2 work_experience_details">
          {position}
        </p>
        <p className="text-gray-600 text-lg mb-2 work_experience_details">
          {date}
        </p>
        <p className="text-gray-600 text-lg mb-2 hyperlinks">{fblink}</p>
        <p className="text-gray-700 font-sans text-base work_experience_details">
          {description && <CollapsibleText text={description} />}
        </p>
        <p className="text-gray-600 text-lg mb-2 hyperlinks">{link}</p>
        <p className="text-gray-600 text-lg mb-2 hyperlinks">{ytlink}</p>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
