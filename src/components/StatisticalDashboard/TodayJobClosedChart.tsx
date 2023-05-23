import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

interface DataItem {
  name: string;
  value: number;
}

const TodayJobClosedChart: React.FC = () => {
  const data: DataItem[] = [{ name: "Group A", value: 400 }];

  return (
    <div>
      <h2
        style={{
          marginLeft: "10px",
          marginTop: "10px",
          marginBottom: "-30px",
          fontSize: "1.5rem",
          color: "grey",
        }}
      >
        Planned Vs Actual
      </h2>
      <ResponsiveContainer width={800} height={400}>
        <PieChart>
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
      </ResponsiveContainer>
      <p></p>
      <p
        style={{
          marginLeft: "15px",
          marginTop: "-250px",
          marginBottom: "-100px",
          fontSize: "1rem",
        }}
      >
        0 of 0 today jobs closed
      </p>
    </div>
  );
};

export default TodayJobClosedChart;
