import React from "react";
import { Chart } from "react-google-charts";
import "./HorizontalBar.css";
import { FiPieChart, FiBarChart } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { RiBarChartHorizontalLine } from "react-icons/ri";

export const data = [
  [
    "Element",
    "Digital",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["", 40, "#F69109", "40%"],
  ["", 57, "#F69109", "57%"],
  ["", 64, "#F69109", "64%"],
];

export const dataR = [
  [
    "Category",
    "Personal promotion",
    { role: "style" },
    { role: "annotation" },
    "Peer to peer",
    { role: "style" },
    { role: "annotation" },
  ],
  ["1st Preference", 33, "color:#13B66A", "33%", 23, "color: #37BEFA", "23%"],
  ["2nd Preference", 14, "color:#13B66A", "14%", 29, "color: #37BEFA", "29%"],
  ["3rd Preference", 18, "color:#13B66A", "18%", 18, "color: #37BEFA", "18%"],
];

export const optionsR = {
  width: 600,
  height: 400,
  bar: { groupWidth: "75%", borderRadius: 10 },
  annotations: {
    alwaysOutside: true,
    textStyle: {
      fontSize: 12,
    },
  },
  legend: { position: "none" },
  isStacked: true,
  hAxis: {
    format: "#'%'",
    ticks: [0, 20, 40, 60, 80, 100],
  },
};

export const options = {
  width: 600,
  height: 400,
  bar: { groupWidth: "75%" },
  legend: { position: "none" },
  hAxis: {
    direction: -1,
    format: "#'%'",
    ticks: [0, 20, 40, 60, 80, 100],
  },
};

export function HorizontalBar() {
  return (
    <div className="horizontalChart_main">
      <div className="horizontaChart_header">
        <div>
          <h5>
            <span className="digital">Digital</span> VS{" "}
            <span className="non_digital">non-digital</span> Affinity
          </h5>
          <span>%,In Percent</span>
        </div>
        <div className="Hswitchchart">
          <FiBarChart class="Hswicthchart_pie" />
          <span class="Hswicthchart_center"></span>
          <FiPieChart class="Hswicthchart_sq" />
          <span class="Hswicthchart_center"></span>
          <RiBarChartHorizontalLine class="Hswicthchart_sq" />
        </div>
      </div>
      <div className="chart_labels hdot_container">
        <div class="dot-label-container ">
          <div class="hdot digital_dot"></div>
          <div class="hlabel">Digital</div>
        </div>
        <div class="dot-label-container">
          <div class="hdot p_dot"></div>
          <div class="hlabel">Personal promotion</div>
        </div>
        <div class="dot-label-container">
          <div class="hdot pp_dot"></div>
          <div class="hlabel">Peer to peer</div>
        </div>
        <span>
          <span></span>
        </span>
        <span>
          <span></span>
        </span>
      </div>
      <div className="horizontalChart_diagram">
        <Chart
          className="left_chart"
          chartType="BarChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
        <Chart
          className="right_chart"
          chartType="BarChart"
          width="100%"
          height="400px"
          data={dataR}
          options={optionsR}
        />
      </div>
    </div>
  );
}
