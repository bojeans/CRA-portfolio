import React from "react";
import CollapsibleText from "../utils/CollapsibleText";

const AboutCard = ({ title, description, link }) => {
  const fullDescription = link
    ? `${description} <a href="${link}" class="text-blue-500 hover:text-blue-700 hyperlinks">See Qualifications for evidence</a>`
    : description;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 about-page md:gap-y-6">
      <div className="h-full px-6 py-4 dark-border">
        <div className="flex flex-wrap items-center justify-center font-bold gap-6 text-2xl mt-2 mb-5 skills-icons overflow-x-auto md:text-3xl lg:text-4xl sub-title">
          {title}
        </div>

        <div className="font-serif md:text-xl">
          <CollapsibleText text={fullDescription} />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
