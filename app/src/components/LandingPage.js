import React, { useState, useEffect } from "react";
import Hero from "./ScreenshotRelated/Hero";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Contact from "./Contact";

const LandingPage = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  // Function to detect mobile view
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  // event listener to detect window resize
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
          isMobileView ? "flex flex-col" : "flex flex-col md:flex-row"
        }`}
      >
        <div
          className={`w-full ${
            isMobileView
              ? "mb-4"
              : "md:w-1/3 md:flex md:items-center md:justify-center"
          }`}
        >
          <div className="w-full md:w-11/12 lg:w-10/12">
            <Hero />
          </div>
        </div>
        <div className={`w-full px-3 ${isMobileView ? "" : "md:w-2/3"}`}>
          <Contact />
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};

export default LandingPage;
