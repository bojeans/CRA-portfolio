import WorkExperienceCard from "./WorkExperienceCard";

const fbLink = (
  <a
    href="https://www.facebook.com/developersnz/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-800 hyperlinks underline italic"
  >
    DI facebook page
  </a>
);

const juvareURL = (
  <a
    href="https://www.juvare.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-800 hyperlinks underline italic"
  >
    Juvare Website
  </a>
);

const cryptoProject = (
  <a
    href="https://risingstardigital.co.nz/portfolio/unodex-crypto-trading-app"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-800 hyperlinks underline italic"
  >
    Rising Star Digital Website
  </a>
);

const WorkExpTech = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-4 border-b-2 border-gray-800 pb-2 font-serif">
        Tech Related
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WorkExperienceCard
          company="Juvare"
          position="Technical Implementation Analyst"
          date="2024 - present"
          link={juvareURL}
          description="Primarily a frontend role and coding on a daily basis with a very unique/niche tech stack. Which had
an older feel to it having spent the previous few years using React, this was very much back to vanilla
javascript. This was beneficial to my learning to explore things like DOM a lot more in depth, as it had
previously been extracted away from me somewhat. It was also heavily client facing, often in a weekly
sprint format. Building input forms, displaying data via tables/dashboards/graphs.
A little bit of backend architecture in the form of REST API, SQL expressions, considering table/data
layouts (e.g. a new client project) and microservice for dynamic function listeners with jsonata and
AWS functions (lambda I think). Also in the process of introducing our own LLM for data driven
analysis. Some mapping component integration, but I didn’t jump in too deep with Esri/ArcGIS"
        />
        <WorkExperienceCard
          company="Rising Star Digital Ltd"
          position="Contract Developer"
          date="2023 - 2024"
          link={cryptoProject}
          description="A short term project for a friend's company that I helped get across the line towards its conclusion. We
built a decentralised trading platform for an international client and my role was essentially managing
React state changes between several parent & child functional components. A smart search bar, trade
history, top traded tokens, buy/sell widget were some of the features I worked on."
        />
        <WorkExperienceCard
          company="Developers Institute NZ Ltd"
          position="Associate Software Developer & Remote Teaching Assistant"
          date="2021 - 2023"
          fblink={fbLink}
          description="This was a varying role over the 2.5 years. I worked in a Platform team on a SaaS project. This
involved integrating our organisation onto Okta and syncing up our various apps. Because our
organisation was a tertiary institution, we first focused on automating the enrolment process and used
terraform code to define our infrastructure. A lot of this was learning as we went, so documenting
everything in confluence and working in an agile environment was important and prioritised.
We also had a help desk type ticketing automation system so students could lodge a support request
ticket to us. So I also had a lot of 1:1 direct contact with students (customers) on a regular basis.
Matters such as okta login problems, exercise/project assistance helping them debug code, mental
health/anxiety reasons. Quite a challenging role with a lot of different day to day tasks."
        />
      </div>
    </>
  );
};

export default WorkExpTech;
