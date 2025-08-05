import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef();

  useGSAP(() => {
    gsap.to(".heroBg", {
      scale: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      duration: 20,
    });
  });

  return (
    <>
      <section
        ref={heroRef}
        className="relative w-full py-0 sm:py-0 -mt-20 overflow-hidden"
      >
        {/* atv riding */}

        <div className="atv-riding -translate-x-1/2 w-[1440px] lg:w-full absolute min-h-screen bg-cover bg-no-repeat bg-center xl:bg-center z-[1] lg:translate-x-0 translate-y-0"></div>

        {/* mayon background */}
        <div className="heroBg hero-background absolute w-full min-h-screen  bg-no-repeat bg-cover bg-top lg:bg-top xl:bg-top"></div>

        <div className="mx-auto min-h-screen ">
          <div className="mx-auto max-container gap-x-8 gap-y-16 sm:gap-y-20">
            <div className="relative pt-35 lg:pt-20 xl:pt-60 lg:pr-4">
              <div className="sm:max-w-md lg:max-w-lg px-4">
                <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-start">
                  Bicol <span className="">Wonders</span>
                  {/* Escape. Explore.
                  <br /> Enjoy Bicol */}
                </h1>

                {/* <p className="text-left">
                  From lava-filled adventures to secret island escapes—your
                  unforgettable journey starts here.
                </p> */}
                <div className="py-8 flex items-center justify-center text-start lg:text-center">
                  <div className="flex flex-col">
                    <span className="text-4xl lets-go mr-5 text-[#E52020]">
                      Lets Go
                    </span>
                    <img
                      className="w-[130px] -mt-3"
                      src="/src/assets/arrow-1.svg"
                      alt="Lets go arrow"
                    />
                  </div>
                  <Link
                    className="bg-[#FBA518] text-xl font-semibold px-6 py-4 rounded-4xl shadow-2xl transition hover:scale-110 hover:bg-[#E52020] hover:text-white z-[1]"
                    to="/discover"
                  >
                    Book Your Trip
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video bg */}
      {/* <div className=" absolute w-full h-dvh z-[-1] top-0 left-0 md:object-contain object-cover object-bottom  inset-0">
        <video
          muted
          playsInline
          preload="auto"
          autoPlay
          loop
          className=" fixed  w-full top-0 left-0"
        >
          <source src="/videos/cloud.mp4" type="video/mp4" />
        </video>
      </div> */}
    </>
  );
};

export default Hero;
