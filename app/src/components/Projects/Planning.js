import CollapsibleText from "../utils/CollapsibleText";

const Planning = () => {
  return (
    <>
      <div className="w-full md:w-1/4 px-4 ">
        <div className="rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
          <h2 className="text-lg font-bold mb-2">
            <span className="border-b border-gray-500">Planning pipeline</span>
          </h2>
          <p>
            <strong>Travel Blog</strong> -
            <CollapsibleText text="tbc" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Planning;
