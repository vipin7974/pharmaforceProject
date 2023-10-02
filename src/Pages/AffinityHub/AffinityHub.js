import React from "react";
import Card from "../../components/Card/Card";
import HorizontalBarChart, {
  HorizontalBar,
} from "../../components/Charts/HorizontalBar/HorizontalBar";
import SnakeyChart from "../../components/Charts/SnakeyChart/SnakeyChart";
import "./AffinityHub.css";
import { FiMap } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import StackedChartCard from "../../components/Card/StackedChartCard/StackedChartCard";
import {
  BUoptions,
  CALeftdata,
  CARightdata,
  DCAChanneldata,
  PTOPoptions,
  Topicdonutdata,
  TopicdonutdataColors,
  categories,
  categories2,
  data,
  data2,
} from "../../Utills/Images/Datafiles/DataFiIes";
import StackedColumnChart from "../../components/Charts/StackedColumnChart/StackedColumnChart";
import DonutChart from "../../components/Charts/DonutChart/DonutChart";
import SemiDonutChart from "../../components/Charts/SemiDonutChart/SemiDonutChart";
import CircleDataChart from "../../components/Charts/CircleDataChart/CircleDataChart";
import TreeMapChart from "../../components/Charts/TreemapChart/TreemapChart";
import USmapChart from "../../components/Charts/USmapChart/USmapChart";
import BarChart from "../../components/Charts/BarChart/BarChart";
import ColumnChart from "../../components/Charts/ColumnChart/ColumnChart";
const AffinityHub = () => {
  const donutdata = [
    ["Task", "Virtual"],
    ["Low", 11],
    ["Medium", 2],
    ["High", 7],
    ["Very High", 7],
  ];
  const color = ["#E0F2FE", "#37BEFA", "#0AA5ED", "#026AA2"];
  const color2 = ["#F2DAF1", "#C66EBB", "#AC509F", "#733567"];
  const tabdata = [
    "Email",
    "Banners",
    "Programmatic",
    "Custom Media",
    "Endemic Media",
    "SMS",
    "Direct Mail",
    "EHR",
  ];
  const DCAcheckIconStyle = {
    fill: "#7B5AF9",
    marginRight: "5px",
  };
  const PPCAcheckIconStyle = {
    fill: "#AC509F",
    marginRight: "5px",
  };
  return (
    <div className="affinityMain">
      <div className="affinityHeader">
        <div className="state badges">
          <FiMap />
          <span>State</span>
        </div>
        <div className="Specialty drop badges">
          <span>Specialty</span>
          <BiChevronDown className="d_icon" />
        </div>
        <div className="Experience drop badges">
          <span>Experience</span>
          <BiChevronDown className="d_icon" />
        </div>
        <div className="Npi_type drop badges">
          <span>NPI type</span>
          <BiChevronDown className="d_icon" />
        </div>
      </div>
      <div className="row mt-4">
        <h3>Channel Affinity</h3>
        <div className="col-ls-4 col-md-4 col-sm-6">
          <Card
            vh={4}
            h={26}
            m={36}
            l={34}
            cardtitle={"Digital Affinity"}
            vhc="#7F2B0A"
            hc="#AA4203"
            mc="#F69109"
            lc="#FFDF88"
            vs={{ backgroundColor: "#7F2B0A" }}
            hs={{ backgroundColor: "#AA4203" }}
            ms={{ backgroundColor: "#F69109" }}
            ls={{ backgroundColor: "#FFDF88" }}
          />
        </div>
        <div className="col-ls-4 col-md-4 col-sm-6">
          <Card
            vh={4}
            h={26}
            m={36}
            l={34}
            cardtitle={"Personal Promotion Affinity"}
            vhc="#054E30"
            hc="#037A49"
            mc="#13B66A"
            lc="#A6F5C4"
            vs={{ backgroundColor: "#054E30" }}
            hs={{ backgroundColor: "#037A49" }}
            ms={{ backgroundColor: "#13B66A" }}
            ls={{ backgroundColor: "#A6F5C4" }}
          />
        </div>
        <div className="col-ls-4 col-md-4 col-sm-6">
          <Card
            vh={4}
            h={26}
            m={36}
            l={34}
            cardtitle={"Peer to Peer Affinity"}
            vhc="#0A4A6E"
            hc="#026AA2"
            mc="#0AA5ED"
            lc="#B8E6FF"
            vs={{ backgroundColor: "#0A4A6E" }}
            hs={{ backgroundColor: "#026AA2" }}
            ms={{ backgroundColor: "#0AA5ED" }}
            ls={{ backgroundColor: "#B8E6FF" }}
          />
        </div>
      </div>
      <div>
        <HorizontalBar />
        <StackedChartCard
          chart={
            <StackedColumnChart
              data={data}
              categories={categories}
              chartId="DCA"
            />
          }
          title="Digital Channel Affinity"
          channelData={DCAChanneldata}
          checkIconStyle={DCAcheckIconStyle}
        />
        <StackedChartCard
          chart={
            <StackedColumnChart
              data={data2}
              categories={categories2}
              chartId="PPCA"
            />
          }
          title="Personal Promotion Channel Affinity"
          channelData={categories2}
          checkIconStyle={PPCAcheckIconStyle}
        />
        <div className="row mt-4 donut_row">
          <div className="col-ls-4 col-md-4 donut col-with-gap">
            <DonutChart
              datas={donutdata}
              color={color}
              title="Virtual"
              width="100%"
              height="60%"
              lp="bottom"
              ph={0.5}
              ch="400px"
            />
          </div>
          <div className="col-ls-4 col-md-4 donut col-with-gap">
            <SemiDonutChart
              options={PTOPoptions}
              cstyle={{ width: "100%", height: "400px" }}
            />
          </div>
          <div className="col-ls-4 col-md-4 donut col-no-gap">
            <DonutChart
              datas={donutdata}
              color={color2}
              title="In-person"
              width="100%"
              height="60%"
              lp="bottom"
              ph={0.5}
              ch="400px"
            />
          </div>
        </div>
        <div className="mt-4">
          <div>
            <h3 className="mb-5">Vender Affinity</h3>
          </div>
          <div className="mb-5">
            <h5>Vender Affinity</h5>
            <div className="Vtabs">
              {tabdata.map((val) => {
                return <span className="tab">{val}</span>;
              })}
            </div>
          </div>
          <SnakeyChart />
        </div>

        <div className="row mt-4">
          <h3>Content Affinity</h3>
          <div className="col-ls-4 col-md-4 content_a">
            <div>
              <div className="content_a_header">
                <h5>Keyword 1</h5>
                <span>5124 keywords overall</span>
              </div>
              <CircleDataChart data={CALeftdata} />
            </div>
          </div>
          <div className="col-ls-4 col-md-4 content_a">
            <div>
              <div className="content_a_header">
                <h5>Keyword 2</h5>
                <span>5124 keywords overall</span>
              </div>
              <TreeMapChart />
            </div>
          </div>
          <div className="col-ls-4 col-md-4 content_a">
            <div>
              <div className="content_a_header">
                <h5>Keyword 3</h5>
                <span>5124 keywords overall</span>
              </div>
              <CircleDataChart data={CARightdata} />
            </div>
          </div>
        </div>
        <div>
          <div className="row g-3 mt-5">
            <div className="col-6 sdonut">
              <div className="row">
                <div className="col-6">
                  <DonutChart
                    datas={Topicdonutdata}
                    color={TopicdonutdataColors}
                    title=""
                    width="90%"
                    height="100%"
                    lp="right"
                    ph={0.7}
                    ch="200px"
                  />
                </div>
                <div className="col-6 ">
                  <h6>Topic</h6>
                  <br />
                  <span>
                    Top rated topic: <span className="dosing">Dosing</span>
                  </span>
                  <h4 className="mt-2">35%</h4>
                </div>
              </div>
            </div>
            <div className="col-6 bucol">
              <div className="row">
                <div className="col-6">
                  <SemiDonutChart
                    options={BUoptions}
                    cstyle={{ width: "100%", height: "300px" }}
                  />
                </div>
                <div className="col-6 ">
                  <h6>Content type </h6>
                  <br />
                  <div className="contentType_right">
                    <div>
                      <span>Branded</span>
                      <br />
                      <h3>6524</h3>
                    </div>
                    <div>
                      <span>Unbranded</span>
                      <br />
                      <h3>6524</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="mb-3">Distribution by location</h3>
          <div className="row mt-4 pt-5 DBL_row">
            <div className="col-8">
              <USmapChart />
            </div>
            <div className="col-4 p-3 DBL_right">
              <h5>Top states by individuals</h5>
              <p>7 million overall individuals</p>
              <BarChart />
            </div>
          </div>
        </div>
        <div>
          <h3>Distribution by Years of Experience</h3>
          <ColumnChart />
        </div>
      </div>
    </div>
  );
};

export default AffinityHub;
