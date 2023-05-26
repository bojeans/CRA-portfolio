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
          <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-2">
              <span className="border-b border-gray-500">Technical</span>
            </h2>
            <ul className="list-none ">
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
                    code. Plus also some new things such as: auth0, AWS, Okta &
                    terraform.
                  </em>
                </span>
              </li>
              <li className="mb-4">
                <span className="rounded-md inline-block bg-white px-2 py-1">
                  <strong>Education</strong>
                </span>
                <span className="rounded-md inline-block bg-white px-2 py-1">
                  <em>
                    Bachelor of Management Studies - University of Waikato.
                    Majoring in Information Systems & Strategic Management.
                  </em>
                </span>
                <span className="rounded-md inline-block bg-white px-2 py-1">
                  <em>
                    NZ Diploma in Web Development and Design –{" "}
                    <a
                      href="https://www.developers.ac.nz/"
                      className="text-blue-800"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Developers Institute NZ
                    </a>
                  </em>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-2">
              <span className="border-b border-gray-500">
                Hobbies/Interests
              </span>
            </h2>
            <ul className="list-none">
              <li className="mb-4">
                <span className="rounded-md inline-block bg-white px-2 py-1">
                  <strong>Sports</strong> -
                  <em> Swimming, football, union, league, cricket, tennis. </em>
                  Mostly just a spectator these days. As a teenager I swam
                  competitively and made it to nationals, before retiring to
                  focus on University.
                </span>
              </li>
              <li className="mb-4">
                <span className="rounded-md inline-block bg-white px-2 py-1">
                  <strong>Travel</strong> -
                  <em>
                    {" "}
                    Probably my biggest passion nowadays, 30+ countries.
                    Definitely an addiction once you get started. Apparently I
                    have an Adventurer personality type so probably explains it
                    a little.
                  </em>
                </span>
              </li>
              <li className="mb-4">
                <span className="rounded-md inline-block bg-white px-2 py-1">
                  <strong>Computers</strong> -
                  <em>
                    {" "}
                    I have always had an interest in computers, starting from
                    gaming in the 90s on good old dos. Never really thought
                    about computer science much as a career until later in life
                    though.
                  </em>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
