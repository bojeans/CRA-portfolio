import React from "react";
import CollapsibleText from "../utils/CollapsibleText";
import ContainerBackground from "../utils/ContainerBackground";

const ProjectsCard = ({
  image,
  image2,
  image3,
  title,
  company,
  skills,
  description,
  website,
  website2,
  code,
  code2,
}) => {
  return (
    <ContainerBackground>
      <div className="h-full px-6 py-4 dark-border">
        <h2 className="text-lg text-center font-sans mb-2 md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <h3 className="text-lg text-center font-sans mb-2 md:text-2xl lg:text-3xl">
          {company}
        </h3>
        <ul className="proj-Images font-bold text-gray-400 gap-2 text-3xl mb-2 overflow-x-auto ">
          <li className="object-cover h-auto">{image}</li>
          <li className="object-cover h-auto">{image2}</li>
          <li className="object-cover h-auto">{image3}</li>
        </ul>
        <p className="font-serif text-base heading">
          {skills && <CollapsibleText text={skills} />}
        </p>
        <p className="font-serif text-base mt-5">
          {description && <CollapsibleText text={description} />}
        </p>
        <div className="flex flex-row mt-5">
          <button
            onclick={website2}
            className="dark-button light-button"
            aria-label="link to external website"
          >
            {website}
          </button>
          <button
            onClick={code2}
            className="dark-button light-button ml-auto"
            aria-label="link to external github code"
          >
            {code}
          </button>
        </div>
      </div>
    </ContainerBackground>
  );
};

export default ProjectsCard;
