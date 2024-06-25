import pic from "../../assets/portfolio-about-dark.png";
import ZoomableImage from "../utils/ZoomableImage";

const PortfolioAboutDark = () => (
  <div className="mt-4 mb-4">
    <ZoomableImage
      src={pic}
      alt="Portfolio About Dark Mode Screenshot"
      className="max-w-full mx-auto h-50 object-contain"
    />
  </div>
);

export default PortfolioAboutDark;
