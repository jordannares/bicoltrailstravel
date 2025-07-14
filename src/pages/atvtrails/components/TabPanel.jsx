import { forwardRef } from "react";
import { useTabs } from "./Tabs";

const TabPanel = forwardRef(({ id, children }, ref) => {
  const { activeTab } = useTabs();

  // return activeTab === id ? (
  //   <div ref={ref} className="relative w-full mt-10 h-[300px]">
  //     {children}
  //   </div>
  // ) : null;
  console.log(children);

  return (
    <>
      {activeTab === id && (
        <div ref={ref} id="overview" className="relative w-full mt-10 ">
          {children}
        </div>
      )}
      {/* {activeTab === "atvtrailoptions" && (
        <div ref={ref} id="atvtrail" className="relative w-full mt-10 ">
          {children}
        </div>
      )}
      {activeTab === "details" && (
        <div ref={ref} id="details" className="relative w-full mt-10 ">
          {children}
        </div>
      )} */}
    </>
  );
});

export default TabPanel;
