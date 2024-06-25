import NavBar from "../NavBar";
import Footer from "../Footer";
import QualificationsCard from "./QualificationsCard";
import DI from "../../assets/developersinstitute.jpg";
import Uni from "../../assets/waikatouni.jpg";
import School from "../../assets/ncealvl3.jpg";
import PP from "../../assets/peoplepotential.jpg";
import ZoomableImage from "../utils/ZoomableImage";
import "react-medium-image-zoom/dist/styles.css";
import "../../index.css";

const Qualifications = () => {
  return (
    <>
      <NavBar />

      <h1 className="text-3xl font-bold projects-page text-center mt-6 mb-4 md:text-6xl">
        Qualifications
      </h1>
      <p className="text-center zoom-instruction">
        Click the images to zoom in
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <QualificationsCard
          title="People Potential"
          year="2022"
          description="Certificate in Adult Education & Training"
          image={
            <ZoomableImage
              className="qualification-image"
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
              className="qualification-image"
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
              className="qualification-image"
              src={Uni}
              alt="University of Waikato qualification certificate"
              rotation={-90}
            />
          }
        />
        <QualificationsCard
          title="Tauraroa Area School"
          year="2005"
          description="NCEA Level 3"
          image={
            <ZoomableImage
              className="qualification-image"
              src={School}
              alt="Tauraroa Area School qualification certificate"
              rotation={180}
            />
          }
        />
      </div>

      <Footer />
    </>
  );
};

export default Qualifications;
