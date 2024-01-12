import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WorkExperienceCard from "./WorkExperienceCard";

const fbLink = (
  <a
    href="https://www.facebook.com/developersnz/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500"
  >
    DI facebook page
  </a>
);

const ytLink = (
  <a
    href="https://www.youtube.com/watch?v=bq9TF6BFJHo"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500"
  >
    Hack-a-thon video
  </a>
);

const WorkExperience = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mt-6 mb-4 md:text-6xl">
          Work Experience
        </h1>
        <h2 className="text-3xl font-bold text-center mb-4 border-b-2 border-gray-800 pb-2">
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
            description={
              <>
                {fbLink} Worked in a platform team on a SaaS project. Involved
                integrating our organisation onto Okta and syncing up our
                various apps. A lot of this was learning as we went, so
                documented everything in confluence and worked in an agile
                environment with weekly sprints. We also had a help desk type
                ticketing automation system so students could lodge a support
                request ticket to us. So I also had a lot of direct contact with
                students (customers) on a regular basis. Matters such as okta
                login problems, exercise/project assistance helping them debug
                code, mental health/anxiety reasons. Quite a challenging but fun
                role given I am reasonably new to the industry as well. Was also
                fortunate enough to represent Developers Institute externally at
                a 1 week hackathon in Whangarei with a client Northpower and AWS
                reps. Short, somewhat uninformative, video they made of that
                experience if you’re interested: {ytLink}
              </>
            }
          />
        </div>
        <h2 className="text-3xl font-bold text-center mt-8 border-b-2 border-gray-800 pb-2">
          Non-Tech Related
        </h2>
        <div className="flex flex-wrap justify-center">
          <WorkExperienceCard
            company="Madison Recruitment Agency"
            position="Customer Service Representative"
            date="6 Month Contract 2020"
            description="Classified as an essential worker through Covid lock down, I worked onsite at the Inland Revenue Department helping customers coordinate financial matters during challenging, unprecedented times. I can draw synergy from working through the ever changing environment of Covid, coordinating the wage subsidy scheme information in 2020 and applying it to the IT industry in general. Ie IT is always changing and adapting to new challenges, always some uncertainty and always learning all the time as we go."
          />
          <WorkExperienceCard
            company="Allied Workforce (AWF)"
            position="General Labourer"
            date="Mid 2019 - Early 2020"
            description="A handful of placements in various organisations: Kerr Construction - demolition job. Hansen Products - repetitive factory parts assembly work. Toll Group - helping truck drivers with loading/unloading freight. Some minor warehouse duties, such as stocktaking."
          />
          <WorkExperienceCard
            company="InternationalSOS (ISOS) Pty Ltd"
            position="International Operations Coordinator"
            date="Early Jan 2018 - Mid 2019"
            description="(Sydney, Australia). This global and private company operated as an assistance company, primarily in the areas of medical assistance with security/travel assistance services. Most of our clients were corporate clients and our members on business trips, we operated as sort of a 3rd party middleman company linking A with B. My role was logistical, working with nurses and doctors in front of a computer in a call centre environment, fast paced and at times very stressful. Activities ranged from linking up callers for medical/security advice & referral appointment to emergency evacuations, medical escorts/transportation to the nearest centre of medical excellence."
          />
          <WorkExperienceCard
            company="OysterBar Darwin"
            position="Bar Manager"
            date="Mid 2016 - Late 2017"
            description="(Darwin, Australia) – This role allowed me to coordinate inventory levels and purchasing of alcohol/beverages through weekly stocktaking and ordering. Banking and invoice recording were also part of this role, as was performing the role of a duty manager, which involved facilitating the running of the venue for the shift. Ie. Managing staff (employees), keeping customers satisfied/happy whilst maintaining standards set out in our licensing agreement. I resigned on good terms to move back to NZ to become closer to friends/family due to largely to my mums deteriorating health."
          />
          <WorkExperienceCard
            company="BerryBest Ltd"
            position="Production Manager (and briefly, Interim Manager)"
            date="June 2018 - December 2019"
            description="This position involved me coordinating and setting up multiple mobile shop locations to sell fruit and vegetables to customers on the side of the road. I had to organise distribution channels and constantly network to deem which wholesale suppliers/local growers best tended to the strategic needs of Berry Best Ltd. I also had to run advertising campaigns, manage employees, analyse profit/loss patterns and other varying trends affecting overall turnover levels. For example; weather patterns, days of the week, etc. I was also tasked with overseeing the smooth running of the packhouse. This involved effectively liaising and getting along with my staff to meet time and cost constraints that had major implications on the business on a daily basis. Alongside a sales manager, I coordinated product outsourcing by depicting which distribution channels were more viable in a highly volatile environment on a day by day basis."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkExperience;
