import CollapsibleText from "../utils/CollapsibleText";

const Technical = () => {
  return (
    <div className="w-full md:w-1/3 px-4 ">
      <div className="rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
        <h2 className="text-2xl font-bold mb-2">
          <span className="font-sans border-b border-gray-500">Technical</span>
        </h2>
        <ul className="list-none font-serif">
          <li className="mb-4">
            <strong className="title">Agile DevOps</strong>
            <CollapsibleText
              text="CI/CD, User Stories, Kanban boards (jira, trello), Scrum, Standups, Retros. These were all common while I was both studying and working with Developers Institute."
              maxLength={100}
              buttonColor="blue"
            />
          </li>
          <li className="mb-4">
            <strong className="title">CSS3</strong>
            <CollapsibleText
              text="CSS grid, flexbox and associated frameworks/libraries such as bootstrap, tailwindCSS"
              maxLength={100}
              buttonColor="blue"
            />
          </li>
          <li className="mb-4">
            <strong className="title">Databases</strong>
            <CollapsibleText
              text="Postgres(SQL) and MongoDB(NoSQL) are the two most familiar with me. Haven't played with any other NoSQL ones, a little on the SQL front with Oracle and MYSQL. Postico, Beekeeper Studios and mongoDB Compass are the tools I've used in this space."
              maxLength={100}
              buttonColor="blue"
            />
          </li>
          <li className="mb-4">
            <strong className="title">Docker</strong>
            <CollapsibleText
              text="I have used
                Docker Compose as well as Docker Run. Again just haven't
                created many yaml files but would be confident figuring
                this out online. No Kubernetes exp."
              maxLength={100}
              buttonColor="blue"
            />
          </li>
          <li className="mb-4">
            <strong className="title">Git, Github & VScode</strong>
            <CollapsibleText
              text="version control and collaborating tools I'm most
                familiar with and fairly comfortable on these."
              maxLength={100}
              buttonColor="blue"
            />
          </li>
          <li className="mb-4">
            <strong className="title">HTML5</strong>
            <CollapsibleText
              text="including
                Semantic HTML and accessibility considerations."
              maxLength={100}
              buttonColor="blue"
            />
          </li>
          <li className="mb-4">
            <strong className="title">Javascript</strong>
            <CollapsibleText
              text="Basic
                DOM manipulation, although I am more comfortable using
                React functional components. Learning Typescript"
              maxLength={100}
              buttonColor="blue"
            />
          </li>
          <li className="mb-4">
            <strong className="title">Node.js</strong>
            <CollapsibleText
              text="for my
                backend. Across REST APIs and Express so fairly
                comfortable with my CRUD operations. Getting better with
                additional middleware such as errorhandling, auth0/jwt.
                And familiar with some related tools such as postman and
                insomnia."
              maxLength={100}
              buttonColor="blue"
            />
          </li>
          <li className="mb-4">
            <strong className="title">OpenAPI/Swagger</strong>
            <CollapsibleText
              text="Have used it a few times and created the odd yaml file. Still reasonably unfamiliar to me."
              maxLength={100}
              buttonColor="blue"
            />
          </li>
          <li className="mb-4">
            <strong className="title">Python</strong>
            <CollapsibleText
              text="Limited exposure. I assisted in reviewing our machine learning course including attempting some of the python based exercises and jupiter notebooks. Also in the hack-a-thon I was using python pandas to manipulate data."
              maxLength={100}
              buttonColor="blue"
            />
          </li>
          <li className="mb-4">
            <strong className="title">React.js</strong>
            <CollapsibleText
              text="Not so much class components, more functional components. Across the common React Hooks such as useState & useEffect. For greater state management, getting across contextAPI. Haven't started on Redux."
              maxLength={100}
              buttonColor="blue"
            />
          </li>
          <li className="mb-4">
            <strong className="title">Testing/TDD</strong>
            <CollapsibleText
              text="Jest is the main framework I've used, followed by supertest and react testing library. Tiny bit of cypress exposure, no mocha."
              maxLength={100}
              buttonColor="blue"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Technical;
