import pic from "../assets/me.png";
import Header from "./Header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <img src={pic} alt="headshot of author"></img>
    </>
  );
};

export default LandingPage;
