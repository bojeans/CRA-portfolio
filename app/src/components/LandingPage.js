import pic from "../assets/me.png";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center space-y-12">
        <img
          src={pic}
          alt="headshot of author"
          className="max-w-xl mx-auto mt-12 mb-5 w-40 md:w-80 h-auto md:h-50"
        ></img>
        <Contact />
      </div>
      <Footer />
    </>
  );
};
export default LandingPage;
