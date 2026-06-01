import React from "react";
import Navbar from "../../layouts/navbar/Navbar";
import Banner from "../about/sections/Banner";
import Footer from "../../layouts/footer";

const Reservation = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <section>
        <h1>Reservation</h1>
        <Footer />
      </section>
    </>
  );
};

export default Reservation;
