import React from "react";
import CollapsibleText from "../utils/CollapsibleText";

const QualificationsCard = ({ image, title, year, alt, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 projects-page md:gap-y-6">
      <div className="h-full px-6 py-4 dark-border">
        <h2 className="text-lg text-center font-sans mb-2 md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <h3 className="text-lg text-center font-sans mb-2 md:text-2xl lg:text-3xl">
          {year}
        </h3>
        <div className="proj-Images font-bold text-gray-400 gap-2 text-3xl mb-2 overflow-x-auto ">
          <img className="object-cover h-auto" src={image} alt={alt} />
        </div>

        <p className="font-serif text-base mt-5">
          {description && <CollapsibleText text={description} />}
        </p>
      </div>
    </div>
  );
};

export default QualificationsCard;
