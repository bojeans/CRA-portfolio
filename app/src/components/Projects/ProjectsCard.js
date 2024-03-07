import React from "react";
import CollapsibleText from "../utils/CollapsibleText";

const ProjectsCard = ({
  image,
  image2,
  image3,
  title,
  company,
  skills,
  description,
  website,
  code,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 projects-page md:gap-y-6">
      <div className="h-full px-6 py-4 dark-border">
        <h2 className="text-lg text-center font-sans mb-2 work_experience_details">
          {title}
        </h2>
        <h3 className="text-lg text-center font-sans mb-2 work_experience_details">
          {company}
        </h3>
        <ul className="font-bold text-gray-400 gap-2 text-3xl mb-2 skills-icons overflow-x-auto md:text-4xl lg:text-5xl">
          <li className="object-cover h-auto">{image}</li>
          <li className="object-cover h-auto">{image2}</li>
          <li className="object-cover h-auto">{image3}</li>
        </ul>
        <p className="font-serif text-base work_experience_details">
          {skills && <CollapsibleText text={skills} />}
        </p>
        <p className="font-serif text-base mt-5 work_experience_details">
          {description && <CollapsibleText text={description} />}
        </p>
        <button>{website}</button>
        <button>{code}</button>
      </div>
    </div>
  );
};

export default ProjectsCard;
