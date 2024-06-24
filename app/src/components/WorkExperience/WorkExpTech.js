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

const cryptoProject = (
  <a
    href="https://risingstardigital.co.nz/portfolio/unodex-crypto-trading-app"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-800 hyperlinks underline italic"
  >
    Rising Star Digital
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
          company="Rising Star Digital Ltd"
          position="Contract Developer"
          date="Nov 2023 - Present"
          description="Technically still employed here but haven't had any jobs since the end of 2023. I can pick and choose my workload around fulltime work if/when I need or resign on good terms. 
          
          I worked on the frontend of the /trade page and /snipe pages predominately. My role was essentially managing React state between several functional components. A smart search bar, trade history, top traded tokens, buy/sell widget were among some of the features I worked on. Most of my work was on functionality rather than implementing design. "
          link={cryptoProject}
        />
        <WorkExperienceCard
          company="Developers Institute NZ Ltd"
          position="Associate Software Developer & Remote Teaching Assistant"
          date="April 2021 - August 2023"
          fblink={fbLink}
          description="The company operated as an education provider (tertiary institute) and was a startup in Whangarei, so my role and day-to-day operations were quite varied over the two year period. 
          I am using past tense as this company unfortunately became insolvent late 2023. 
          
          Given we were a startup, regarding my day to day, I wore a lot of hats.
          My Primary role was to monitor the progress of learners (students) and help them debug their coding exercises/projects. So not so much mentoring juniors but more peer programming and helping deal with other challenges juniors face such as imposter syndrome. 
          
          I also helped our platform team for 4 months research and develop our software infrastructure integrating apps onto the Okta platform firstly with SAML/SSO then customised with Terraform. An example of this was coding infrastructure for our different Github Organisations within our Github Enterprise account. "
        />
      </div>
    </>
  );
};

export default WorkExpTech;
