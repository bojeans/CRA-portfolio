import React from "react";
import Zoom from "react-medium-image-zoom";

const ZoomableImage = ({ src, alt, rotation }) => {
  return (
    <Zoom>
      <img
        className={`w-full h-auto ${rotation}`}
        src={src}
        alt={alt}
        style={{ transform: rotation }}
      />
    </Zoom>
  );
};

export default ZoomableImage;
