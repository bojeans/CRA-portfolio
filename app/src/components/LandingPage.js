import Image from "./Image";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Contact from "./Contact";
import DarkModeToggle from "./DarkModeToggle";
import { DarkModeProvider } from "./DarkModeContext";

const LandingPage = () => {
  return (
    <DarkModeProvider>
      <NavBar />
      <div className="flex-none mb-3">
        <DarkModeToggle />
      </div>
      <div className="flex flex-col items-center space-y-12">
        <Image />
        <Contact />
        <Footer />
      </div>
    </DarkModeProvider>
  );
};
export default LandingPage;
