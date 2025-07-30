import React from "react";
import Navbar from "../../layouts/navbar/Navbar";
import Footer from "../../layouts/footer";
import Banner from "./sections/Banner";

const WhatToExplore = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <section className="relative py-20">
        <div className="mx-auto max-container">
          <ul>
            <li>ATV Trails</li>
            <li>Hiking</li>
            <li>Swimming</li>
            <li>Fishing</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WhatToExplore;
