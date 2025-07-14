import Footer from "../../layouts/footer";
import Banner from "./sections/Banner";
import Booking from "../home/sections/Booking";
import TabItem from "../../components/TabItem";
import React, { useEffect, useRef, useState } from "react";
import Tabs from "./components/Tabs";
import Tablist from "./components/Tablist";
import TabPanel from "./components/TabPanel";
import sections from "../../data/Tabs";
import { Title } from "@radix-ui/react-toast";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const AtvTrails = () => {
  // const overviewRef = useRef();
  // const atvtrailoptions = useRef();
  // const detailsRef = useRef();

  // const sectionRefs = {
  //   0: overviewRef,
  //   1: atvtrailoptions,
  //   2: detailsRef,
  // };

  // const sections = [
  //   { id: "overview", title: "Overview" },
  //   { id: "atvtrailoptions", title: "ATV Trail Options" },
  //   { id: "details", title: "Details" },
  // ];

  const sectionsRef = useRef(
    sections.reduce((acc, section) => {
      acc[section.id] = React.createRef();
      return acc;
    }, {})
  );

  const [isAtTop, setIsAtTop] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const [activeTab, setActiveTab] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = 150;
      const newVisible = [];

      let newActiveTab = activeTab;

      for (const section of sections) {
        const ref = sectionsRef.current[section.id];
        const el = ref?.current;
        if (!el) continue;

        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= scrollOffset) {
            newVisible.push({ id: section.id, title: section.title });
            newActiveTab = section.id;

            setIsAtTop(true);
          }
        }
      }
      if (newActiveTab !== activeTab) {
        setActiveTab(newActiveTab);
      }

      // console.log(newVisible);
      setVisibleSections(newVisible);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (sectionRefs[0].current) {
  //       const rec = sectionRefs[0].current.getBoundingClientRect();
  //       setIsAtTop(rec.top <= 0);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // console.log(sectionRefs.current[0].current);
  // console.log(sectionsRef.current);
  // console.log(activeTab);
  return (
    <>
      <section className="relative z-10">
        <div
          // className="fixed w-full transition-all"
          className={`fixed w-full transition-all
          ${
            activeTab !== sections[0].id
              ? " bg-green-300 translate-y-0"
              : " -translate-y-30 "
          }`}
        >
          <div className="mx-auto max-container flex ">
            <Tabs defaultTab={activeTab} scrollref={sectionsRef}>
              {/* <Tablist>
                {visibleSections.map((visibleSec) => (
                  <TabItem
                    scrollref={sectionsRef.current[visibleSec.id]}
                    key={visibleSec.id}
                    id={visibleSec.id}
                    activeTabb={activeTab}
                  >
                    {visibleSec.title}
                  </TabItem>
                ))}
              </Tablist> */}
              <Tablist>
                {sections.map((s) => (
                  <TabItem
                    scrollref={sectionsRef.current[s.id]}
                    key={s.id}
                    id={s.id}
                    activeTabb={activeTab}
                    // title={s.title}
                  >
                    {s.title}
                  </TabItem>
                ))}
              </Tablist>
            </Tabs>
          </div>
          {/* <Tabs>
            <Tablist>
              {tabs.map((tab, i) => (
                <TabItem
                  // scrollref={sectionRefs[tab.id]}
                  key={i}
                  id={tab.id}
                  title={tab.title}
                >
                  {tab.title}
                </TabItem>
              ))}
            </Tablist>
          </Tabs> */}
        </div>
      </section>
      <Banner />
      <section className="relative mt-20">
        <div className="mx-auto max-container grid grid-cols-1 lg:grid-cols-5 gap-x-8 space-y-4">
          <main className="relative z-[1] mx-auto col-span-3 w-full">
            <div className="flex flex-wrap justify-start gap-3 space-y-2 md:space-y-0">
              {/* <StickyTab> */}

              {/* <div>
                <div className="mx-auto max-container flex ">
                  {visibleSections.map((id, i) => (
                    <button className="cursor-pointer px-4 py-2" key={i}>
                      {id}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* {sections.map((s) => (
                <div key={s.id} id={s.id} ref={sectionsRef.current[s.id]}>
                  {s.title}
                </div>
              ))} */}

              <Tabs defaultTab={activeTab} scrollref={sectionsRef}>
                <Tablist>
                  {sections.map((s) => (
                    <TabItem
                      scrollref={sectionsRef.current[s.id]}
                      key={s.id}
                      id={s.id}
                      activeTabb={activeTab}
                      // title={s.title}
                    >
                      {s.title}
                    </TabItem>
                  ))}
                </Tablist>
                {/* <Tablist>
                  {tabs.map((tab, i) => (
                    <TabItem
                      scrollref={sectionRefs[tab.id]}
                      key={i}
                      id={tab.id}
                      title={tab.title}
                    >
                      {tab.title}
                    </TabItem>
                  ))}
                </Tablist> */}

                {/* <TabPanel id="overview" ref={sectionsRef.current["overview"]}>
                  <div className=" mx-auto max-container mr-10">
                    <h3 className="text-left font-semibold mb-2">Overview</h3>
                    <p className="text-sm text-left text-gray-600">
                      Experience fun and adventure at its finest as you ride
                      through forests, rivers, rice fields,
                    </p>
                    <p className="text-sm text-left text-gray-600">
                      Experience fun and adventure at its finest as you ride
                      through forests, rivers, rice fields, Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Nobis ad, et minus
                      voluptatibus ea debitis rerum repellat odio quaerat quis!
                      Explicabo, quis in! Necessitatibus culpa aspernatur
                      suscipit accusamus atque aliquam?
                    </p>
                    <p className="text-sm text-left text-gray-600">
                      Experience fun and adventure at its finest as you ride
                      through forests, rivers, rice fields, Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Nobis ad, et minus
                      voluptatibus ea debitis rerum repellat odio quaerat quis!
                      Explicabo, quis in! Necessitatibus culpa aspernatur
                      suscipit accusamus atque aliquam?
                    </p>
                    <p className="text-sm text-left text-gray-600">
                      Experience fun and adventure at its finest as you ride
                      through forests, rivers, rice fields, Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Nobis ad, et minus
                      voluptatibus ea debitis rerum repellat odio quaerat quis!
                      Explicabo, quis in! Necessitatibus culpa aspernatur
                      suscipit accusamus atque aliquam?
                    </p>
                    <p className="text-sm text-left text-gray-600">
                      Experience fun and adventure at its finest as you ride
                      through forests, rivers, rice fields, Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Nobis ad, et minus
                      voluptatibus ea debitis rerum repellat odio quaerat quis!
                      Explicabo, quis in! Necessitatibus culpa aspernatur
                      suscipit accusamus atque aliquam?
                    </p>
                  </div>
                </TabPanel>
                <TabPanel
                  id="atvtrailoptions"
                  ref={sectionsRef.current["atvtrailoptions"]}
                >
                  <div className=" mx-auto max-container mr-10">
                    <h3 className="text-left font-semibold mb-2">
                      ATV trail options
                    </h3>
                    <p className="text-sm text-left text-gray-600">
                      Experience fun and adventure at its finest as you ride
                      through forests, rivers, rice fields, Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Nobis ad, et minus
                      voluptatibus ea debitis rerum repellat odio quaerat quis!
                      Explicabo, quis in! Necessitatibus culpa aspernatur
                      suscipit accusamus atque aliquam?
                    </p>
                    <p className="text-sm text-left text-gray-600">
                      Experience fun and adventure at its finest as you ride
                      through forests, rivers, rice fields, Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Nobis ad, et minus
                      voluptatibus ea debitis rerum repellat odio quaerat quis!
                      Explicabo, quis in! Necessitatibus culpa aspernatur
                      suscipit accusamus atque aliquam?
                    </p>
                    <p className="text-sm text-left text-gray-600">
                      Experience fun and adventure at its finest as you ride
                      through forests, rivers, rice fields, Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Nobis ad, et minus
                      voluptatibus ea debitis rerum repellat odio quaerat quis!
                      Explicabo, quis in! Necessitatibus culpa aspernatur
                      suscipit accusamus atque aliquam?
                    </p>
                    <p className="text-sm text-left text-gray-600">
                      Experience fun and adventure at its finest as you ride
                      through forests, rivers, rice fields, Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Nobis ad, et minus
                      voluptatibus ea debitis rerum repellat odio quaerat quis!
                      Explicabo, quis in! Necessitatibus culpa aspernatur
                      suscipit accusamus atque aliquam?
                    </p>
                  </div>
                </TabPanel>
                <TabPanel id="details" ref={sectionsRef.current["details"]}>
                  <div className=" mx-auto max-container mr-10">
                    <h3 className="text-left font-semibold mb-2">Details</h3>
                  </div>
                  <p className="text-sm text-left text-gray-600">
                    Experience fun and adventure at its finest as you ride
                    through forests, rivers, rice fields,
                  </p>
                </TabPanel> */}
              </Tabs>

              {sections.map((s) => (
                <section
                  key={s.id}
                  id={s.id}
                  ref={sectionsRef.current[s.id]}
                  className="min-h-[200px] scroll-mt-24"
                >
                  <h2>{s.title}</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Recusandae, quod. Ipsum nesciunt explicabo ducimus aperiam
                    quibusdam nisi, labore quo quia temporibus similique?
                    Molestias repudiandae animi quisquam, nam expedita eius
                    eaque!
                  </p>
                </section>
              ))}

              {/* </StickyTab> */}
            </div>
          </main>

          <aside className="relative mx-auto w-full bg-white col-span-2  ">
            <div className="shadow-lg border-[1px] border-gray-500 rounded-2xl overflow-hidden">
              <div className="py-2 bg-red-200">
                <h3 className="font-bold text-2xl">Starting from ₱ 1,550.00</h3>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <Booking />
      <Footer />
    </>
  );
};
export default AtvTrails;
