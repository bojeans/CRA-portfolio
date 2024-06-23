import React, { useState, useEffect } from "react";
import Hero from "./ScreenshotRelated/Hero";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Contact from "./Contact";

const LandingPage = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div
        className={`flex-1 ${
          isMobileView ? "flex flex-col items-center" : "flex md:flex-row"
        }`}
      >
        <div
          className={`w-full ${
            isMobileView
              ? "mb-4 flex justify-center"
              : "md:w-1/3 md:flex md:items-center md:justify-center"
          }`}
        >
          <div className="m-3 w-full max-w-xs md:max-w-md md:ml-6 lg:max-w-lg">
            <Hero />
          </div>
        </div>
        <div
          className={`w-full px-3 ${isMobileView ? "" : "md:w-2/3 py-5 mr-5"}`}
        >
          <Contact />
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};

export default LandingPage;
