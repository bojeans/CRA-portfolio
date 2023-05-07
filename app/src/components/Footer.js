import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
  FaGit,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="ml-3 md:text-2xl text-1.5xl mt-10 mb-2">
        <p>Chris Anderson</p>
        <p>Web Developer 2020 - present date </p>
      </div>
      <div className="text-2xl text-center ml-3 grid grid-cols-7 space-y-0 md:text-3xl">
        <FaReact />
        <FaNode />
        <FaHtml5 />
        <FaCss3 />
        <FaJs />
        <FaGithub />
        <FaGit />
      </div>
    </>
  );
};

export default Footer;
