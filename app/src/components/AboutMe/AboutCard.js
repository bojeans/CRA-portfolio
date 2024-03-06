import React from "react";
import CollapsibleText from "../utils/CollapsibleText";

const AboutCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 skills-page md:gap-y-6">
      <ul className="h-full px-6 py-4 dark-border">
        <li className="flex flex-wrap items-center justify-center font-bold gap-6 text-2xl mt-2 mb-5 skills-icons overflow-x-auto md:text-3xl">
          {title}
        </li>

        <li className="font-serif">
          {description && <CollapsibleText text={description} />}
        </li>
      </ul>
    </div>
  );
};

export default AboutCard;
