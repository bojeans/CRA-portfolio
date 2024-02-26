import CollapsibleText from "../utils/CollapsibleText";

const InProgress = () => {
  return (
    <>
      <div className="w-full md:w-1/4 px-4">
        <div className=" rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
          <h2 className="text-lg font-bold mb-2">
            <span className="border-b border-gray-500">In Progress</span>
          </h2>
          <p>
            <a
              href="https://github.com/bojeans/fitness-app"
              className="text-blue-800 hyperlinks"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Fitness Tracker App</strong>{" "}
            </a>{" "}
            -
            <CollapsibleText text="Next.JS with Typescript, Docker, PostgresSQL, Vercel" />
          </p>
        </div>
      </div>
    </>
  );
};

export default InProgress;
