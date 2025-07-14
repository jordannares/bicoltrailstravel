import { forwardRef, useState } from "react";
import { useTabs } from "../pages/atvtrails/components/Tabs";

const TabItem = forwardRef(({ id, activeTabb, children }, ref) => {
  const { defaultTab, scrollref, activeTab, setActiveTab } = useTabs();
  const isactive = activeTabb === id;

  const scrollTo = (tabId) => {
    setActiveTab(tabId);

    scrollref.current[id].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // scrollref?.current?.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });

    // setTimeout(() => {
    //   scrollref?.current?.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //   });
    // }, 0);

    scrollref?.current?.click();
  };

  // console.log(defaultTab);
  return (
    <>
      <button
        ref={ref}
        className={`border-[1px]  flex border-gray-400 cursor-pointer rounded-4xl px-4 py-2 transition-all font-semibold text-md
                    ${isactive ? "bg-red-200 border-red-400" : "bg-gray-200"}`}
        onClick={() => scrollTo(id)}
      >
        {children}
      </button>
    </>
  );
});

export default TabItem;
