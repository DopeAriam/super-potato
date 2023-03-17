import React, { useState } from "react";

import "./tab.css";
import TabContent1 from "./tabContent1";
import TabContent2 from "./tabContent2";
import TabContent3 from "./tabContent3";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="tab-buttons">
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
      </div>
      <div className="tab-content-container">
        <div
          className={`tab-content ${activeTab === 1 ? "active" : ""}`}
        >
          <TabContent1 />
        </div>
        <div
          className={`tab-content ${activeTab === 2 ? "active" : ""}`}
        >
          <TabContent2 />
        </div>
        <div
          className={`tab-content ${activeTab === 3 ? "active" : ""}`}
        >
          <TabContent3/>
        </div>
      </div>
    </div>
  );
};

export default Tab;
