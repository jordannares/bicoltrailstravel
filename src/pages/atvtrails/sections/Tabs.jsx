import React, { useState } from "react";
import TabList from "../components/TabList";

const tabs = [
  {
    id: 0,
    title: "Overview",
  },
  {
    id: 1,
    title: "ATV Trail Options",
  },
  {
    id: 2,
    title: "Details",
  },
];

const Tabs = () => {
  const [isCurrentTab, setIsCurrentTab] = useState(0);

  //   const activeTab = isCurrentTab ? "active" : "";

  console.log(isCurrentTab);

  return (
    <section className="mt-10">
      <div className="mx-auto max-container grid grid-col-1 lg:grid-cols-5">
        <main className="col-span-3 ">
          <div className="flex items-center justify-start gap-x-3">
            {tabs.map((tab) => (
              <button
                className={`${
                  tab.id === isCurrentTab ? "bg-amber-500" : "text-blue"
                } px-4 py-2 border-[1px] border-gray-800 rounded-4xl transition-all cursor-pointer`}
                key={tab.id}
                onClick={() => setIsCurrentTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="py-10">
            {isCurrentTab === 0 && (
              <div className="text-left">
                <h1 className="font-semibold">Overview</h1>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Numquam consequatur ipsam, quo pariatur nesciunt voluptas
                  harum odit? Atque ad praesentium eligendi quo molestias
                  explicabo vel, similique, in consequuntur perspiciatis beatae.
                </p>
              </div>
            )}
            {isCurrentTab === 1 && <div>tab 1</div>}
            {isCurrentTab === 2 && <div>tab 2</div>}
          </div>
        </main>
        <aside className="col-span-2">side</aside>
      </div>
    </section>
  );
};

export default Tabs;
