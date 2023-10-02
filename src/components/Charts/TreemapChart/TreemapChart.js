import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HCMore from "highcharts/highcharts-more";
import HCTreemap from "highcharts/modules/treemap";

HCMore(Highcharts);
HCTreemap(Highcharts);

const TreeMapChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        type: "treemap",
        height: "400px",
      },
      title: {
        text: "",
      },
      series: [
        {
          type: "treemap",
          layoutAlgorithm: "squarified",
          data: [
            {
              name: "Management",
              value: 100,
              color: "#BFADF6",
            },
            {
              name: "Case manager",
              value: 150,
              color: "#CEC1F9",
            },
            {
              name: "Nociceptive Pain",
              value: 200,
              color: "#A286F2",
            },
            {
              name: "Crap Gap",
              value: 90,
              color: "#BFADF6",
            },
            {
              name: "Regimen",
              value: 60,
              color: "#A286F2",
            },
            {
              name: "Radiologically Isolated Syndrome (RIS)",
              value: 200,
              color: "#B098F5",
            },
            {
              name: "Clinically Isolated Syndrome (CIS)",
              value: 200,
              color: "#9473F2",
            },
            {
              name: "Imaging tast ",
              value: 60,
              color: "#875FF0",
            },
            {
              name: "Targeted therapy",
              value: 130,
              color: "#774AF0",
            },
            {
              name: "Oligoclonal Bands",
              value: 150,
              color: "#6939EE",
            },
          ],
        },
      ],
      exporting: {
        enabled: false,
      },
    };

    Highcharts.chart("treemap-chart", options);
  }, []);

  return <div id="treemap-chart"></div>;
};

export default TreeMapChart;
