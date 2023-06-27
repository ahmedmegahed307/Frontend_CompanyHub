import { Button, Center, HStack, Heading } from "@chakra-ui/react";

import JobID from "./SurverySearch/JobID";
import EngineerSelect from "../../../../Scheduler/components/EngineerSelect";
import ClientSelect from "../../GeneralComponents/ClientSelect";
import DateFromSelect from "../../GeneralComponents/DateFromSelect";
import DateToSelect from "../../GeneralComponents/DateToSelect";
import DateTypeSelect from "../../GeneralComponents/DateTypeSelect";

const Survey = () => {
  const handleSelectedDateType = (dateType: string | undefined) => {
    // Implement the logic for handling the selected date type
  };

  const handleSelectedDateFrom = (date: Date | undefined) => {
    // Implement the logic for handling the selected date from
  };

  const handleSelectedDateTo = (date: Date | undefined) => {
    // Implement the logic for handling the selected date to
  };

  const handleSelectedClients = (clients: string[] | undefined) => {
    // Implement the logic for handling the selected clients
  };

  return (
    <>
      <Heading m={5} color={"#1396ab"} size={"lg"}>
        Survey Report
      </Heading>
      <HStack marginTop={10} marginLeft={10}>
        <DateTypeSelect onSelectedDateType={handleSelectedDateType} />
        <DateFromSelect onSelectedDateFrom={handleSelectedDateFrom} />
        <DateToSelect onSelectedDateTo={handleSelectedDateTo} />
        <JobID />
      </HStack>
      <HStack marginLeft={10} spacing={-32}>
        <EngineerSelect />
        <ClientSelect onSelectedClients={handleSelectedClients} />
      </HStack>
      <Center>
        <Button
          mt={0}
          px={10}
          py={5}
          colorScheme="blue"
          variant={"solid"}
          size={"md"}
          bg={"#294c58"}
        >
          Search
        </Button>
      </Center>
    </>
  );
};

export default Survey;
