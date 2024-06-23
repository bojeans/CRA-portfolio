import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ZoomableImage = ({ className, src, alt, rotation }) => {
  const style = rotation ? { transform: rotation } : {};

  return (
    <Zoom>
      <img className={className} src={src} alt={alt} style={style} />
    </Zoom>
  );
};

export default ZoomableImage;
