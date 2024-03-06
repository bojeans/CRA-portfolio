import React from "react";
import pic from "../../assets/portfolioCode.png";

const CodeBackground = () => (
  <div className="relative w-full h-full">
    <img
      src={pic}
      alt="screen shot of portfolio code"
      className="inset-0 object-cover opacity-40 md:opacity-30 lg:opacity-20"
    />
  </div>
);

export default CodeBackground;
