import pic from "../../assets/cryptoProj1.png";
import ZoomableImage from "../utils/ZoomableImage";

const CryptoProjDark = () => (
  <div className="mt-4 mb-4">
    <ZoomableImage
      src={pic}
      alt="Crypto Project Dark Mode Screenshot"
      className="max-w-full mx-auto h-50 object-contain"
    />
  </div>
);

export default CryptoProjDark;
