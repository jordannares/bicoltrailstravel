import { createContext, useContext, useState } from "react";

const TabsContext = createContext();

export const useTabs = () => useContext(TabsContext);

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContext value={{ activeTab, setActiveTab }}>{children}</TabsContext>
  );
};

export default Tabs;
