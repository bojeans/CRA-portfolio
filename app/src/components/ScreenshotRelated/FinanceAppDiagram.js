import pic from "../../assets/architectDiagram.png";
import ZoomableImage from "../utils/ZoomableImage";

const FinanceAppDiagram = () => (
  <div className="mt-4 mb-4">
    <ZoomableImage
      src={pic}
      alt="Finance App Architect Diagram"
      className="max-w-full mx-auto h-50 object-contain"
    />
  </div>
);

export default FinanceAppDiagram;
