import pic from "../assets/me.png";
import Footer from "./Footer";
import NavBar from "./NavBar";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <img src={pic} alt="headshot of author"></img>
      <Footer />
    </>
  );
};

export default LandingPage;
