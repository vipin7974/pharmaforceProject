export const data = [
  {
    name: "Very High",
    data: [
      { x: 0, y: 20 },
      { x: 1, y: 10 },
      { x: 2, y: 26 },
      { x: 3, y: 40 },
      { x: 4, y: 12 },
      { x: 5, y: 13 },
      { x: 6, y: 16 },
      { x: 7, y: 9 },
    ],
    color: "#5925DC",
  },
  {
    name: "High",
    data: [
      { x: 0, y: 15 },
      { x: 1, y: 30 },
      { x: 2, y: 10 },
      { x: 3, y: 25 },
      { x: 4, y: 12 },
      { x: 5, y: 13 },
      { x: 6, y: 16 },
      { x: 7, y: 9 },
    ],
    color: "#BCADFD",
  },
  {
    name: "Medium",
    data: [
      { x: 0, y: 30 },
      { x: 1, y: 5 },
      { x: 2, y: 35 },
      { x: 3, y: 15 },
      { x: 4, y: 12 },
      { x: 5, y: 13 },
      { x: 6, y: 16 },
      { x: 7, y: 9 },
    ],
    color: "#CDC5FD",
  },
  {
    name: "Low",
    data: [
      { x: 0, y: 45 },
      { x: 1, y: 55 },
      { x: 2, y: 29 },
      { x: 3, y: 20 },
      { x: 4, y: 12 },
      { x: 5, y: 13 },
      { x: 6, y: 16 },
      { x: 7, y: 9 },
    ],
    color: "#ECEBFF",
  },
];

export const categories = [
  "Email",
  "Banner",
  "Programmatic",
  "Custom Media",
  "Endemic Media",
  "SMS",
  "Direct Mail",
  "EHR",
];

export const data2 = [
  {
    name: "Very High",
    data: [
      { x: 0, y: 20 },
      { x: 1, y: 10 },
      { x: 2, y: 26 },
      { x: 3, y: 40 },
    ],
    color: "#733567",
  },
  {
    name: "High",
    data: [
      { x: 0, y: 15 },
      { x: 1, y: 30 },
      { x: 2, y: 10 },
      { x: 3, y: 25 },
    ],
    color: "#AC509F",
  },
  {
    name: "Medium",
    data: [
      { x: 0, y: 30 },
      { x: 1, y: 5 },
      { x: 2, y: 35 },
      { x: 3, y: 15 },
    ],
    color: "#C66EBB",
  },
  {
    name: "Low",
    data: [
      { x: 0, y: 45 },
      { x: 1, y: 55 },
      { x: 2, y: 29 },
      { x: 3, y: 20 },
    ],
    color: "#E9BEE3",
  },
];

export const categories2 = [
  "Rep Triggerd Digital",
  "Personal-F2F",
  "Phone Call",
  "Virtual Presentation",
];

export const DCAChanneldata = [
  "Email",
  "Banners",
  "Programmatic",
  "Custom Media",
  "Endemic Media",
  "SMS",
  "Direct Mail",
  "EHR",
];

export const PTOPoptions = {
  chart: {
    type: "pie",
    backgroundColor: "transparent",
  },
  title: {
    text: "Preferred Peer to Peer Channel",
    align: "top",
    verticalAlign: "middle",
    style: {
      fontSize: "20px",
    },
    y: -130,
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false,
        distance: -20,
      },
      startAngle: -90,
      endAngle: 90,
      center: ["50%", "80%"],
      size: "80%",
    },
  },
  exporting: {
    enabled: false,
  },
  series: [
    {
      type: "pie",
      name: "",
      innerSize: "80%",
      data: [
        {
          y: 0,
          name: "Virtual",
          dataLabels: {
            enabled: true,
            marginTop: 20,
          },
        },
        {
          y: 56,
          name: "Virtual",
          color: "#37BEFA",
        },
        {
          y: 44,
          name: "In-person",
          color: "#CF71AF",
        },
        {
          y: 0,
          name: "In-person",
          dataLabels: {
            enabled: true,
          },
        },
      ],
    },
  ],
};

export const BUoptions = {
  chart: {
    type: "pie",
    backgroundColor: "transparent",
  },
  title: {
    text: "Branded Unbranded",
    align: "center",
    verticalAlign: "middle",
    style: {
      fontSize: "10px",
    },
    y: -60,
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false,
        distance: -60,
        style: {
          fontSize: "15px",
        },
      },
      startAngle: -90,
      endAngle: 90,
      center: ["50%", "40%"],
      size: "80%",
    },
  },
  exporting: {
    enabled: false,
  },
  series: [
    {
      type: "pie",
      name: "",
      innerSize: "80%",
      data: [
        {
          y: 0,
          name: "58,2%",
          dataLabels: {
            enabled: true,
          },
        },
        {
          y: 58.2,
          name: "Branded",
          color: "#894585",
        },
        {
          y: 41.8,
          name: "Unbranded",
          color: "#E29CD2",
        },
        {
          y: 0,
          name: "41,8%",
          dataLabels: {
            enabled: true,
          },
        },
      ],
    },
  ],
};

export const Topicdonutdata = [
  ["Topic", "Value"],
  ["Efficiency", 11],
  ["Safety", 2],
  ["Dosing", 35],
  ["MOA", 7],
  ["Disease State", 11],
];
export const TopicdonutdataColors = [
  "#F2DAF1",
  "#894585",
  "#B048B5",
  "#CF71AF",
  "#E29CD2",
];

export const CALeftdata = [
  {
    data: [
      {
        name: "Management",
        value: 100,
        color: "#FBB117",
      },
      {
        name: "Case manager",
        value: 150,
        color: "#FFCD8C",
      },
      {
        name: "Nociceptive Pain",
        value: 200,
        color: "#FFE6C7",
      },
      {
        name: "Crap Gap",
        value: 90,
        color: "#FFCD8C",
      },
      {
        name: "Regimen",
        value: 60,
        color: "#FFE6C7",
      },
      {
        name: "Radiologically Isolated Syndrome (RIS)",
        value: 200,
        color: "#FFE6C7",
      },
      {
        name: "Clinically Isolated Syndrome (CIS)",
        value: 200,
        color: "#FFCD8C",
      },
      {
        name: "Imaging tast ",
        value: 60,
        color: "#FFE6C7",
      },
      {
        name: "Targeted therapy",
        value: 130,
        color: "#FBB117",
      },
      {
        name: "Oligoclonal Bands",
        value: 150,
        color: "#FFE6C7",
      },
    ],
  },
];

export const CARightdata = [
  {
    data: [
      {
        name: "Management",
        value: 100,
        color: "#5CB3FF",
      },
      {
        name: "Case manager",
        value: 150,
        color: "#5CB3FF",
      },
      {
        name: "Nociceptive Pain",
        value: 200,
        color: "#A2CFFE",
      },
      {
        name: "Crap Gap",
        value: 90,
        color: "#A2CFFE",
      },
      {
        name: "Regimen",
        value: 60,
        color: "#A2CFFE",
      },
      {
        name: "Radiologically Isolated Syndrome (RIS)",
        value: 200,
        color: "#D9E4F5",
      },
      {
        name: "Clinically Isolated Syndrome (CIS)",
        value: 200,
        color: "#D9E4F5",
      },
      {
        name: "Imaging tast ",
        value: 60,
        color: "#D9E4F5",
      },
      {
        name: "Targeted therapy",
        value: 130,
        color: "#A2CFFE",
      },
      {
        name: "Oligoclonal Bands",
        value: 150,
        color: "#A2CFFE",
      },
    ],
  },
];
