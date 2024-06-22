import NavBar from "../NavBar";
import Footer from "../Footer";
import QualificationsCard from "./QualificationsCard";
import Uni from "../../assets/waikatouni.jpg";

const Qualifications = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold projects-page text-center mt-6 mb-4 md:text-6xl">
        Qualifications
      </h1>
      <div className="container mx-auto projects-page">
        <div className="flex flex-wrap justify-center">
          <QualificationsCard
            image={Uni}
            alt="University of Waikato qualification certificate"
            title="University of Waikato"
            year="2006-2010"
            description="Bachelor of Management Studies. Majors in Information Systems & Strategic Management"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Qualifications;
