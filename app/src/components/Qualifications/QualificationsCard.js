import React from "react";
import CollapsibleText from "../utils/CollapsibleText";
import ContainerBackground from "../utils/ContainerBackground";

const QualificationsCard = ({ image, title, year, description }) => {
  return (
    <ContainerBackground>
      <div className="qualification-image-container ">{image}</div>
      <div className="text-center mt-4">
        <div className="font-bold text-xl mb-2 qualification-page">{title}</div>
        <p className="text-base mb-2">{year}</p>
        {description && <CollapsibleText text={description} />}
      </div>
    </ContainerBackground>
  );
};

export default QualificationsCard;
