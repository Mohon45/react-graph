import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import "./Graph.css";

const data = [
  {
    name: "2nd Over",
    BAN: 10,
    IND: 11,
  },
  {
    name: "4th Over",
    BAN: 30,
    IND: 39,
  },
  {
    name: "6th Over",
    BAN: 20,
    IND: 8,
  },
  {
    name: "8th Over",
    BAN: 27,
    IND: 19,
  },
  {
    name: "10th Over",
    BAN: 15,
    IND: 19,
  },
  {
    name: "12th Over",
    BAN: 18,
    IND: 19,
  },
  {
    name: "14th Over",
    BAN: 22,
    IND: 13,
  },
  {
    name: "16th Over",
    BAN: 5,
    IND: 15,
  },
  {
    name: "16th Over",
    BAN: 10,
    IND: 18,
  },
  {
    name: "18th Over",
    BAN: 16,
    IND: 9,
  },
  {
    name: "20th Over",
    BAN: 20,
    IND: 18,
  },
];

// const renderCustomizedLabel = (props) => {
//   const { x, y, width, value } = props;
//   const radius = 10;

//   return (
//     <g>
//       <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
//       {/* <text
//         x={x + width / 2}
//         y={y - radius}
//         fill="#fff"
//         textAnchor="middle"
//         dominantBaseline="middle"
//       >
//         {value.split(" ")[1]}
//       </text> */}
//     </g>
//   );
// };

const Graph = () => {
  return (
    <div>
      <h1>Qutrix Solution Graph Chart</h1>
      <p>BANGLADESH VS INDIA CRICKET MATCH</p>
      <div className="bar-chart">
        <BarChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis tickCount="10" />
          <Tooltip />
          <Legend />
          <Bar dataKey="BAN" fill="#8884d8" minPointSize={5} />
          <Bar dataKey="IND" fill="#82ca9d" minPointSize={10} />
        </BarChart>
      </div>
    </div>
  );
};

export default Graph;
