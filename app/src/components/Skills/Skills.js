import React from "react";
import SkillsCard from "./SkillsCard";
import IconWithTooltip from "../utils/IconWithTooltip";

// ICONS

// BLOCKCHAIN
import { SiSolidity } from "react-icons/si";
import { FaEthereum, FaHardHat } from "react-icons/fa";

// DESIGN
import { IoLogoCss3, IoLogoSass } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiSemanticuireact } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

// DEVELOPMENT
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiJest,
  SiSwagger,
  SiRedux,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import {
  FaPython,
  FaGitAlt,
  FaAws,
  FaGithub,
  FaHtml5,
  FaDocker,
} from "react-icons/fa";
import { BsFiletypeJson } from "react-icons/bs";

// CLOUD & DATABASE
import {
  SiTerraform,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiMongoose,
} from "react-icons/si";

// SECURITY
import { SiAuth0, SiJsonwebtokens } from "react-icons/si";

const coreDevIcons = [
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiReact, label: "React", className: "dark-react-icon" },
  { Icon: DiNodejs, label: "Node.js", className: "dark-nodejs-icon" },
  { Icon: FaHtml5, label: "HTML5", className: "dark-html5-icon" },
  { Icon: IoLogoCss3, label: "CSS3", className: "dark-css3" },
  { Icon: BsFiletypeJson, label: "JSON", className: "dark-json-icon" },
  { Icon: FaGitAlt, label: "Git", className: "dark-git-symbol" },
  { Icon: FaGithub, label: "GitHub", className: "dark-github" },
  { Icon: TbBrandVscode, label: "VS Code", className: "dark-vscode" },
];

const webDevIcons = [
  {
    Icon: BiLogoTailwindCss,
    label: "Tailwind CSS",
    className: "dark-tailwindcss",
  },
  { Icon: SiTypescript, label: "TypeScript", className: "dark-typescript" },
  { Icon: TbBrandNextjs, label: "Next.js", className: "dark-nextjs" },
  { Icon: FaDocker, label: "Docker", className: "dark-docker" },
  { Icon: SiJest, label: "Jest", className: "dark-jest" },
  { Icon: SiSwagger, label: "Swagger", className: "dark-swagger" },
  { Icon: SiPostgresql, label: "PostgreSQL", className: "dark-postgres" },
  { Icon: SiMongodb, label: "MongoDB", className: "dark-mongodb" },
  { Icon: SiMongoose, label: "Mongoose", className: "dark-mongoose" },
];

const miscIcons = [
  { Icon: SiSolidity, label: "Solidity", className: "dark-solidity" },
  { Icon: FaEthereum, label: "Ethereum", className: "dark-ethereum" },
  { Icon: FaFigma, label: "Figma", className: "dark-figma" },
  { Icon: IoLogoSass, label: "Sass", className: "dark-sass" },
  {
    Icon: SiSemanticuireact,
    label: "Semantic UI",
    className: "dark-semantic-ui",
  },
  { Icon: FaPython, label: "Python", className: "dark-python" },
  { Icon: FaAws, label: "AWS", className: "dark-aws" },
  { Icon: SiTerraform, label: "Terraform", className: "dark-terraform" },
  { Icon: FaHardHat, label: "Hardhat" },
  { Icon: SiSqlite, label: "SQLite", className: "dark-sqlite" },
  { Icon: SiAuth0, label: "Auth0", className: "dark-auth0" },
  { Icon: SiJsonwebtokens, label: "JWT", className: "dark-jwt" },
  { Icon: SiRedux, label: "Redux", className: "dark-redux" },
];

const renderIcons = (icons) =>
  icons.map((icon) => <IconWithTooltip key={icon.label} {...icon} />);

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20">
      <h1 className="font-sans text-4xl font-bold text-center mt-6 mb-4 md:text-6xl">
        Skills
      </h1>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <SkillsCard
            icon={renderIcons(coreDevIcons)}
            experience="2+ Years"
            description="This space is where I am most comfortable..."
          />

          <SkillsCard
            icon={renderIcons(webDevIcons)}
            experience="6 Months - 2 Years"
            description="TypeScript, Next.js and Tailwind CSS..."
          />

          <SkillsCard
            icon={renderIcons(miscIcons)}
            experience="Less than 6 months"
            description="Most of my exposure here has been through tutorials..."
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
