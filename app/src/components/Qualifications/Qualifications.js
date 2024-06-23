import NavBar from "../NavBar";
import Footer from "../Footer";
import QualificationsCard from "./QualificationsCard";
import DI from "../../assets/developersinstitute.jpg";
import Uni from "../../assets/waikatouni.jpg";
import School from "../../assets/ncealvl3.jpg";
import PP from "../../assets/peoplepotential.jpg";
import ZoomableImage from "../utils/ZoomableImage";
import "react-medium-image-zoom/dist/styles.css";

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
            title="People Potential"
            year="2022"
            description="Certificate in Adult Education & Training"
            image={
              <ZoomableImage
                src={PP}
                alt="People Potential qualification certificate"
              />
            }
          />
          <QualificationsCard
            title="Developers Institute"
            year="2021"
            description="NZ diploma in Web Development & Design level 5"
            image={
              <ZoomableImage
                src={DI}
                alt="Developers Institute qualification certificate"
              />
            }
          />
          <QualificationsCard
            title="University of Waikato"
            year="2010"
            description="Bachelor of Management Studies. Majors in Information Systems & Strategic Management"
            image={
              <ZoomableImage
                className="w-full h-48 mt-6 mb-8"
                src={Uni}
                alt="University of Waikato qualification certificate"
                rotation="rotate(-90deg)"
              />
            }
          />
          <QualificationsCard
            title="Tauraroa Area School"
            year="2005"
            description="NCEA Level 3"
            image={
              <ZoomableImage
                src={School}
                alt="Tauraroa Area School qualification certificate"
                rotation="rotate(-180deg)"
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
