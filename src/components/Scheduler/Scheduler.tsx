import SchedulerJobs from "./SchedulerJobs";
import Calendar from "./Calendar";
import { HStack, VStack } from "@chakra-ui/react";

const Scheduler = () => {
  return (
    <>
      <VStack align="stretch">
        <Calendar />
        <SchedulerJobs />
      </VStack>
    </>
  );
};

export default Scheduler;
