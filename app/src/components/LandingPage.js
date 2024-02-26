import Image from "./Image";
import Footer from "./Footer";
import NavBar from "./NavBar";
// import Contact from "./Contact";

const LandingPage = () => {
  return (
    <>
      <NavBar />

      <div className="flex flex-col items-center space-y-12">
        <Image />

        {/* <Contact /> */}
        <Footer />
      </div>
    </>
  );
};
export default LandingPage;
