import NavBar from "./NavBar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <NavBar />

      <h1 className="text-4xl font-bold text-center mt-6 mb-4 md:text-6xl">
        About Me
      </h1>
      <div className="container mx-auto about-page">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-4 ">
            <div className="rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
              <h2 className="text-2xl font-bold mb-2">
                <span className="border-b border-gray-500">Technical</span>
              </h2>
              <ul className="list-none ">
                <li className="mb-4">
                  <span className="rounded-md inline-block px-2 py-1 span-title">
                    <strong>Studying 2020-2021</strong>
                  </span>
                  <div className="rounded-md inline-block px-2 py-1">
                    <em>
                      <p>
                        <strong>HTML5</strong> - including Semantic HTML and
                        accessibility considerations.
                      </p>
                      <p>
                        <strong>CSS3</strong> - CSS grid, flexbox and associated
                        frameworks/libraries such as bootstrap, tailwindCSS
                      </p>
                      <p>
                        <strong>Javascript</strong> - Basic DOM manipulation,
                        although I am more comfortable using React functional
                        components. Learning Typescript
                      </p>
                      <p>
                        <strong>React.js</strong> - Not so much class
                        components, more functional components. Across the
                        common React Hooks such as useState & useEffect. For
                        greater state management, getting across contextAPI.
                        Haven't started on Redux.
                      </p>
                      <p>
                        <strong>Node.js</strong> - for my backend. Across REST
                        APIs and Express so fairly comfortable with my CRUD
                        operations. Getting better with additional middleware
                        such as errorhandling, auth0/jwt. And familiar with some
                        related tools such as postman and insomnia.
                      </p>
                      <p>
                        <strong>openAPI/Swagger</strong> - Have used it a few
                        times and created the odd yaml file. Still reasonably
                        unfamiliar to me.
                      </p>
                      <p>
                        <strong>Docker</strong> - I have used Docker Compose as
                        well as Docker Run. Again just haven't created many yaml
                        files but would be confident figuring this out online.
                        No Kubernetes exp.
                      </p>
                      <p>
                        <strong>Git, Github & VScode</strong> - version control
                        and collaborating tools I'm most familiar with and
                        fairly comfortable on these.
                      </p>
                      <p>
                        <strong>Testing/TDD</strong> - Jest is the main
                        framework I've used, followed by supertest and react
                        testing library. Tiny bit of cypress exposure, no mocha.
                      </p>
                      <p>
                        <strong>Databases</strong> - Postgres(SQL) and
                        MongoDB(NoSQL) are the two most familiar with me.
                        Haven't played with any other NoSQL ones, a little on
                        the SQL front with Oracle and MYSQL. Postico, Beekeeper
                        Studios and mongoDB Compass are the tools I've used in
                        this space.
                      </p>
                      <p>
                        <strong>Agile DevOps</strong> CI/CD, User Stories,
                        Kanban boards (jira, trello), Scrum, Standups, Retros.
                        These were all common while I was both studying and
                        working with Developers Institute.
                      </p>
                    </em>
                  </div>
                </li>

                <li className="mb-4">
                  <span className="rounded-md inline-block px-2 py-1 span-title">
                    <strong>Education</strong>
                  </span>
                  <span className="rounded-md inline-block  px-2 py-1">
                    <em>
                      Bachelor of Management Studies - University of Waikato.
                      Majoring in Information Systems & Strategic Management.
                    </em>
                  </span>
                  <span className="rounded-md inline-block px-2 py-1">
                    <em>
                      NZ Diploma in Web Development and Design – Developers
                      Institute NZ
                    </em>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <div className="rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
              <h2 className="text-2xl font-bold mb-2">
                <span className="border-b border-gray-500">
                  Hobbies/Interests
                </span>
              </h2>
              <ul className="list-none">
                <li className="mb-4">
                  <span className="rounded-md inline-block px-2 py-1">
                    <strong className="span-title">Sports</strong> -
                    <em>
                      {" "}
                      Swimming, football, union, league, cricket, tennis.{" "}
                    </em>
                    Mostly just a spectator these days. As a teenager I swam
                    competitively and made it to nationals, before retiring to
                    focus on University.
                  </span>
                </li>
                <li className="mb-4">
                  <span className="rounded-md inline-block px-2 py-1">
                    <strong className="span-title">Travel</strong> -
                    <em>
                      {" "}
                      Probably my biggest passion nowadays, 30+ countries.
                      Definitely an addiction once you get started. Apparently I
                      have an Adventurer personality type so probably explains
                      it a little.
                    </em>
                  </span>
                </li>
                <li className="mb-4">
                  <span className="rounded-md inline-block px-2 py-1">
                    <strong className="span-title">Computers</strong> -
                    <em>
                      {" "}
                      I have always had an interest in computers, starting from
                      gaming in the 90s on good old dos. Never really thought
                      about computer science much as a career until later in
                      life though.
                    </em>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
