import Footer from "../../layouts/footer";
import Banner from "./sections/Banner";
import Booking from "../home/sections/Booking";
import TabItem from "../../components/TabItem";
import { useState } from "react";

const tabs = [
  { id: 0, title: "overview" },
  { id: 1, title: "itinerary" },
  { id: 2, title: "pricing" },
];
const AtvTrails = () => {
  const [isActiveTab, setIsActiveTab] = useState(0);

  console.log(isActiveTab);

  const handleClick = () => {
    console.log("dasdsa");
  };

  return (
    <>
      <Banner />
      <section className="mt-10">
        <div className="mx-auto max-container grid grid-cols-1 lg:grid-cols-5 gap-x-8 space-y-4">
          <main className="mx-auto col-span-3">
            <div className="flex flex-wrap gap-3 space-y-2 md:space-y-0">
              {tabs.map((tab) => (
                <button
                  className="text-amber-900 cursor-pointer"
                  key={tab.id}
                  onClick={() => setIsActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <button onClick={handleClick}>CLKick Here</button>
            <div>
              {/* {tablist === "overview" && <div>Overview</div>}
              {tablist === "itinerary" && <div>AtvTrailOptions</div>}
              {tablist === "pricing" && <div>Details</div>} */}
            </div>
            {/* <div id="overview" className="mx-auto max-container mt-10">
              <h3 className="text-left font-semibold mb-2">Overview</h3>
              <p className="text-sm text-left text-gray-600">
                Experience fun and adventure at its finest as you ride through
                forests, rivers, rice fields, and thousands of volcanic rocks
                along these exciting trails See beautiful sceneries around and
                gaze at the beauty of perfect cone-shaped Mayon Volcano
                Experience the best it in Bicol trip by riding your way up to
                the Philippines' most iconic volcano! Spectacular views of
                beautiful lava formations, lush forests, and pristine rivers
                Vehicle Information: In most cases, groups of 1-4pax will be
                served using SUV type of vehicle. If the client requests for
                bigger vehicle type i.e., AUV/Van, there will be a surcharge of
                P500. Groups of 5-10pax will be served using AUV/Van type of
                vehicle. If for any reason that the available vehicle for Group
                of 5-7pax is SUV and with guests approval, the client will be
                entitled to a refund of P500.
              </p>
            </div>
            <div id="atvtrailoptions" className="">
              Atv trail options
            </div> */}
          </main>

          <aside className="mx-auto w-full bg-white col-span-2  ">
            <div className="shadow-lg border-[1px] border-gray-500 rounded-2xl overflow-hidden">
              <div className="py-2 bg-red-200">
                <h3 className="font-bold text-2xl">Starting from ₱ 1,550.00</h3>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <Booking />
      <Footer />
    </>
  );
};
export default AtvTrails;
