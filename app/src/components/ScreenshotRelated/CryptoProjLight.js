import pic from "../../assets/cryptoProj2.png";
import ZoomableImage from "../utils/ZoomableImage";

const CryptoProjLight = () => (
  <div className="mt-4 mb-4">
    <ZoomableImage
      src={pic}
      alt="Crypto Project Light Mode Screenshot"
      className="max-w-full mx-auto h-50 object-contain"
    />
  </div>
);

export default CryptoProjLight;
