import React from "react";

const Banner = () => {
  return (
    <>
      <section className="relative">
        <div className="">
          <div className="mx-auto relative max-container bg-[url(../images/bg-banner-what-to-do-in-bicol.png)] bg-no-repeat bg-cover bg-left overflow-hidden rounded-2xl py-20 px-10">
            {/* <div className="bg-[#C1D8C3]/50 z-[1] absolute w-full h-full left-0 top-0"></div> */}
            <div className="flex relative flex-col items-left justify-start gap-y-4 z-[2]">
              <h2 className="text-4xl text-gray-800 font-semibold text-left">
                Your Bicol <br /> Adventure Awaits
              </h2>
              <p className="w-lg text-gray-800/80 text-left">
                Ride an ATV at the foot of Mt. Mayon. Swim beside whale sharks
                in Donsol. Discover ancient ruins, local flavors, and hidden
                waterfalls only locals know.
              </p>
              {/* Serach */}
              {/* <div className="">
                <input type="text" placeholder="search" className="outline-1" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
