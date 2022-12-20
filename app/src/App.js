import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (

    <div className="grid m-8 place-content-center">

    <>
      <NavBar />

      <Header />
      <Footer />
    </div>
  );
};

export default App;
