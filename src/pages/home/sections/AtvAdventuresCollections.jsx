import React, { useRef } from "react";
import AtvAdventuresCollectionsSlider from "../../../components/AtvAdventuresCollectionsSlider";
import { Link } from "react-router-dom";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const AtvAdventuresCollections = () => {
  const discoverRef = useRef();
  useGSAP(() => {
    const discovertitleSplit = new SplitText(".discovertitle", {
      type: "lines",
    });
    const dicoverdescriptionSplit = new SplitText(".dicoverdescription", {
      type: "lines",
    });

    const discovertl = gsap.timeline({
      scrollTrigger: {
        trigger: ".discovertitle",
        start: "top center",
        end: "bottom center",
        // scrub: 1,
        // markers: true,
      },
    });
    discovertl.from(discovertitleSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    discovertl.from(dicoverdescriptionSplit.lines, {
      opacity: 0,
      yPercent: 50,
      duration: 1,
      ease: "expo.out",
      stagger: 0.01,
      delay: 0,
    });
  });

  return (
    <section ref={discoverRef} className="py-0 ">
      <div className="mx-auto max-container px-4 md:px-6 mg:px-20">
        <div className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-x-20">
          <div className="w-full sm:w-full lg:w-[800px] rounded-2xl">
            <AtvAdventuresCollectionsSlider />
          </div>
          <div className="w-full mb-10 lg:mb-0 lg:w-[30%] flex flex-col text-left items-start">
            <h2 className="discovertitle text-5xl uppercase ">
              Unveil the <br /> Wonders of <br />
              Bicol
            </h2>
            <p className="dicoverdescription mt-4 w-[80%]">
              Discover the beauty of Mayon Volcano, pristine beaches, and local
              culture.
            </p>
            <Link className="discoverbtn bg-gray-300 text-[18px] px-6 py-4 mt-5 uppercase rounded-4xl shadow-2xl transition hover:scale-110 hover:bg-[#FF5652] hover:text-white z-[1]">
              Discover Bicol
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtvAdventuresCollections;
