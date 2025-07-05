import Footer from "../../layouts/footer";
import Banner from "./sections/Banner";
import Booking from "../home/sections/Booking";

const AtvTrails = () => {
  return (
    <>
      <Banner />
      <section className="mt-10">
        <div className="mx-auto max-container">
          <div className="flex flex-wrap gap-3 space-y-2 md:space-y-0">
            {/* <a
              className="font-semibold border-[1px] border-gray-600 rounded-full px-4 py-2"
              href="#"
            >
              Overview
            </a>

            <a
              className="font-semibold border-[1px] border-gray-600 rounded-full px-4 py-2"
              href="#"
            >
              ATV Trail Options
            </a>

            <a
              className="font-semibold border-[1px] border-gray-600 rounded-full px-4 py-2"
              href="#"
            >
              Highlights
            </a>

            <a
              className="font-semibold border-[1px] border-gray-600 rounded-full px-4 py-2"
              href="#"
            >
              Details
            </a>

            <a
              className="font-semibold border-[1px] border-gray-600 rounded-full px-4 py-2"
              href="#"
            >
              Reviews
            </a> */}
          </div>
        </div>

        <div className="mx-auto max-container mt-10">
          <h3 className="text-left font-semibold mb-2">Overview</h3>
          <p className="text-sm w-[60%] text-left text-gray-600">
            Experience fun and adventure at its finest as you ride through
            forests, rivers, rice fields, and thousands of volcanic rocks along
            these exciting trails See beautiful sceneries around and gaze at the
            beauty of perfect cone-shaped Mayon Volcano Experience the best it
            in Bicol trip by riding your way up to the Philippines' most iconic
            volcano! Spectacular views of beautiful lava formations, lush
            forests, and pristine rivers Vehicle Information: In most cases,
            groups of 1-4pax will be served using SUV type of vehicle. If the
            client requests for bigger vehicle type i.e., AUV/Van, there will be
            a surcharge of P500. Groups of 5-10pax will be served using AUV/Van
            type of vehicle. If for any reason that the available vehicle for
            Group of 5-7pax is SUV and with guests approval, the client will be
            entitled to a refund of P500.
          </p>
        </div>
      </section>
      <Booking />
      <Footer />
    </>
  );
};
export default AtvTrails;
