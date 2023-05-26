import { Box, Flex, HStack } from "@chakra-ui/react";
import EngineerChart from "./EngineerChart";
import JobChart from "./JobChart";
import TodayJobClosedChart from "./TodayJobClosedChart";
import WorkProgressChart from "./WorkProgressChart";
//style={{ position: "absolute", left: -300, top: 10 }}
export default function Statistical() {
  return (
    <>
      <Flex bg={"#f8f8f8"} p={10} w={"full"} direction={"row"}>
        <Flex width={"full"} direction={"column"} w={"full"}>
          <HStack>
            <TodayJobClosedChart />
            <WorkProgressChart />
          </HStack>
          <HStack>
            <EngineerChart />
          </HStack>
        </Flex>

        <Flex w={"full"}>
          <JobChart />
        </Flex>
      </Flex>
    </>
  );
}
