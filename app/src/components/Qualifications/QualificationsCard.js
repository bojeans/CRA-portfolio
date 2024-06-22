import React from "react";
import CollapsibleText from "../utils/CollapsibleText";

const QualificationsCard = ({ image, title, year, description }) => {
  return (
    <div className="px-6 py-4 max-w-sm rounded overflow-hidden shadow-lg m-4">
      {image}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{year}</p>
        {description && <CollapsibleText text={description} />}
      </div>
    </div>
  );
};

export default QualificationsCard;
