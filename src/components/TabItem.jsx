import { useState } from "react";
import { useTabs } from "../pages/atvtrails/components/Tabs";
import { cn } from "../../src/utils/cn";

const TabItem = ({ id, scrollref, activeTabb, children }) => {
  const { defaultTabbb, scrollreff, activeTab, setActiveTab } = useTabs();
  const isactive = defaultTabbb === id;

  const scrollTo = (tabId) => {
    setActiveTab(tabId);

    scrollreff.current[tabId]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    scrollreff.current[tabId]?.current?.click();
    // scrollref?.current?.click();
  };

  return (
    <>
      <button
        className={cn(
          "flex border-[1px] border-gray-300 cursor-pointer rounded-4xl px-4 py-2 transition-all font-semibold text-[15px]",
          isactive ? "bg-[#FBA518]/20 border-[#FBA518]" : "bg-gray-100/20"
        )}
        // className={`flex border-[1px] border-gray-300 cursor-pointer rounded-4xl px-4 py-2 transition-all font-semibold text-[15px]
        //             ${isactive ? "bg-[#A89C29]/20" : "bg-gray-100/20"}`}
        onClick={() => scrollTo(id)}
      >
        {children}
      </button>
    </>
  );
};

export default TabItem;
