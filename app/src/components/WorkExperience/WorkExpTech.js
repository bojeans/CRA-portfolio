import WorkExperienceCard from "./WorkExperienceCard";

const fbLink = (
  <a
    href="https://www.facebook.com/developersnz/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-800 darkURL-links underline italic"
  >
    DI facebook page
  </a>
);

const ytLink = (
  <a
    href="https://www.youtube.com/watch?v=bq9TF6BFJHo"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-800 darkURL-links underline italic"
  >
    Hack-a-thon video
  </a>
);

const cryptoProject = (
  <a
    href="https://risingstardigital.co.nz/portfolio/unodex-crypto-trading-app"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-800 darkURL-links underline italic"
  >
    Crypto Trading App
  </a>
);

const WorkExpTech = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-4 border-b-2 border-gray-800 pb-2">
        Tech Related
      </h2>
      <div className="flex flex-wrap justify-center work_experience_expand">
        <WorkExperienceCard
          company="Rising Star Digital Ltd"
          position="Contract Developer"
          date="Nov 2023 - Present"
          description="*Note this role won't hinder my ability to engage in a full-time
              role, as we don't have many clients. If work were to pickup I have
              the ability to be flexible with my schedule/hrs and/or the ability
              to decline jobs. Project I worked on linked below. I worked
              on the frontend of the /trade page and /snipe page. Backend was
              pre-coded in C# by another dev, my role was essentially using
              Swagger for API specs to manage React state between several parent
              & child functional components. A smart search bar, trade history,
              top traded tokens, buy/sell widget were some of the features I
              worked on.
            "
          link={cryptoProject}
        />

        <WorkExperienceCard
          company="Developers Institute NZ Ltd"
          position="Associate Software Developer & Remote Teaching Assistant"
          date="April 2021 - August 2023"
          description={
            <>
              {fbLink} Worked in a platform team on a SaaS project. Involved
              integrating our organisation onto Okta and syncing up our various
              apps. A lot of this was learning as we went, so documented
              everything in confluence and worked in an agile environment with
              weekly sprints. We also had a help desk type ticketing automation
              system so students could lodge a support request ticket to us. So
              I also had a lot of direct contact with students (customers) on a
              regular basis. Matters such as okta login problems,
              exercise/project assistance helping them debug code, mental
              health/anxiety reasons. Quite a challenging but fun role given I
              am reasonably new to the industry as well. Was also fortunate
              enough to represent Developers Institute externally at a 1 week
              hackathon in Whangarei with a client Northpower and AWS reps.
              Short, somewhat uninformative, video they made of that experience
              if you’re interested: {ytLink}
            </>
          }
        />
      </div>
    </>
  );
};

export default WorkExpTech;
