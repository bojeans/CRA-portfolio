import React, { useState, useEffect } from "react";
import NavBar from "../NavBar;";
import Footer from "../Footer;";
import Pagination from "../utils/Pagination";
import SearchBy from "./SearchBy";
import SortBy from "./SortBy";
import FilterBy from "./FilterBy";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <>
      <NavBar />
      <div>
        <SearchBy />
        <SortBy />
        <FilterBy />
      </div>
      <div>
        <SkillsCard />
      </div>

      <Pagination />
      <Footer />
    </>
  );
};

export default Skills;
