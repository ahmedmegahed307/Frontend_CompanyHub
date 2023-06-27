import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import {
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "Jan",
    cancelled: 0,
    logged: 12,
    amt: 2400,
  },
  {
    name: "Feb",
    cancelled: 5,
    logged: 15,
    amt: 2210,
  },
  {
    name: "Mar",
    cancelled: 10,
    logged: 28,
    amt: 2290,
  },
  {
    name: "Apr",
    cancelled: 30,
    logged: 16,
    amt: 2000,
  },
  {
    name: "May",
    cancelled: 2,
    logged: 14,
    amt: 2181,
  },
  {
    name: "Jun",
    cancelled: 25,
    logged: 7,
    amt: 2500,
  },
  {
    name: "Jul",
    cancelled: 8,
    logged: 2,
    amt: 2100,
  },
  {
    name: "Aug",
    cancelled: 20,
    logged: 30,
    amt: 2400,
  },
  {
    name: "Sep",
    cancelled: 30,
    logged: 25,
    amt: 2210,
  },
  {
    name: "Oct",
    cancelled: 6,
    logged: 1.5,
    amt: 2290,
  },
  {
    name: "Nov",
    cancelled: 20,
    logged: 18,
    amt: 2000,
  },
  {
    name: "Dec",
    cancelled: 25,
    logged: 1.6,
    amt: 2181,
  },
];
const JobChart = () => {
  return (
    <>
      <Card variant={"outline"}>
        <CardHeader>
          <Heading size={"lg"}> Total number of jobs over time</Heading>
        </CardHeader>
        <CardBody>
          <LineChart width={600} height={500} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} />
            <YAxis domain={[0, 30]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="logged"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="cancelled" stroke="#82ca9d" />
          </LineChart>
        </CardBody>
      </Card>
    </>
  );
};

export default JobChart;
