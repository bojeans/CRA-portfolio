import pic from "../../assets/me.png";

const Hero = () => (
  <img
    src={pic}
    alt="headshot of author"
    className="relative max-w-full mx-auto mt-8 mb-5 w-full md:max-w-md lg:max-w-lg h-auto rounded-full rounded-custom"
  />
);

export default Hero;
