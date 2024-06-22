import NavBar from "../NavBar";
import Footer from "../Footer";
import QualificationsCard from "./QualificationsCard";
import Uni from "../../assets/waikatouni.jpg";
import School from "../../assets/ncealvl3.jpg";

const Qualifications = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold projects-page text-center mt-6 mb-4 md:text-6xl">
        Qualifications
      </h1>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <QualificationsCard
            title="University of Waikato"
            year="2010"
            description="Bachelor of Management Studies. Majors in Information Systems & Strategic Management"
            image={
              <img
                className="transform -rotate-90 w-full h-auto max-h-64"
                src={Uni}
                alt="University of Waikato qualification certificate"
              />
            }
          />

          <QualificationsCard
            title="Tauraroa Area School"
            year="2005"
            description="NCEA Level 3"
            image={
              <img
                className="transform -rotate-180 w-full h-auto max-h-64"
                src={School}
                alt="Tauraroa Area School qualification certificate"
              />
            }
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Qualifications;
