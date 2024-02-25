import CollapsibleText from "../utils/CollapsibleText";

const myFunction = () => {
  return (
    <>
      <div className="w-full md:w-1/4 px-4 ">
        <div className="rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
          <h2 className="text-lg font-bold mb-2">
            <span className="border-b border-gray-500">Started</span>
          </h2>
          <p>
            <a
              href="https://github.com/bojeans/budgetting-app"
              className="text-blue-800 hyperlinks"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Budgetting App</strong>{" "}
            </a>{" "}
            -
            <CollapsibleText text="Fullstack Application MERN stack" />
          </p>
        </div>
      </div>
    </>
  );
};

export default myFunction;
