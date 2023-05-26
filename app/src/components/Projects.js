import NavBar from "./NavBar";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <NavBar />
      <h1 className="text-3xl font-bold text-center mt-6 mb-4 md:text-6xl">
        Projects
      </h1>

      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 px-4">
          <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">
              <span className="border-b border-gray-500">
                Planning pipeline
              </span>
            </h2>
            <p>Budgetting App</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">
              <span className="border-b border-gray-500">In Progress</span>
            </h2>
            <p>
              <a
                href="https://chrisanderson-portfolio.netlify.app/"
                className="text-blue-800"
              >
                <strong>This website</strong>
              </a>
              - CRA with tailwindCSS
            </p>
            <p>
              <a
                href="https://github.com/bojeans/PERN-travel-blog"
                className="text-blue-800"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Travel Blog</strong>
              </a>
              - React with Vite, supabase
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">
              <span className="border-b border-gray-500">Done</span>
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
