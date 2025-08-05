import React from "react";
import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar/Navbar";
import Banner from "./sections/Banner";
import WhereToGo from "../home/sections/WhereToGo";
import Booking from "../home/sections/Booking";

const Discover = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <div>
        <h2>Discover Bicol</h2>
      </div>
      <ul>
        <li>Albay</li>
        <li>Camsur</li>
        <li>Donsol Sorsogon</li>
      </ul> */}

      <section className="relative py-10">
        <div className="mx-auto max-container">
          <ul className="flex gap-x-2">
            <li className="px-3 py-2 border-[1px] border-gray-400 rounded-full">
              Nature & Adventure
            </li>
            <li className="px-3 py-2 border-[1px] border-gray-400 rounded-full">
              Beach & Islands
            </li>
            <li className="px-3 py-2 border-[1px] border-gray-400 rounded-full">
              Wildlife & Eco Tours
            </li>
            <li className="px-3 py-2 border-[1px] border-gray-400 rounded-full">
              Festivals & Events
            </li>
            <li className="px-3 py-2 border-[1px] border-gray-400 rounded-full">
              Food & Local Experience
            </li>
          </ul>
        </div>
      </section>
      <WhereToGo />
      <Booking />
      <Footer />
    </>
  );
};

export default Discover;
