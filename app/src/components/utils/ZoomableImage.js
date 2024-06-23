import React, { useState } from "react";

const ZoomableImage = ({ src, alt, rotation = 0, style }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => setIsZoomed(!isZoomed);

  const imageStyle = {
    cursor: "zoom-in", // Indicate zoom capability
    transform: `rotate(${rotation}deg)`,
    transition: "transform 0.2s",
    ...style,
  };

  const zoomedImageStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
    maxWidth: "80%", // Control zoom level
    maxHeight: "80%", // Control zoom level
    zIndex: 1000,
    cursor: "zoom-out", // Indicate ability to zoom out
    transition: "transform 0.2s",
    ...style,
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {isZoomed && (
        <div style={overlayStyle} onClick={toggleZoom}>
          <img
            src={src}
            alt={alt}
            style={zoomedImageStyle}
            onClick={(e) => {
              e.stopPropagation(); // Prevent overlay click from triggering
              setIsZoomed(false); // Explicitly zoom out
            }}
          />
        </div>
      )}
      {!isZoomed && (
        <img src={src} alt={alt} style={imageStyle} onClick={toggleZoom} />
      )}
    </>
  );
};

export default ZoomableImage;
