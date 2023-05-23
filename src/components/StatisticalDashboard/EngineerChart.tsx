import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface DataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: DataItem[] = [
  {
    name: "Engineer",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Engineer",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Engineer",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Engineer",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Engineer",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const EngineerChart: React.FC = () => {
  return (
    <>
      <h2
        style={{
          marginLeft: "10px",
          marginTop: "5px",
          marginBottom: "0px",
          fontSize: "1.5rem",
          color: "grey",
        }}
      >
        Engineer Hours last 7 days
      </h2>
      <LineChart
        layout="vertical"
        width={800}
        height={350}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 80,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" domain={[0, 1]} />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
      </LineChart>
    </>
  );
};

export default EngineerChart;
