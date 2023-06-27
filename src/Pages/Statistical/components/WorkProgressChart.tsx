import { Card, CardBody, Heading, Center, CardHeader } from "@chakra-ui/react";
import React from "react";
import { PieChart, Pie } from "recharts";

interface DataItem {
  name: string;
  value: number;
}

const WorkProgressChart: React.FC = () => {
  const data: DataItem[] = [{ name: "Group A", value: 400 }];

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size={"lg"}>Work In Progress</Heading>
        </CardHeader>
        <CardBody>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={140}
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={90}
              fill="#00C49F"
              paddingAngle={5}
              dataKey="value"
            ></Pie>
          </PieChart>

          <Center>0 of 0 scheduled jobs complete</Center>
        </CardBody>
      </Card>
    </>
  );
};

export default WorkProgressChart;
