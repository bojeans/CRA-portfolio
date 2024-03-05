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
            <div className="flex text-5xl text-gray-600">
              <span className="mx-2">
                <SiJavascript />
              </span>
              <span className="mx-2">
                <SiReact />
              </span>
              <span className="mx-2">
                <DiNodejs />
              </span>
              <span className="mx-2">
                <FaHtml5 />
              </span>
              <span className="mx-2">
                <FaGitAlt />
                <FaGit />
              </span>
              <span className="mx-2">
                <FaGithub />
              </span>
              <span className="mx-2">
                <TbBrandVscode />
              </span>
            </div>
          }
          experience="2+ Years"
          description="Placeholder"
        />

        <SkillsCard
          icon={
            <div className="flex text-5xl text-gray-600">
              <span className="mx-2">
                <IoLogoCss3 />
              </span>
              <span className="mx-2">
                <BiLogoTailwindCss />
              </span>
              <span className="mx-2">
                <SiTypescript />
              </span>
              <span className="mx-2">
                <TbBrandNextjs />
              </span>
              <span className="mx-2">
                <FaDocker />
              </span>
              <span className="mx-2">
                <SiJest />
              </span>
              <span className="mx-2">
                <BsFiletypeJson />
              </span>
              <span className="mx-2">
                <SiSwagger />
              </span>
              <span className="mx-2">
                <SiPostgresql />
              </span>
              <span className="mx-2">
                <SiMongodb />
              </span>
            </div>
          }
          name="Web Design"
          experience="3 Months - 2 Years"
          description="Placeholder"
        />
        <SkillsCard
          icon={
            <div className="flex text-3xl text-gray-600">
              <span className="mx-2">
                <SiSolidity />
              </span>
              <span className="mx-2">
                <FaEthereum />
              </span>
              <span className="mx-2">
                <SiWeb3Dotjs />
              </span>
              <span className="mx-2">
                <FaFigma />
              </span>
              <span className="mx-2">
                <SiWebflow />
              </span>
              <span className="mx-2">
                <IoLogoSass />
              </span>
              <span className="mx-2">
                <SiSemanticuireact />
              </span>
              <span className="mx-2">
                <FaPython />
              </span>
              <span className="mx-2">
                <FaAws />
              </span>
              <span className="mx-2">
                <SiTerraform />
              </span>
              <span className="mx-2">
                <FaHardHat />
              </span>
              <span className="mx-2">
                <SiDotnet />
              </span>
              <span className="mx-2">
                <TbBrandCSharp />
              </span>
              <span className="mx-2">
                <SiSqlite />
              </span>
              <span className="mx-2">
                <SiAuth0 />
              </span>
              <span className="mx-2">
                <SiJsonwebtokens />
              </span>
            </div>
          }
          name="Blockchain Developer"
          experience="Less than 3 months"
          type="Blockchain"
          description="Placeholder"
        />
      </div>

      {/* <Pagination /> */}
      <Footer />
    </div>
  );
};

export default Skills;
