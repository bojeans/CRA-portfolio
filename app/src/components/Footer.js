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
    <div className="text-3xl grid grid-cols-7">
      <FaReact />
      <FaNode />
      <FaHtml5 />
      <FaCss3 />
      <FaJs />
      <FaGithub />
      <FaGit />
    </div>
  );
};

export default Footer;
