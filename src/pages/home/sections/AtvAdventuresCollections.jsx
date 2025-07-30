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
        trigger: "#discover",
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
    discovertl.fromTo(
      ".discoverbtn",
      { opacity: 0, yPercent: 50 }, // from
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.5,
        // stagger: 0.01,
        ease: "power1.inOut",
        delay: 0,
      } // to
    );
  });

  return (
    <section id="discover" ref={discoverRef} className="py-0 bg-[#EBF2F1]">
      <div className="mx-auto max-container px-4 md:px-6 mg:px-20">
        <div className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-x-20">
          <div className="w-full relative sm:w-full lg:w-[700px] rounded-2xl">
            {/* <AtvAdventuresCollectionsSlider /> */}
            <iframe
              className="box aspect-video  w-full rounded-2xl left-1/2 shadow-lg"
              src="https://www.youtube.com/embed/q2KqUlKN6ZU"
              title="Exploring Bicol&#39;s Green Lava on an ATV Adventure!"
            ></iframe>
          </div>
          <div className="scrollhere w-full mb-10 lg:mb-0 lg:w-[30%] flex flex-col text-left items-start">
            <h2 className="discovertitle text-5xl ">
              Unveil the <br /> Wonders of <br />
              Bicol
            </h2>
            <p className="dicoverdescription mt-4 w-[80%]">
              Discover the beauty of Mayon Volcano, pristine beaches, and local
              culture.
            </p>
            <Link
              className="discoverbtn bg-gray-300 text-[16px] font-semibold px-4 py-3 mt-5 rounded-4xl shadow-2xl hover:scale-110 transition hover:bg-[#FBA518] hover:text-gray-800 z-[1]"
              to="/discover"
            >
              Discover Bicol
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtvAdventuresCollections;
