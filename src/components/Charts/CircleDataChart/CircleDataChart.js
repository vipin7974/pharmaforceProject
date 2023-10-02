import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsAccessibility from "highcharts/modules/accessibility";

const CircleDataChart = ({ data }) => {
  const chartContainer = useRef(null);
  useEffect(() => {
    HighchartsMore(Highcharts);
    HighchartsExporting(Highcharts);
    HighchartsAccessibility(Highcharts);

    Highcharts.chart(chartContainer.current, {
      chart: {
        type: "packedbubble",
      },
      title: {
        text: "",
      },
      series: data,
      plotOptions: {
        packedbubble: {
          minSize: "20%",
          maxSize: "100%",
          zMin: 0,
          zMax: 100,
          layoutAlgorithm: {
            splitSeries: false,
            gravitationalConstant: 0.02,
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
          },
        },
      },
      legend: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
    });
  }, []);

  return (
    <div ref={chartContainer} style={{ width: "400px", height: "400px" }}></div>
  );
};

export default CircleDataChart;
