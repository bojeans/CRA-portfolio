import React, { useState, useEffect } from "react";
import Hero from "./ScreenshotRelated/Hero";
import Footer from "./Footer";
import NavBar from "./NavBar";
import CodeBackground from "./ScreenshotRelated/CodeBackground";

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

  // Add event listener to detect window resize
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
      <div className="flex flex-col md:flex-row flex-1">
        {/* Conditionally render components based on mobile view */}
        {isMobileView ? (
          <>
            <div className="w-full flex-grow">
              <Hero />
            </div>
            <div className="w-full flex-grow">
              <CodeBackground />
              <Footer />
            </div>
          </>
        ) : (
          <>
            <div className="w-full md:w-8/12 flex-grow">
              <CodeBackground />
            </div>
            <div className="w-full md:w-4/12 flex-grow">
              <div className="flex flex-col h-full">
                <Hero />
                <Footer />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
