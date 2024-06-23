import React from "react";
import CollapsibleText from "../utils/CollapsibleText";

const QualificationsCard = ({ image, title, year, description }) => {
  return (
    <div className="max-w-sm flex flex-col justify-center items-center rounded overflow-hidden shadow-lg m-4 p-6">
      {image}
      <div className="text-center mt-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base mb-2">{year}</p>
        {description && <CollapsibleText text={description} />}
      </div>
    </div>
  );
};

export default QualificationsCard;
