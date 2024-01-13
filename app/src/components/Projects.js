import NavBar from "./NavBar";
import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <NavBar />

      <h1 className="text-3xl font-bold text-center mt-6 mb-4 md:text-6xl">
        Projects
      </h1>
      <div className="container mx-auto projects-page">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/4 px-4 ">
            <div className="rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
              <h2 className="text-lg font-bold mb-2">
                <span className="border-b border-gray-500">
                  Planning pipeline
                </span>
              </h2>

              <p>
                <strong>
                  {" "}
                  {/*className="hyperlinks" ADD THIS ONCE REPO CREATED */}
                  Fitness Tracker App (no repo yet){" "}
                </strong>{" "}
                - NextJS, PostgresSQL, Vercel
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <div className=" rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
              <h2 className="text-lg font-bold mb-2">
                <span className="border-b border-gray-500">Started</span>
              </h2>
              <p>
                <a
                  href="https://github.com/bojeans/PERN-travel-blog"
                  className="text-blue-800 hyperlinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Travel Blog</strong>{" "}
                </a>
                - React with Vite, supabase
              </p>
              <p>
                <a
                  href="https://github.com/bojeans/budgetting-app"
                  className="text-blue-800 hyperlinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Budgetting App</strong>{" "}
                </a>
                - Fullstack Application MERN stack
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <div className=" rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
              <h2 className="text-lg font-bold mb-2">
                <span className="border-b border-gray-500">In Progress</span>
              </h2>
              <p>Short pause while I priortise my next work-related role</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <div className="rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
              <h2 className="text-lg font-bold mb-2">
                <span className="border-b border-gray-500">Done</span>
              </h2>
              <p>
                <a
                  href="https://github.com/bojeans/CRA-portfolio"
                  className="text-blue-800 hyperlinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>This website</strong>{" "}
                </a>
                - CRA with tailwindCSS
              </p>
              <p>
                <a
                  href="https://relaxed-choux-9389d7.netlify.app/"
                  className="text-blue-800 hyperlinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Ecommerce Shop</strong>
                </a>
                - ReactJS with Typescript. Pagination. Very basic design with
                CSS grid.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Projects;
