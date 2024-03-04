import Hero from "./ScreenshotRelated/Hero";
import Footer from "./Footer";
import NavBar from "./NavBar";

import CodeBackground from "./ScreenshotRelated/CodeBackground";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left side with CodeBackground */}
        <div className="w-full md:w-8/12 flex-grow">
          <CodeBackground />
        </div>

        {/* Right side with Hero and Contact */}
        <div className="w-full md:w-4/12 flex flex-col justify-between">
          <div className="flex flex-col h-full">
            <Hero />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
