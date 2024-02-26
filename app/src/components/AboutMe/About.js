import NavBar from "../NavBar";
import Footer from "../Footer";
import Technical from "./technical";
import NonTechnical from "./nonTechnical";

const About = () => {
  return (
    <>
      <NavBar />

      <h1 className="font-sans text-4xl font-bold about-page text-center mt-6 mb-4 md:text-6xl">
        About Me
      </h1>
      <div className="container mx-auto about-page">
        <div className="flex flex-wrap justify-center">
          <Technical />
          <NonTechnical />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
