import React, { useState } from "react";
import StackedColumnChart from "../../Charts/StackedColumnChart/StackedColumnChart";
import { AiOutlinePercentage } from "react-icons/ai";
import { GoHash } from "react-icons/go";
import "./StackedChartCard.css";
import {
  categories,
  categories2,
  data,
  data2,
} from "../../../Utills/Images/Datafiles/DataFiIes";
import { BsFillCheckSquareFill } from "react-icons/bs";
import TabSwitcher from "../../TabSwitcher/TabSwitcher";

const StackedChartCard = ({ chart, title, channelData, checkIconStyle }) => {
  const [selectedTab, setSelectedTab] = useState("All");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };
  const tabs = ["All", "1st Preference", "2nd Preference", "3rd Preference"];
  return (
    <div className="stackedChartCard_main">
      <div className="StackedChart_header">
        <div className="StackedChart_header_top">
          <div>
            <h5>{title}</h5>
          </div>
          <div className="Hswitchchart">
            <AiOutlinePercentage class="Hswicthchart_pie" />
            <span class="Hswicthchart_center"></span>
            <GoHash class="Hswicthchart_sq" />
          </div>
        </div>
        <TabSwitcher
          tabs={tabs}
          selectedTab={selectedTab}
          onTabClick={handleTabClick}
        />
      </div>
      <div className="row stack_row">
        <div className="col-ls-10 col-md-10 col-sm-6 stack_col">{chart}</div>
        <div className="col-ls-2 col-md-2 col-sm-6 channels_col">
          <div className="Channel_list">
            <div>
              <h5>Channel</h5>
            </div>
            {channelData.map((val) => {
              return (
                <div key={val}>
                  <BsFillCheckSquareFill
                    className="square_Check_icon"
                    style={checkIconStyle}
                  />
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedChartCard;
