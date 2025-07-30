import React from "react";
import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar/Navbar";
import Banner from "./sections/Banner";

const Discover = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div>
        <h2>Discover Bicol</h2>
      </div>
      <ul>
        <li>Albay</li>
        <li>Camsur</li>
        <li>Donsol Sorsogon</li>
      </ul>
      <Footer />
    </>
  );
};

export default Discover;
