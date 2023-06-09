import { Card, CardBody } from "@chakra-ui/react";
import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
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
    name: "Eng1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Eng2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Eng3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Eng4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Eng5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const EngineerChart = () => {
  return (
    <Card
      overflow={"scroll"}
      overflowX={"hidden"}
      variant={"outline"}
      width={"100%"}
      height={400}
      m={0}
    >
      <CardBody>
        <BarChart layout="vertical" width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 1]} />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
        </BarChart>
      </CardBody>
    </Card>
  );
};

export default EngineerChart;
