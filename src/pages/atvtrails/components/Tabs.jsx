import { createContext, useContext, useState } from "react";

const TabsContext = createContext();

export const useTabs = () => useContext(TabsContext);

const Tabs = ({ defaultTab, scrollref, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  // console.log(defaultTab);
  return (
    <TabsContext value={{ defaultTab, scrollref, activeTab, setActiveTab }}>
      {children}
    </TabsContext>
  );
};

export default Tabs;
