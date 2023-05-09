import pic from "../assets/me.png";
import Footer from "./Footer";
import NavBar from "./NavBar";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <img
        src={pic}
        alt="headshot of author"
        className="w-full md:w-auto md:max-w-md lg:max-w-lg"
      ></img>
      <Footer />
    </>
  );
};

export default LandingPage;
