import pic from "../../assets/portfolio-home.png";
import ZoomableImage from "../utils/ZoomableImage";

const PortfolioHome = () => (
  <div className="mt-4 mb-4">
    <ZoomableImage
      src={pic}
      alt="Portfolio Home Page Screenshot"
      className="max-w-full mx-auto h-50 object-contain"
    />
  </div>
);

export default PortfolioHome;
