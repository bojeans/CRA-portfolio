import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WorkExperienceCard from "./WorkExperienceCard";

const website = "https://www.facebook.com/developersnz/";
const website2 = "https://www.youtube.com/watch?v=bq9TF6BFJHo";

const fbLink = (
  <a href={website} target="_blank" rel="noopener noreferrer">
    DI facebook
  </a>
);

const ytLink = (
  <a href={website2} target="_blank" rel="noopener noreferrer">
    Hack-a-thon
  </a>
);

const WorkExperience = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-800 pb-2">
          Tech Related
        </h2>
        <div className="flex flex-wrap justify-center">
          <WorkExperienceCard
            company="Rising Star Digital Ltd"
            position="Contract Developer"
            date="Nov 2023 - Present"
            description="I worked on the frontend of the /trade page and /snipe page. Backend was pre-coded in C# by
            another dev, my role was essentially using Swagger for API specs to manage React state between
            several parent & child functional components. A smart search bar, trade history, top traded tokens,
            buy/sell widget were some of the features I worked on."
          />
          <WorkExperienceCard
            company="Developers Institute NZ Ltd"
            position="Associate Software Developer & Remote Teaching Assistant"
            date="April 2021 - August 2023"
            description={`${fbLink} Worked in a platform team on a SaaS project. Involved integrating our organisation onto Okta and syncing up our various apps. A lot of this was learning as we went, so documented everything in confluence and worked in an agile environment with weekly sprints. We also had a help desk type ticketing automation system so students could lodge a support request ticket to us. So I also had a lot of direct contact with students (customers) on a regular basis. Matters such as okta login problems, exercise/project assistance helping them debug code, mental health/anxiety reasons. Quite a challenging but fun role given I am reasonably new to the industry as well. Was also fortunate enough to represent Developers Institute externally at a 1 week hackathon in Whangarei with a client Northpower and AWS reps. Short, somewhat uninformative, video they made of that experience if you’re interested: ${ytLink}`}
          />
        </div>
        <h2 className="text-3xl font-bold mt-8 border-b-2 border-gray-800 pb-2">
          Non-Tech Related
        </h2>
        <div className="flex flex-wrap justify-center">
          <WorkExperienceCard
            company="ABC Company"
            position="Software Developer"
            date="January 2020 - Present"
            description="Worked on developing and maintaining web applications using React and Node.js."
          />
          <WorkExperienceCard
            company="XYZ Corporation"
            position="Front-end Developer"
            date="June 2018 - December 2019"
            description="Collaborated with the design team to implement responsive user interfaces for various projects."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkExperience;
