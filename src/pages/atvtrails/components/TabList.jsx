import React from "react";

const TabList = ({ currentTab, id, title }) => {
  return (
    <>
      <button className={`${currentTab === id ? "text-red" : "text-blue"}`}>
        {title}
      </button>
    </>
  );
};

export default TabList;
