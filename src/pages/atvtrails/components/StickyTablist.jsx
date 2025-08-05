import React from "react";
import { useTabs } from "./Tabs";

const StickyTablist = ({ id, scrollref, activeTabb, children }) => {
  const { defaultTabbb, scrollreff, activeTab, setActiveTab } = useTabs();
  const isactive = activeTab === id;

  const scrollTo = (tabId) => {
    setActiveTab(tabId);

    scrollreff.current[tabId]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    scrollreff.current[tabId]?.current?.click();
  };

  //   console.log(activeTabb);
  return (
    <>
      <button
        className={`border-[1px]  flex border-gray-400 cursor-pointer rounded-4xl px-4 py-2 transition-all font-semibold text-md
                    ${isactive ? "bg-red-200 border-red-400" : "bg-gray-200"}`}
        onClick={() => scrollTo(id)}
      >
        {children}
      </button>
    </>
  );
};

export default StickyTablist;
