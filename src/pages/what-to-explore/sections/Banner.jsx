import React from "react";

const Banner = () => {
  return (
    <>
      <section className="relative">
        <div className="mx-auto max-container bg-gray-300 rounded-2xl py-20 px-4">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <h2 className="text-4xl text-gray-800 font-semibold">
              Your Bicol Adventure Awaits
            </h2>
            <p className="w-3xl text-gray-800/80">
              Ride an ATV at the foot of Mt. Mayon. Swim beside whale sharks in
              Donsol. Discover ancient ruins, local flavors, and hidden
              waterfalls only locals know.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
