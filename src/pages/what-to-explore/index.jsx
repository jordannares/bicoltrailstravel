import React from "react";
import Navbar from "../../layouts/navbar/Navbar";
import Footer from "../../layouts/footer";
import Banner from "./sections/Banner";
import WhatToDoInBicol from "../home/sections/WhatToDoInBicol";
import Booking from "../home/sections/Booking";

const WhatToExplore = () => {
  return (
    <>
      <Navbar />
      <Banner />
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
      <WhatToDoInBicol />
      <Booking />
      <Footer />
    </>
  );
};

export default WhatToExplore;
