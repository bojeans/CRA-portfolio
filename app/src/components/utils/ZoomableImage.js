import React, { useState } from "react";
import "react-medium-image-zoom/dist/styles.css";

const ZoomableImage = ({ src, alt, rotation }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  const baseStyle = rotation ? { transform: rotation } : {};
  const zoomedStyle = {
    ...baseStyle,
    transform: isZoomed
      ? `${baseStyle.transform} scale(2)`
      : baseStyle.transform,
    cursor: isZoomed ? "zoom-out" : "zoom-in",
  };

  return (
    <div
      onClick={handleZoomToggle}
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      <img
        src={src}
        alt={alt}
        style={zoomedStyle}
        className="transition-transform duration-300"
      />
    </div>
  );
};

export default ZoomableImage;
