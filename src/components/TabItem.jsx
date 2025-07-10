import { useState } from "react";
import { useTabs } from "../pages/atvtrails/components/Tabs";

const TabItem = ({ id, scrollref, children }) => {
  const { activeTab, setActiveTab } = useTabs();
  const isactive = activeTab === id;

  const handleClickTab = (tabId) => {
    setActiveTab(tabId);

    setTimeout(() => {
      scrollref?.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  console.log(activeTab);
  return (
    <>
      <button
        className={`border-[1px] border-gray-400 cursor-pointer rounded-4xl px-4 py-2 transition-all font-semibold text-md
                    ${isactive ? "bg-red-200 border-red-400" : "bg-gray-200"}`}
        onClick={() => handleClickTab(id)}
      >
        {children}
      </button>
    </>
  );
};

export default TabItem;
