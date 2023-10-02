import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";

const SemiDonutChart = ({ options, cstyle }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      Highcharts.chart(chartRef.current, options);
    }
  }, []);

  return <div ref={chartRef} style={cstyle}></div>;
};

export default SemiDonutChart;
