import NavBar from "../NavBar";
import Footer from "../Footer";
import CryptoProjLight from "../ScreenshotRelated/CryptoProjLight";
import CryptoProjDark from "../ScreenshotRelated/CryptoProjDark";
import ProjectsCard from "./ProjectsCard";

const cryptoWebsite = (
  <a
    href="https://unodex.fi/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-800 hyperlinks underline italic"
  >
    Site
  </a>
);

const ProjectsNew = () => {
  return (
    <>
      <NavBar />
      <ProjectsCard
        image={<CryptoProjLight />}
        image2={<CryptoProjDark />}
        title="Decentralised trading platform"
        company="Unodex"
        description="I worked
        on the frontend of the /trade page and /snipe page. Backend was
        pre-coded in C# by another dev, my role was essentially using
        Swagger for API specs to manage React state between several parent
        & child functional components. A smart search bar, trade history,
        top traded tokens, buy/sell widget were some of the features I
        worked on."
        website={cryptoWebsite}
      />

      <Footer />
    </>
  );
};

export default ProjectsNew;
