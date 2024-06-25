import React from "react";
import ContainerBackground from "../utils/ContainerBackground";
import CollapsibleText from "../utils/CollapsibleText";

const AboutCard = ({ title, description, link }) => {
  const fullDescription = link
    ? `${description} <a href="${link}" class="text-blue-500 hover:text-blue-700 hyperlinks">See Qualifications for evidence</a>`
    : description;

  return (
    <ContainerBackground>
      <div className="flex items-center justify-center font-bold gap-6 text-xl mt-2 mb-5 sub-title">
        {title}
      </div>
      <div className="description">
        <CollapsibleText text={fullDescription} />
      </div>
    </ContainerBackground>
  );
};

export default AboutCard;
