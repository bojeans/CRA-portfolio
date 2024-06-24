import React from "react";
import ContainerBackground from "../utils/ContainerBackground";
import CollapsibleText from "../utils/CollapsibleText";

const AboutCard = ({ title, description, link }) => {
  const fullDescription = link
    ? `${description} <a href="${link}" class="text-blue-500 hover:text-blue-700 hyperlinks">See Qualifications for evidence</a>`
    : description;

  return (
    <ContainerBackground>
      <div className="h-full dark-border">
        <div className="flex items-center justify-center font-bold gap-6 text-xl mt-2 mb-5 skills-icons sub-title card-title">
          {title}
        </div>
        <div className="card-description">
          <CollapsibleText text={fullDescription} />
        </div>
      </div>
    </ContainerBackground>
  );
};

export default AboutCard;
