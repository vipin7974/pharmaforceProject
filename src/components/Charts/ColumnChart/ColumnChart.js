import React, { useState } from "react";
import { Chart } from "react-google-charts";

const ColumnChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const data = [
    ["Years of experience", "Count to individuals"],
    ["Less than 5 years", 200],
    ["5-10 years", 320],
    ["10-15 years", 600],
    ["15-20 years", 560],
    ["20+ years", 412],
  ];

  const options = {
    title: "",
    hAxis: {
      title: "Years of Experience",
    },
    vAxis: {
      title: "Count to Individuals",
      ticks: [0, 200, 400, 600, 800, 1000],
    },
    legend: "none",
    colors: ["#E5E5E5"],
  };

  const handleMouseOver = (rowIndex) => {
    setHoveredIndex(rowIndex + 1);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="ColumnChart"
        data={data}
        options={options}
        chartEvents={[
          {
            eventName: "onmouseover",
            callback: ({ row }) => handleMouseOver(row),
          },
          {
            eventName: "onmouseout",
            callback: () => handleMouseOut(),
          },
        ]}
      />
    </div>
  );
};

export default ColumnChart;
