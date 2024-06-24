import pic from "../../assets/ecommerce2.png";
import ZoomableImage from "../utils/ZoomableImage";

const EcommerceSearch = () => (
  <div className="mt-4 mb-4">
    <ZoomableImage
      src={pic}
      alt="Ecommerce Search Page Screenshot"
      className="max-w-full mx-auto h-50 object-contain"
    />
  </div>
);

export default EcommerceSearch;
