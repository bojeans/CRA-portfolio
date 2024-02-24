import NavBar from "./NavBar";
import Footer from "./Footer";
import CollapsibleText from "./utils/CollapsibleText";

const About = () => {
  return (
    <>
      <NavBar />

      <h1 className="font-sans text-4xl font-bold text-center mt-6 mb-4 md:text-6xl">
        About Me
      </h1>
      <div className="container mx-auto about-page">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-4 ">
            <div className="rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
              <h2 className="text-2xl font-bold mb-2">
                <span className="font-sans border-b border-gray-500">
                  Technical
                </span>
              </h2>
              <ul className="list-none font-serif">
                <li className="mb-4">
                  <div className="rounded-md inline-block px-2 py-1">
                    <strong className="title">Agile DevOps</strong>
                    <em>
                      <CollapsibleText
                        text="CI/CD,
                    User Stories, Kanban boards (jira, trello), Scrum,
                    Standups, Retros. These were all common while I was both
                    studying and working with Developers Institute."
                        maxLength={100}
                        buttonColor="blue"
                      />

                      <p>
                        <strong className="title">CSS3</strong> - CSS grid,
                        flexbox and associated frameworks/libraries such as
                        bootstrap, tailwindCSS
                      </p>
                      <p>
                        <strong className="title">Databases</strong> -
                        Postgres(SQL) and MongoDB(NoSQL) are the two most
                        familiar with me. Haven't played with any other NoSQL
                        ones, a little on the SQL front with Oracle and MYSQL.
                        Postico, Beekeeper Studios and mongoDB Compass are the
                        tools I've used in this space.
                      </p>
                      <p>
                        <strong className="title">Docker</strong> - I have used
                        Docker Compose as well as Docker Run. Again just haven't
                        created many yaml files but would be confident figuring
                        this out online. No Kubernetes exp.
                      </p>
                      <p>
                        <strong className="title">Git, Github & VScode</strong>{" "}
                        - version control and collaborating tools I'm most
                        familiar with and fairly comfortable on these.
                      </p>
                      <p>
                        <strong className="title">HTML5</strong> - including
                        Semantic HTML and accessibility considerations.
                      </p>
                      <p>
                        <strong className="title">Javascript</strong> - Basic
                        DOM manipulation, although I am more comfortable using
                        React functional components. Learning Typescript
                      </p>
                      <p>
                        <strong className="title">Node.js</strong> - for my
                        backend. Across REST APIs and Express so fairly
                        comfortable with my CRUD operations. Getting better with
                        additional middleware such as errorhandling, auth0/jwt.
                        And familiar with some related tools such as postman and
                        insomnia.
                      </p>
                      <p>
                        <strong className="title">OpenAPI/Swagger</strong> -
                        Have used it a few times and created the odd yaml file.
                        Still reasonably unfamiliar to me.
                      </p>
                      <p>
                        <strong className="title">Python</strong> - Limited
                        exposure. I assisted in reviewing our machine learning
                        course including attempting some of the python based
                        exercises and jupiter notebooks. Also in the hack-a-thon
                        I was using python pandas to manipulate data.
                      </p>
                      <p>
                        <strong className="title">React.js</strong> - Not so
                        much class components, more functional components.
                        Across the common React Hooks such as useState &
                        useEffect. For greater state management, getting across
                        contextAPI. Haven't started on Redux.
                      </p>

                      <p>
                        <strong className="title">Testing/TDD</strong> - Jest is
                        the main framework I've used, followed by supertest and
                        react testing library. Tiny bit of cypress exposure, no
                        mocha.
                      </p>
                    </em>
                  </div>
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
              <ul className="list-none font-serif">
                <li className="mb-4">
                  <span className="rounded-md inline-block px-2 py-1">
                    <strong className="title">Coding Career</strong> -
                    <em>
                      Reasonably flexible, accepting that this is largerly going
                      to revolve around my first few years in the industry as
                      I'd like to work towards becoming a senior fullstack dev
                      since that's where the bulk of the opportunities and
                      demands is. In my coding spare time (once I've developed a
                      couple of more impressive projects for this portfolio
                      page) I'll look at picking up lessons on kaggle.com/learn
                      python/AI/machine learning as well as some blockchain dev
                      courses as they peak my interest.
                    </em>
                  </span>
                </li>
                <li className="mb-4">
                  <span className="rounded-md inline-block px-2 py-1 title">
                    <strong>Recognised Education</strong>
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
                      Institute NZ (although this tertiary institution & former
                      employer of mine is sadly now insolvent)
                    </em>
                  </span>
                </li>
                <li className="mb-4">
                  <span className="rounded-md inline-block px-2 py-1">
                    <strong className="title">Sports</strong> -
                    <em>
                      {" "}
                      Swimming, football, union, league, cricket. Mostly just a
                      spectator these days. As a teenager I swam competitively
                      and made it to nationals, before retiring to focus on
                      University. Still play football socially and enjoy
                      watching the NRL and EPL from time to time.
                    </em>
                  </span>
                </li>
                <li className="mb-4">
                  <span className="rounded-md inline-block px-2 py-1">
                    <strong className="title">Travel</strong> -
                    <em>
                      {" "}
                      Probably my biggest passion nowadays, 30+ countries.
                      Definitely an addiction once you get started. Apparently I
                      have an Adventurer personality type so probably explains
                      it a little. Some notable highlights: hiking Salkantay
                      trek Machu Picchu. Ayahuasca Retreat in the Amazon jungle.
                      Motorbiking Ha Giang Loop (northern Vietnam). Mountain
                      biking down ‘death road’ in Bolivia. Hiking Patagonia
                      mountains. Oktoberfest in Munich, St Paddys in Dublin &
                      San Fermin in Pamplona.
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
