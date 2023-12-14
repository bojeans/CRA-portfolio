import pic from "../assets/me.png";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <img
        src={pic}
        alt="headshot of author"
        className="max-w-xl mx-auto mt-12 w-40 md:w-auto h-40 md:h-auto"
      ></img>

      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
