import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SkillsCard from "./SkillsCard";

// ICONS

// BLOCKCHAIN
import { SiSolidity } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";
// DESIGN
import { IoLogoCss3 } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoSass } from "react-icons/io";
import { SiSemanticuireact } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
// DEVELOPMENT
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";
import { SiSwagger } from "react-icons/si";
import { SiRedux } from "react-icons/si";
// CLOUD & Database
import { FaAws } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
// SECURITY
import { SiAuth0 } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <NavBar />
      <div>
        <h1 className="font-sans text-4xl font-bold text-center mt-6 mb-4 md:text-6xl">
          Skills
        </h1>
        <div className="container mx-auto px-4 max-w">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <SkillsCard
              icon={
                <>
                  <li className="mx-2">
                    <SiJavascript />
                  </li>
                  <li className="mx-2 dark-react-icon">
                    <SiReact />
                  </li>
                  <li className="mx-2 dark-nodejs-icon ">
                    <DiNodejs />
                  </li>
                  <li className="mx-2 dark-html5-icon">
                    <FaHtml5 />
                  </li>
                  <li className="mx-2 dark-css3">
                    <IoLogoCss3 />
                  </li>
                  <li className="mx-2 dark-json-icon">
                    <BsFiletypeJson />
                  </li>
                  <li className="mx-2 text-base">
                    <span className="dark-git-symbol">
                      <FaGitAlt />
                    </span>
                    <span className="dark-git-text">
                      <FaGit />
                    </span>
                  </li>
                  <li className="mx-2 dark-github">
                    <FaGithub />
                  </li>
                  <li className="mx-2 dark-vscode">
                    <TbBrandVscode />
                  </li>
                </>
              }
              experience="2+ Years"
              description="This space is where I am most comfortable. While studying, I learned the PERN/MERN stack (postgres/mongodb, express, react, node). Whilst I haven't been doing much database querying in recent times, I have continued using React and started to self teach myself other things such as Typescript & Next.js, and most recently Solidity."
            />
            <SkillsCard
              icon={
                <>
                  <li className="mx-2 dark-tailwindcss">
                    <BiLogoTailwindCss />
                  </li>
                  <li className="mx-2 dark-typescript">
                    <SiTypescript />
                  </li>
                  <li className="mx-2 dark-nextjs">
                    <TbBrandNextjs />
                  </li>
                  <li className="mx-2 dark-docker">
                    <FaDocker />
                  </li>
                  <li className="mx-2 dark-jest">
                    <SiJest />
                  </li>
                  <li className="mx-2 dark-swagger">
                    <SiSwagger />
                  </li>
                  <li className="mx-2 dark-postgres">
                    <SiPostgresql />
                  </li>
                  <li className="mx-2 dark-mongodb">
                    <SiMongodb />
                  </li>
                  <li className="mx-2 dark-mongoose">
                    <SiMongoose />
                  </li>
                </>
              }
              name="Web Design"
              experience="6 Months - 2 Years"
              description="Typescript, Next.js and tailwindCSS are the main things I'm continuing to develop in this space. Though I am still mindful of trying to apply TDD with things like jest, supertest, react testing library, where possible."
            />
            <SkillsCard
              icon={
                <>
                  <li className="mx-2 dark-solidity">
                    <SiSolidity />
                  </li>
                  <li className="mx-2 dark-ethereum">
                    <FaEthereum />
                  </li>
                  <li className="mx-2 dark-figma">
                    <FaFigma />
                  </li>
                  <li className="mx-2 dark-sass">
                    <IoLogoSass />
                  </li>
                  <li className="mx-2 dark-semantic-ui">
                    <SiSemanticuireact />
                  </li>
                  <li className="mx-2 dark-python">
                    <FaPython />
                  </li>
                  <li className="mx-2 dark-aws">
                    <FaAws />
                  </li>
                  <li className="mx-2 dark-terraform">
                    <SiTerraform />
                  </li>
                  <li className="mx-2">
                    <FaHardHat />
                  </li>
                  <li className="mx-2 dark-sqlite">
                    <SiSqlite />
                  </li>
                  <li className="mx-2 dark-auth0">
                    <SiAuth0 />
                  </li>
                  <li className="mx-2 dark-jwt">
                    <SiJsonwebtokens />
                  </li>
                  <li className="mx-2 dark-redux">
                    <SiRedux />
                  </li>
                </>
              }
              experience="Less than 6 months"
              description="Most of my Exposure here has been through code-a-long tutorials through sources like youtube, udemy, pluralsight. I am eventually hoping to shift towards becoming a blockchain developer and have just started diving down the Web3 rabbit hole."
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Skills;
