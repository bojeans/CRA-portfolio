import React from "react";
import pic from "../../assets/portfolioCode.png";

const CodeBackground = () => (
  <div className="relative w-full h-full">
    <img
      src={pic}
      alt="screen shot of portfolio code"
      className="absolute inset-0 w-50 h-50 object-cover md:h-70 md:w-30 opacity-50"
    />
  </div>
);

export default CodeBackground;
