import Footer from "../../layouts/footer";
import Banner from "./sections/Banner";
import Booking from "../home/sections/Booking";
import TabItem from "../../components/TabItem";
import React, { useEffect, useRef, useState } from "react";
import Tabs from "./components/Tabs";
import Tablist from "./components/Tablist";
import TabPanel from "./components/TabPanel";
import sections from "../../data/Tabs";
import Navbar from "../../layouts/navbar/Navbar";

const AtvTrails = () => {
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

      setVisibleSections(newVisible);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  return (
    <>
      <Navbar
        activeTabb={activeTab}
        sectionsRef={sectionsRef}
        defaultTab="overview"
      />

      <Banner />
      <section className="relative mt-10">
        <div className="mx-auto max-container grid grid-cols-1 lg:grid-cols-5 gap-x-8 space-y-4">
          <main className="relative z-[1] mx-auto col-span-3 w-full">
            <div className="flex flex-wrap justify-start gap-3 space-y-2 md:space-y-0">
              {/* <StickyTab> */}

              <Tabs
                defaultTabbb={activeTab}
                defaultTab={activeTab}
                scrollreff={sectionsRef}
              >
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

              {sections.map((tabpanel) => (
                <TabPanel
                  key={tabpanel.id}
                  id={tabpanel.id}
                  ref={sectionsRef.current[tabpanel.id]}
                />
              ))}

              {/* </StickyTab> */}
            </div>
          </main>

          <aside className="relative mx-auto w-full bg-white col-span-2">
            <div className=" rounded-2xl overflow-hidden">
              <div className="py-6 px-8 bg-[#A89C29]">
                <div className="flex items-end justify-center gap-x-2">
                  <span className="text-md text-white font-semibold">
                    Starting from
                  </span>
                  <span className="font-bold text-2xl text-white">
                    ₱ 1,550.00
                  </span>
                </div>
                <button className="w-full flex items-center justify-center mx-auto gap-x-2 mt-4 bg-[#C0B335] py-3 px-4 rounded-full text-white shadow-2xl/5 cursor-pointer font-semibold">
                  <div className=""></div>
                  <div>Reserve now & pay later</div>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <iframe
                className="box aspect-video  w-full rounded-2xl left-1/2 shadow-lg"
                src="https://www.youtube.com/embed/q2KqUlKN6ZU"
                title="Exploring Bicol&#39;s Green Lava on an ATV Adventure!"
              ></iframe>
            </div>

            <div className=" rounded-2xl overflow-hidden mt-4 border-[1px] border-gray-400 bg-gray-100">
              <div className="py-6 px-8">
                <h3 className="font-bold text-lg text-gray-800 text-left">
                  Contact Information
                </h3>
                <div className="flex items-center gap-x-6 mt-5">
                  <div className="flex items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-gray-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div className="ml-2 font-semibold text-sm">
                      jordannares21@gmail.com
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-gray-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </div>
                    <div className="ml-2 font-semibold text-sm">
                      +63 996 827 3744
                    </div>
                  </div>
                </div>
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
