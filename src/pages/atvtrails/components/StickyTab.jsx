import React, { useEffect, useRef, useState } from "react";
import TabItem from "../../../components/TabItem";
import sections from "../../../data/Tabs";
import Tablist from "./Tablist";
import Tabs, { useTabs } from "./Tabs";
import StickyTablist from "./StickyTablist";

const StickyTab = () => {
  const sectionsRef = useRef(
    sections.reduce((acc, section) => {
      acc[section.id] = React.createRef();
      return acc;
    }, {})
  );

  const [isAtTop, setIsAtTop] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const [activeTab, setActiveTab] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = 150;
      const newVisible = [];

      let newActiveTab = activeTab;

      for (const section of sections) {
        const ref = sectionsRef.current[section.id];
        const el = ref?.current;
        if (!el) continue;

        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= scrollOffset) {
            newVisible.push({ id: section.id, title: section.title });
            newActiveTab = section.id;

            setIsAtTop(true);
          }
        }
      }
      if (newActiveTab !== activeTab) {
        setActiveTab(newActiveTab);
      }

      setVisibleSections(newVisible);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  // console.log(activeTab);
  return (
    <>
      <Tabs
        defaultTabbb={activeTab}
        defaultTab={activeTab}
        scrollreff={sectionsRef}
      >
        <Tablist>
          {sections.map((s) => (
            <StickyTablist
              scrollref={sectionsRef.current[s.id]}
              key={s.id}
              id={s.id}
              activeTabb={activeTab}
            >
              {s.title}
            </StickyTablist>
          ))}
        </Tablist>
      </Tabs>
    </>
  );
};

export default StickyTab;
