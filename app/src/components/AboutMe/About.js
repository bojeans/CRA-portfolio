import NavBar from "../NavBar";
import Footer from "../Footer";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <>
      <NavBar />
      <h1 className="font-sans text-4xl font-bold about-page text-center mt-6 mb-4 md:text-6xl">
        About Me
      </h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <AboutCard
            title="Coding Related"
            description="I'm focused on advancing my career as a full-stack developer. Exploring AI, machine learning, and blockchain development are among my interests on top of continuing with React."
          />
          <AboutCard
            title="Education"
            description="Bachelor of Management Studies - University of Waikato. Majors: Information Systems & Strategic Management. NZ Diploma in Web Development and Design from Developers Institute NZ."
            link="/qualifications"
          />
          <AboutCard
            title="Other"
            description="Passionate about sports and travelling. Explored over 30 countries, some highlights: hiking Machu Picchu, motorbiking Ha Giang Loop in Vietnam, and attending Oktoberfest in Munich."
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
