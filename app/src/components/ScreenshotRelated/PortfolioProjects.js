import pic from "../../assets/portfolio-proj.png";
import ZoomableImage from "../utils/ZoomableImage";

const PortfolioProj = () => (
  <div className="mt-4 mb-4">
    <ZoomableImage
      src={pic}
      alt="Portfolio Project Page Screenshot"
      className="max-w-full mx-auto h-50 object-contain"
    />
  </div>
);

export default PortfolioProj;
