import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["From", "To", "Weight", { role: "style" }],
  ["Biopharm", "1st Preference", 1, "#d799ae"],
  ["Biopharm", "2nd Preference", 1, "#d799ae"],
  ["Biopharm", "3rd Preference", 1, "#d799ae"],
  ["Deepintent", "1st Preference", 7, "red"],
  ["Deepintent", "2nd Preference", 7, "red"],
  ["Deepintent", "3rd Preference", 6, "red"],
  ["Sermo", "1st Preference", 1, "#d799ae"],
  ["Sermo", "2nd Preference", 1, "#d799ae"],
  ["Sermo", "3rd Preference", 1, "#d799ae"],
  ["Peer_direct", "1st Preference", 1, "#d799ae"],
  ["Peer_direct", "2nd Preference", 1, "#d799ae"],
  ["Peer_direct", "3rd Preference", 1, "#d799ae"],
  ["Medscape", "1st Preference", 1, "#d799ae"],
  ["Medscape", "2nd Preference", 1, "#d799ae"],
  ["Medscape", "3rd Preference", 1, "#d799ae"],
  ["Connectixion360", "1st Preference", 1, "#d799ae"],
  ["Connectixion360", "2nd Preference", 1, "#d799ae"],
  ["Connectixion360", "3rd Preference", 1, "#d799ae"],
];
const colors = [
  "#a6cee3",
  "#b2df8a",
  "#fb9a99",
  "#fdbf6f",
  "#cab2d6",
  "#ffff99",
];
export const options = {
  height: 400,
  sankey: {
    node: {
      label: {
        fontSize: 14,
        color: "black",
        bold: true,
      },
      colors: colors,
    },
    gradient: {
      enabled: true,
      threshold: 2,
    },
  },
};

export default function SnakeyChart() {
  return (
    <Chart
      chartType="Sankey"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />
  );
}
