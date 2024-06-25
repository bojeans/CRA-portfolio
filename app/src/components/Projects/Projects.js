import NavBar from "../NavBar";
import Footer from "../Footer";
import ProjectsNew from "./ProjectsNew";

const Projects = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold projects-page text-center mt-6 mb-4 md:text-6xl">
        Projects
      </h1>
      <div className="container mx-auto projects-page">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <ProjectsNew />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
