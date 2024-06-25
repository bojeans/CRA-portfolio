import React from "react";
import CollapsibleText from "../utils/CollapsibleText";
import ContainerBackground from "../utils/ContainerBackground";

const WorkExperienceCard = ({
  company,
  position,
  date,
  description,
  link,
  fblink,
}) => {
  return (
    <ContainerBackground>
      <div className="px-6 py-4 w-full h-auto dark-border">
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
      </div>
    </ContainerBackground>
  );
};

export default WorkExperienceCard;
