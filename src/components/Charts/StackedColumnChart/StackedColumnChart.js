import React, { useEffect } from "react";
import Highcharts from "highcharts";

const StackedColumnChart = ({ data, categories, chartId }) => {
  useEffect(() => {
    const options = {
      chart: {
        type: "column",
        renderTo: chartId,
      },
      title: {
        text: "",
      },
      xAxis: {
        categories: categories,
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: "Total Patients",
        },
        tickInterval: 20,
        labels: {
          format: "{value}%",
        },
      },
      plotOptions: {
        column: {
          stacking: "percent",
          dataLabels: {
            enabled: true,
            format: "{y}%",
          },
        },
      },
      legend: {
        align: "center",
        x: 70,
        verticalAlign: "top",
        y: 70,
      },
      series: data,
    };

    Highcharts.chart(chartId, options);
  }, [data, categories, chartId]);

  return <div id={chartId} />;
};

export default StackedColumnChart;
