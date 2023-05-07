import pic from "../assets/me.png";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";

const LandingPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <img src={pic} alt="headshot of author"></img>
      <Footer />
    </>
  );
};

export default LandingPage;
