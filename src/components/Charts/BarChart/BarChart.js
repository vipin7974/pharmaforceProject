import React from "react";
import { Chart } from "react-google-charts";

const BarChart = () => {
  const data = [
    ["State", "Health Percentage"],
    ["AL", 80],
    ["AK", 75],
    ["AZ", 70],
    ["CA", 85],
    ["FL", 60],
    ["GA", 72],
    ["IL", 88],
    ["IN", 78],
    ["KY", 66],
    ["MA", 90],
    ["MD", 84],
    ["MI", 76],
    ["NC", 68],
  ];

  data.sort((a, b) => b[1] - a[1]);

  const options = {
    chart: {
      title: "",
      subtitle: "",
    },
    hAxis: {
      title: "",
      minValue: 0,
      maxValue: 100,
      ticks: [],
    },
    vAxis: {
      title: "",
    },
    annotations: {
      textStyle: {
        fontSize: 12,
      },
    },
    colors: ["#2E91FB"],
    backgroundColor: "transparent",
    legend: "none",
  };

  return (
    <div className="barChartMain">
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
      />
    </div>
  );
};

export default BarChart;
