import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
// import Pagination from "../utils/Pagination";
// import SearchBy from "./SearchBy";
// import SortBy from "./SortBy";
// import FilterBy from "./FilterBy";
import SkillsCard from "./SkillsCard";

// ICONS

// BLOCKCHAIN
import { SiSolidity } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiWeb3Dotjs } from "react-icons/si";
import { FaHardHat } from "react-icons/fa";
// DESIGN
import { IoLogoCss3 } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoSass } from "react-icons/io";
import { SiSemanticuireact } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";
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
import { SiDotnet } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
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
    <div>
      <NavBar />
      {/* <div>
        <SearchBy />
        <FilterBy />
        <SortBy />
      </div> */}
      <div>
        <SkillsCard
          icon={
            <>
              <li className="mx-2">
                <SiJavascript />
              </li>
              <li className="mx-2">
                <SiReact />
              </li>
              <li className="mx-2">
                <DiNodejs />
              </li>
              <li className="mx-2">
                <FaHtml5 />
              </li>
              <li className="mx-2">
                <BsFiletypeJson />
              </li>
              <li className="mx-2 text-base">
                <FaGitAlt />
                <FaGit />
              </li>
              <li className="mx-2">
                <FaGithub />
              </li>
              <li className="mx-2">
                <TbBrandVscode />
              </li>
            </>
          }
          experience="2+ Years"
          description="This space is where I am most comfortable. Studying I learned the PERN/MERN stack (postgres/mongodb, express, react, node). Whilst I haven't been doing much database querying in recent times I have continued using React and started to self teach myself other things such as Typescript & Next.js, and most recently Solidity."
        />

        <SkillsCard
          icon={
            <>
              <li className="mx-2">
                <IoLogoCss3 />
              </li>
              <li className="mx-2">
                <BiLogoTailwindCss />
              </li>
              <li className="mx-2">
                <SiTypescript />
              </li>
              <li className="mx-2">
                <TbBrandNextjs />
              </li>
              <li className="mx-2">
                <FaDocker />
              </li>
              <li className="mx-2">
                <SiJest />
              </li>
              <li className="mx-2">
                <SiSwagger />
              </li>
              <li className="mx-2">
                <SiPostgresql />
              </li>
              <li className="mx-2">
                <SiMongodb />
              </li>
              <li className="mx-2">
                <SiMongoose />
              </li>
            </>
          }
          name="Web Design"
          experience="3 Months - 2 Years"
          description="Typescript, Next.js and tailwindCSS are the main things I'm continuing to develop in this space. Though I am still mindful of trying to apply TDD with things like jest, supertest, react testing library, where possible."
        />
        <SkillsCard
          icon={
            <>
              <li className="mx-2">
                <SiSolidity />
              </li>
              <li className="mx-2">
                <FaEthereum />
              </li>
              <li className="mx-2">
                <SiWeb3Dotjs />
              </li>
              <li className="mx-2">
                <FaFigma />
              </li>
              <li className="mx-2">
                <SiWebflow />
              </li>
              <li className="mx-2">
                <IoLogoSass />
              </li>
              <li className="mx-2">
                <SiSemanticuireact />
              </li>
              <li className="mx-2">
                <FaPython />
              </li>
              <li className="mx-2">
                <FaAws />
              </li>
              <li className="mx-2">
                <SiTerraform />
              </li>
              <li className="mx-2">
                <FaHardHat />
              </li>
              <li className="mx-2">
                <SiDotnet />
              </li>
              <li className="mx-2">
                <TbBrandCSharp />
              </li>
              <li className="mx-2">
                <SiSqlite />
              </li>
              <li className="mx-2">
                <SiAuth0 />
              </li>
              <li className="mx-2">
                <SiJsonwebtokens />
              </li>
            </>
          }
          experience="Less than 3 months"
          description="Most of my Exposure here has been through code-a-long tutorials through sources like youtube, udemy, pluralsight. I am eventually hoping to shift towards becoming a blockchain developer and have just started diving down the Web3 rabbit hole."
        />
      </div>

      {/* <Pagination /> */}
      <Footer />
    </div>
  );
};

export default Skills;
