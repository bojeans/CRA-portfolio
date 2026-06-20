import ProjectsNew from "./ProjectsNew";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20">
      <h1 className="text-3xl font-bold projects-page-title text-center mt-6 mb-4 md:text-6xl">
        Projects
      </h1>
      <div className="container mx-auto px-4 max-w">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <ProjectsNew />
        </div>
      </div>
    </section>
  );
};

export default Projects;
