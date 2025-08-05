import React from "react";

const Overview = ({ ref }) => {
  return (
    <>
      <div
        ref={ref}
        id="overview"
        className="relative w-full scroll-mt-24 mt-10"
      >
        <div className=" mx-auto max-container mr-10">
          <h3 className="text-left text-lg font-semibold mb-8">
            About ATV Trail
          </h3>
          <p className="text-[15px] text-left text-gray-800">
            Embark on a Thrilling Off-Road Adventure Like No Other!
          </p>
          <p className="text-[15px] text-left text-gray-800">
            Explore the rugged terrain of Albay's iconic Mayon Volcano through
            an adrenaline-pumping ATV trail adventure. Whether you're a
            thrill-seeker or a nature lover, our trails offer a one-of-a-kind
            experience surrounded by breathtaking landscapes, lava rock
            formations, and scenic river crossings.
          </p>
        </div>
      </div>
    </>
  );
};

export default Overview;
