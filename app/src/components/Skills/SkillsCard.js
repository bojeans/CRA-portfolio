import React from "react";
import ContainerBackground from "../utils/ContainerBackground";

const SkillsCard = ({ icon, experience, description }) => {
  return (
    <ContainerBackground>
      <div className="skills-page dark-border p-6 md:gap-y-6">
        <h2 className="text-lg text-center font-sans mb-4 md:mb-8 md:text-2xl work_experience_details">
          {experience}
        </h2>
        <ul className="grid grid-cols-3 gap-6 justify-items-center text-gray-400 text-3xl mt-2 mb-5 skills-icons md:text-4xl lg:text-5xl">
          {icon}
        </ul>
        {/* Uncomment the following block if you want to include the description */}
        {/* <p className="font-serif text-base work_experience_details">
            {description && <CollapsibleText text={description} />}
          </p> */}
      </div>
    </ContainerBackground>
  );
};

export default SkillsCard;
