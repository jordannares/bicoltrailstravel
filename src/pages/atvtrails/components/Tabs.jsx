import { createContext, useContext, useState } from "react";

const TabsContext = createContext();

export const useTabs = () => useContext(TabsContext);

const Tabs = ({ defaultTabbb, defaultTab, scrollreff, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  // console.log(defaultTab);
  return (
    <TabsContext value={{ defaultTabbb, scrollreff, activeTab, setActiveTab }}>
      {children}
    </TabsContext>
  );
};

export default Tabs;
