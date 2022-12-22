import cv from "../assets/CV-chris.docx.pdf";

const About = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-4 mb-4">About Me</h1>
      <p>Click on the below links</p>
      <ul className="text-1.5xl text-blue-800 font-bold  ">
        <li>
          <a href={cv} target="_blank" rel="noreferrer">
            CV
          </a>
        </li>
        <li className="mb-8">
          <a
            href="https://www.developers.ac.nz/about/team/chris-anderson"
            target="_blank"
            rel="noreferrer"
          >
            DI role
          </a>
        </li>
      </ul>
    </>
  );
};

export default About;
