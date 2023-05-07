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
      <div className="md:text-3xl text-1.5xl mt-10 mb-2">
        <p>Chris Anderson</p>
        <p>Web Developer 2020 - present date </p>
      </div>
      <div className="text-2xl grid grid-cols-7 space-y-0 md:text-5xl">
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
