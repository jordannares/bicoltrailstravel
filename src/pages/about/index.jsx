import React from "react";
import Footer from "../../layouts/footer";
import Booking from "../home/sections/Booking";
import Banner from "./sections/Banner";

const AboutUs = () => {
  return (
    <>
      <Banner />
      <section className="py-10 ">
        <div className="mx-auto max-container ">
          <p className="w-[600px] text-left text-gray-700">
            At <strong>Bicol Trails Travel</strong>, we’re passionate about
            connecting travelers with the vibrant culture and natural wonders of
            the Bicol Region. From ATV rides near Mayon Volcano to
            island-hopping in Caramoan, our local guides ensure an authentic and
            unforgettable experience.
          </p>
        </div>
      </section>
      <Booking />
      <Footer />
    </>
  );
};

export default AboutUs;
