import Footer from "../../layouts/footer";
import Banner from "./sections/Banner";
import Booking from "../home/sections/Booking";
import TabItem from "../../components/TabItem";
import { useRef, useState } from "react";
import StickyTab from "./components/StickyTab";
import Tabs, { useTabs } from "./components/Tabs";
import Tablist from "./components/Tablist";
import TabPanel from "./components/TabPanel";

const tabs = [
  { id: 0, title: "overview" },
  { id: 1, title: "atv trail options" },
  { id: 2, title: "details" },
];
const AtvTrails = () => {
  // const { activeTab, setActiveTab } = useTabs();

  // const [isActiveTab, setIsActiveTab] = useState(0);

  const overviewRef = useRef();
  const reviewsRef = useRef();
  const detailsRef = useRef();

  const sectionRefs = {
    0: overviewRef,
    1: reviewsRef,
    2: detailsRef,
  };

  // const handleClickTab = (tabId) => {
  //   sectionRefs[tabId].current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  //   setActiveTab(tabId);
  // };

  // console.log(tabs);
  return (
    <>
      <Banner />
      <section className="relative mt-20">
        <div className="mx-auto max-container grid grid-cols-1 lg:grid-cols-5 gap-x-8 space-y-4">
          <main className="relative z-[1] mx-auto col-span-3 w-full">
            <div className="flex flex-wrap justify-start gap-3 space-y-2 md:space-y-0">
              {/* <StickyTab> */}

              <Tabs>
                <Tablist>
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
                </Tablist>

                <TabPanel id={0} ref={overviewRef}>
                  <div className=" mx-auto max-container mr-10">
                    <h3 className="text-left font-semibold mb-2">Overview</h3>
                    <p className="text-sm text-left text-gray-600">
                      Experience fun and adventure at its finest as you ride
                      through forests, rivers, rice fields,
                    </p>
                  </div>
                </TabPanel>
                <TabPanel id={1} ref={reviewsRef}>
                  <div className=" mx-auto max-container mr-10">
                    <h3 className="text-left font-semibold mb-2">
                      ATV Trail Options
                    </h3>
                    <p className="text-sm text-left text-gray-600">
                      Experience fun and adventure at its finest as you ride
                      through forests, rivers, rice fields,
                    </p>
                  </div>
                </TabPanel>
                <TabPanel id={2} ref={detailsRef}>
                  <div className=" mx-auto max-container mr-10">
                    <h3 className="text-left font-semibold mb-2">Details</h3>
                  </div>
                  <p className="text-sm text-left text-gray-600">
                    Experience fun and adventure at its finest as you ride
                    through forests, rivers, rice fields,
                  </p>
                </TabPanel>
              </Tabs>

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
