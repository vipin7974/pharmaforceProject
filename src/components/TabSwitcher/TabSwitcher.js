import React, { useState } from "react";
import PropTypes from "prop-types";
/* import "./TabSwitcher.css";  */

const TabSwitcher = ({ tabs, selectedTab, onTabClick }) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <span
          key={tab}
          className={`tab ${selectedTab === tab ? "selected" : ""}`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </span>
      ))}
    </div>
  );
};
export default TabSwitcher;
