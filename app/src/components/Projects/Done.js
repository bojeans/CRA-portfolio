import CollapsibleText from "../utils/CollapsibleText";

const myFunction = () => {
  return (
    <>
      <div className="w-full md:w-1/4 px-4">
        <div className="rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
          <h2 className="text-lg font-bold mb-2">
            <span className="border-b border-gray-500">Done</span>
          </h2>
          <p>
            <a
              href="https://github.com/bojeans/CRA-portfolio"
              className="text-blue-800 hyperlinks"
              target="_blank"
              rel="noreferrer"
            >
              <strong>This website</strong>{" "}
            </a>
            - CRA with tailwindCSS
          </p>
          <p>
            <a
              href="https://relaxed-choux-9389d7.netlify.app/"
              className="text-blue-800 hyperlinks"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Ecommerce Shop</strong>
            </a>{" "}
            -
            <CollapsibleText
              text="ReactJS with Typescript. Pagination. Filter/Sort Very basic design
            with CSS grid."
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default myFunction;
