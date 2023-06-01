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
        className="w-full max-w-xl mx-auto"
      ></img>
      <Footer />
    </>
  );
};

export default LandingPage;
