import React from "react";

const WorkExperienceCard = ({ company, position, date, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="px-6 py-4">
        <h5 className="font-bold text-xl mb-2">{company}</h5>
        <h6 className="text-gray-600 text-lg mb-2">{position}</h6>
        <h6 className="text-gray-600 text-lg mb-2">{date}</h6>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
