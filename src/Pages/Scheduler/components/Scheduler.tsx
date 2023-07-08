import Calendar from "./Calendar";
import { VStack } from "@chakra-ui/react";
import CalendarSelectLists from "./CalendarSelectLists";

const Scheduler = () => {
  return (
    <>
      <VStack align="stretch">
        <CalendarSelectLists />
        <Calendar />
      </VStack>
    </>
  );
};

export default Scheduler;
