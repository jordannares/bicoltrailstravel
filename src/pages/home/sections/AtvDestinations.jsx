import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AtvTrailDestinationSection from "./AtvTrailDestinationSection";
import CardTilt from "../components/CardTilt";

// gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, useGSAP);

const AtvDestinations = () => {
  const secRef = useRef();
  const slideLeftRightRef = useRef();
  const slideRightLeftRef = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.map((box) => {
        gsap.from(box, {
          scale: 0,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top center",
            scrub: 1,
            // yoyo: true,
            // markers: true,
          },
          ease: "power1.inOut",
          duration: 1,
        });
      });
    },
    { revertOnUpdate: true }
  );

  useGSAP(
    () => {
      gsap.from(".leftRight", {
        x: -300,
        // translateX: 100,
        scrollTrigger: {
          trigger: ".leftRight",
          top: "bottom center",
          end: "top center",
          scrub: 1,
          // markers: true,
        },
        ease: "power1.inOut",
        duration: 1,
      });
    },
    { revertOnUpdate: true }
  );

  useGSAP(
    () => {
      gsap.from(".rightleft", {
        x: 300,
        // translateX: 100,
        scrollTrigger: {
          trigger: ".rightleft",
          top: "bottom center",
          end: "top center",
          scrub: 1,
          // markers: true,
        },
        ease: "power1.inOut",
        duration: 1,
      });
    },
    { revertOnUpdate: true }
  );

  return (
    <>
      <AtvTrailDestinationSection />

      <section ref={secRef} className="">
        <div className="relative">
          <div className="mx-auto max-container min-h-screen flex flex-col items-center justify-center overflow-hidden px-10">
            <h2 className="atvshorttrail text-3xl uppercase font-bold">
              ATV short right trail
            </h2>
            <p className="text-24">Click here for details</p>

            <div className="relative mt-10">
              <iframe
                className="box aspect-video w-svw md:w-3xl rounded-2xl left-1/2 shadow-lg"
                src="https://www.youtube.com/embed/q2KqUlKN6ZU"
                title="Exploring Bicol&#39;s Green Lava on an ATV Adventure!"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={slideLeftRightRef}
        className="relative bg-gray-200 overflow-hidden"
      >
        <div className="mx-auto relative max-container min-h-screen flex flex-col md:flex-row-reverse items-center justify-center gap-x-30 overflow-hidden px-10">
          <div className="">
            <h2 className="text-3xl uppercase font-bold">Green Lava trail</h2>
            <p className="text-24">Click here for details</p>
          </div>
          <div className=" relative mt-10">
            <iframe
              className="leftRight aspect-video w-svw md:w-3xl rounded-2xl"
              src="https://www.youtube.com/embed/q2KqUlKN6ZU"
              title="Exploring Bicol&#39;s Green Lava on an ATV Adventure!"
            ></iframe>
          </div>
        </div>
      </section>

      <section ref={slideRightLeftRef} className="relative overflow-hidden">
        <div className="mx-auto relative max-container min-h-screen flex flex-col md:flex-row items-center justify-center gap-x-30 overflow-hidden px-10">
          <div className="">
            <h2 className="text-3xl uppercase font-bold">Black Lava trail</h2>
            <p className="text-24">Click here for details</p>
          </div>
          <div className=" relative mt-10">
            <iframe
              className="rightleft aspect-video w-svw md:w-3xl rounded-2xl"
              src="https://www.youtube.com/embed/q2KqUlKN6ZU"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default AtvDestinations;
