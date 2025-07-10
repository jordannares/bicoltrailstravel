import { forwardRef } from "react";
import { useTabs } from "./Tabs";

const TabPanel = forwardRef(({ id, children }, ref) => {
  const { activeTab } = useTabs();

  // return activeTab === id ? (
  //   <div ref={ref} className="relative w-full mt-10 h-[300px]">
  //     {children}
  //   </div>
  // ) : null;

  return (
    <>
      {activeTab === 0 && (
        <div ref={ref} className="relative w-full mt-10 h-[300px]">
          {children}
        </div>
      )}
      {activeTab === 1 && (
        <div ref={ref} className="relative w-full mt-10 h-[300px]">
          {children}
        </div>
      )}
      {activeTab === 2 && (
        <div ref={ref} className="relative w-full mt-10 h-[300px]">
          {children}
        </div>
      )}
    </>
  );
});

export default TabPanel;
