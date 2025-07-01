import React from "react";

const AtvTrailDestinationSection = () => {
  return (
    <section className="relative bg-gray-100 bg-[url(/src/assets/bicoltrailsdestination-bg.png)] bg-no-repeat bg-cover bg-center">
      <div className="w-full mx-auto relative min-h-screen">
        <div className="mx-auto absolute w-full h-dvh top-20 py-20 z-[1]">
          <h2 className="text-5xl uppercase ">
            <span className="font-bold">ATV Trail</span> <br />
            Destinationss
          </h2>
        </div>
        <div className="absolute grid grid-cols-1 md:grid-cols-4 w-full bottom-0 -translate-y-10 px-40">
          <div className="-translate-y-40 mx-auto">
            <img
              className="w-[217px]"
              src="/src/assets/short-trail-location-1.png"
              alt=""
            />
          </div>
          <div className="-translate-y-0 mx-auto">
            <img
              className="w-[209px]"
              src="/src/assets/short-trail-location-2.png"
              alt=""
            />
          </div>
          <div className="-translate-y-30 mx-auto">
            <img
              className="w-[227px]"
              src="/src/assets/green-lava-trail-location.png"
              alt=""
            />
          </div>
          <div className="-translate-y-10 mx-auto">
            <img
              className="w-[247px]"
              src="/src/assets/black-lava-trail-location.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtvTrailDestinationSection;
