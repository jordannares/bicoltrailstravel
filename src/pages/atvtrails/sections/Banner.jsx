import React from "react";

const Banner = () => {
  return (
    <section className="">
      <div className="mx-auto relative max-container bg-[#FFF3F3] py-10 rounded-4xl overflow-hidden flex items-center">
        <div className="absolute w-auto left-5">
          <img className="w-[250px]" src="/src/assets/atv-woman.png" alt="" />
        </div>
        <div className="absolute w-auto right-5 bottom-0">
          <img
            className="w-[350px]"
            src="/src/assets/atv-adventure2.png"
            alt=""
          />
        </div>
        <div className="w-full h-[200px] flex flex-col items-center justify-center">
          <h2 className="text-3xl uppercase font-semibold">
            Bicol ATV Trails –<br /> Ride Around Mayon
          </h2>
          <p className="w-[450px] mt-4 text-md">
            Experience adrenaline-pumping ATV rides across lava paths, rivers,
            and jungle terrain – guided by local experts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
