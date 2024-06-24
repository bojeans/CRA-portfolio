import pic from "../../assets/ecommerceHome.png";
import ZoomableImage from "../utils/ZoomableImage";

const EcommerceHome = () => (
  <div className="mt-4 mb-4">
    <ZoomableImage
      src={pic}
      alt="Ecommerce Home Page Screenshot"
      className="max-w-full mx-auto h-50 object-contain"
    />
  </div>
);

export default EcommerceHome;
