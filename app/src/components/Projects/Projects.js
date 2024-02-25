import NavBar from "../NavBar";
import Footer from "../Footer";
import Planning from "./Planning";
import Started from "./Started";
import InProgress from "./InProgress";
import Done from "./Done";

const Projects = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold text-center mt-6 mb-4 md:text-6xl">
        Projects
      </h1>
      <div className="container mx-auto projects-page">
        <div className="flex flex-wrap justify-center">
          <Planning />
          <Started />
          <InProgress />
          <Done />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
