import SchedulerJobs from "./SchedulerJobs";
import Calendar from "./Calendar";
import { HStack, VStack } from "@chakra-ui/react";
import CalendarSelectLists from "./CalendarSelectLists";

const Scheduler = () => {
  return (
    <>
      <VStack align="stretch">
        <CalendarSelectLists />
        <Calendar />
        <SchedulerJobs />
      </VStack>
    </>
  );
};

export default Scheduler;
