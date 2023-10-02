import React from "react";
import { Chart } from "react-google-charts";

const DonutChart = ({ datas, color, title, width, height, lp, ph, ch }) => {
  const options = {
    title: title,
    titleTextStyle: {
      fontSize: 16,
      marginLeft: 20,
    },
    pieHole: ph,
    pieSliceText: "none",
    legend: {
      position: lp,
    },
    colors: color,
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    chartArea: {
      width: width,
      height: height,
      borderRadius: 10,
    },
  };

  return (
    <Chart
      chartType="PieChart"
      width={"100%"}
      height={ch}
      data={datas}
      options={options}
    />
  );
};

export default DonutChart;
