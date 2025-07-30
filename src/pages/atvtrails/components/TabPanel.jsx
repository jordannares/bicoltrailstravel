import { forwardRef } from "react";
// import { useTabs } from "./Tabs";
import AtvTrailOptions from "./AtvTrailOptions";
import Details from "../sections/Details";
import Reviews from "../sections/Reviews";
import Overview from "../sections/Overview";

const TabPanel = forwardRef(({ id }, ref) => {
  // const { activeTab } = useTabs();

  return (
    <>
      {id === "overview" && <Overview ref={ref} />}
      {id === "atvtrailoptions" && <AtvTrailOptions ref={ref} />}
      {id === "details" && <Details ref={ref} />}
      {id === "reviews" && <Reviews ref={ref} />}
    </>
  );
});

export default TabPanel;
