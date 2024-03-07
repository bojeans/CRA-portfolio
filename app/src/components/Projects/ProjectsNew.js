import CryptoProjLight from "../ScreenshotRelated/CryptoProjLight";
import CryptoProjDark from "../ScreenshotRelated/CryptoProjDark";
import ProjectsCard from "./ProjectsCard";
import PortfolioAboutDark from "../ScreenshotRelated/PortfolioAbout_Dark";
import PortfolioHome from "../ScreenshotRelated/PortfolioHome";
import PortfolioProjects from "../ScreenshotRelated/PortfolioProjects";
import EcommercePagination from "../ScreenshotRelated/EcommercePagination";
import EcommerceSearch from "../ScreenshotRelated/EcommerceSearch";
import EcommerceHome from "../ScreenshotRelated/EcommerceHome";
import { IoIosGlobe } from "react-icons/io";
import { FaRegFileCode } from "react-icons/fa";

// CRYPTO PROJECT
const cryptoWebsite = (
  <a
    href="https://unodex.fi/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline italic"
  >
    <IoIosGlobe />
  </a>
);

const cryptoCode = () => {
  alert("Unfortately, the code is not publically available.");
};
const cryptoBlank = <FaRegFileCode />;

// PORTFOLIO PROJECT
const portfolioWebsite = (
  <a
    href="https://chrisanderson-portfolio.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline italic"
  >
    <IoIosGlobe />
  </a>
);

const portfolioCode = (
  <a
    href="https://github.com/bojeans/CRA-portfolio"
    target="_blank"
    rel="noopener noreferrer"
    className="underline italic"
  >
    <FaRegFileCode />
  </a>
);

// ECOMMERCE PROJECT
const ecommerceWebsite = (
  <a
    href="https://relaxed-choux-9389d7.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline italic "
  >
    <IoIosGlobe />
  </a>
);

const ecommerceCode = (
  <a
    href="https://github.com/bojeans/mock-product-site"
    target="_blank"
    rel="noopener noreferrer"
    className="underline italic"
  >
    <FaRegFileCode />
  </a>
);

const ProjectsNew = () => {
  return (
    <>
      <ProjectsCard
        image={<CryptoProjLight />}
        image2={<CryptoProjDark />}
        title="Decentralised trading platform"
        company="Unodex"
        skills="React.js, Node.js, Swagger, REST API, Trunk-based Development, Agile DevOps"
        description="I worked
        on the frontend of the /trade page and /snipe page. Backend was
        pre-coded in C# by another dev, my role was essentially using
        Swagger for API specs to manage React state between several parent
        & child functional components. A smart search bar, trade history,
        top traded tokens, buy/sell widget were some of the features I
        worked on."
        website={cryptoWebsite}
        code={cryptoBlank}
        code2={cryptoCode}
      />
      <ProjectsCard
        title="My Portfolio"
        image={<PortfolioHome />}
        image2={<PortfolioProjects />}
        image3={<PortfolioAboutDark />}
        skills="React.js, Node.js, TailwindCSS"
        description="I built this portfolio using Create React App. The images are a view of an earlier iteration. I got the vibe halfway through that I needed less text and a few more images to hopefully make it more appealing to the eye. I learnt how handy it is creating reuseable functions such as truncating text, and how I should have applied a similar logic to setup styling for my 'cards' and also image styles. DarkMode went amazingly well and I had a bit of help from chatgpt as well as React docs for using createContext. In my wireframes for the skills page I was planning on implementing search/sort/filter/pagination but in the end I went with a more simple approach with icons. Plus if you want to see evidence I can do those, you can see the basic ecommerce mock project below."
        website={portfolioWebsite}
        code={portfolioCode}
      />
      <ProjectsCard
        title="Mock E-Commerce Site"
        image={<EcommerceHome />}
        image2={<EcommerceSearch />}
        image3={<EcommercePagination />}
        skills="React with Typescript. CSS grid. Javascript Array Methods."
        description="I didn't spend a lot of time styling this project other than a simple grid layout. My main focus was implementing features such as sort/filter categories as well as a search bar and pagination. Getting more comfortable with Typescript was also a goal in this project. If I was doing something like this for real, then would use something like StripeAPI for payment gateway and have that functionality attached to the 'buy now' buttons and/or a cart feature"
        website={ecommerceWebsite}
        code={ecommerceCode}
      />
    </>
  );
};

export default ProjectsNew;
