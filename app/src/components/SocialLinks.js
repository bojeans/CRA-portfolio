import React from "react";
import { FaGithub, FaFacebookF, FaLinkedin, FaRegUser } from "react-icons/fa";
import cv from "../assets/cv.pdf";

// social link global variables
const socialLinks = [
  { icon: <FaRegUser />, href: cv },
  { icon: <FaLinkedin />, href: process.env.REACT_APP_LINKEDIN_ENDPOINT },
  { icon: <FaGithub />, href: process.env.REACT_APP_GITHUB_ENDPOINT },
  { icon: <FaFacebookF />, href: process.env.REACT_APP_FACEBOOK_ENDPOINT },
];

const SocialIcon = ({ icon, href }) => {
  return (
    <li className="dark-social mr-2 text-2xl text-blue-700 hover:opacity-50 hover:text-3xl hover:rounded">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Social media external link"
      >
        {icon}
      </a>
    </li>
  );
};

const SocialLinks = () => {
  return (
    <ul className="flex text-black">
      {socialLinks.map((link, index) => (
        <SocialIcon key={index} icon={link.icon} href={link.href} />
      ))}
    </ul>
  );
};

export default SocialLinks;
