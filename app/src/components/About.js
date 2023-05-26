import NavBar from "./NavBar";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="container mx-auto">
      <NavBar />
      <h1 className="text-4xl font-bold text-center mt-6 mb-4 md:text-6xl">
        About Me
      </h1>

      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 px-4">
          <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-2xl font-bold mb-2">
              <span className="border-b border-gray-500">Technical</span>
            </h2>
            <ul className="list-none">
              <li className="mb-4">
                <span className="rounded-md inline-block bg-white px-2 py-1">
                  <strong>Studying 2020-2021</strong>
                </span>
                <span className="rounded-md inline-block bg-white px-2 py-1">
                  <em>
                    HTML, CSS flexbox & grid, Javascript, React, Node,
                    Git/Github, Jest testing, mongoDB, postgres, REST API, JWT,
                    openAPI, docker, Agile DevOps
                  </em>
                </span>
              </li>
              <li className="mb-2">
                <span className="rounded-md bg-white inline-block px-2 py-1">
                  <strong>Work Experience 2021-2023</strong>
                </span>
                <span className="rounded-md inline-block bg-white px-2 py-1">
                  <em>
                    Essentially putting the above into practice and getting some
                    workplace experience. Especially from the aspect of working
                    as an agile team, getting more familiar with things like
                    Jira and reading/creating internal documentation, debugging
                    code. Plus also some new things such as: react testing
                    library, auth0, Okta & terraform
                  </em>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">
              <span className="border-b border-gray-500">Non Technical</span>
            </h2>
            <p>
              <strong>#</strong>
            </p>
          </div>
        </div>
      </div>

      {/* <div className="text-2xl text-center ml-3 grid grid-cols-7 space-y-0 md:text-3xl">
        <FaReact />
        <FaNode />
        <FaHtml5 />
        <FaCss3 />
        <FaJs />
        <FaGithub />
        <FaGit />
      </div> */}

      <Footer />
    </div>
  );
};

export default About;
