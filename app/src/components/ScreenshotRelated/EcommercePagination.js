import pic from "../../assets/ecommercePagination.png";
import ZoomableImage from "../utils/ZoomableImage";

const EcommercePagination = () => (
  <div className="mt-4 mb-4">
    <ZoomableImage
      src={pic}
      alt="Ecommerce Pagination Screenshot"
      className="max-w-full mx-auto h-50 object-contain"
    />
  </div>
);

export default EcommercePagination;
