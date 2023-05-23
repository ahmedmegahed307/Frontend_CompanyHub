import EngineerChart from "./EngineerChart";
import JobChart from "./JobChart";
import TodayJobClosedChart from "./TodayJobClosedChart";
import WorkProgressChart from "./WorkProgressChart";
//style={{ position: "absolute", left: -300, top: 10 }}
export default function Statistical() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <TodayJobClosedChart />
        </div>
        <div style={{ flex: 1, marginLeft: "-500px" }}>
          <WorkProgressChart />
        </div>
      </div>
      <div style={{ position: "absolute", top: 320, left: 0 }}>
        <EngineerChart />
      </div>
      <div style={{ position: "absolute", top: 150, right: 0 }}>
        <JobChart />
      </div>
    </div>
  );
}
