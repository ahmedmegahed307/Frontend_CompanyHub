import { Button, Center, HStack, Heading } from "@chakra-ui/react";
import DateFromSelect from "../GeneralComponents/DateFromSelect";
import DateToSelect from "../GeneralComponents/DateToSelect";
import EngineerSelect from "../../Scheduler/EngineerSelect";
import DateTypeSelect from "../GeneralComponents/DateTypeSelect";
import ClientSelect from "../GeneralComponents/ClientSelect";
import JobID from "./SurverySearch/JobID";

const Survey = () => {
  return (
    <>
      <Heading m={5} color={"#1396ab"} size={"lg"}>
        Survey Report
      </Heading>
      <HStack marginTop={10} marginLeft={10}>
        <DateTypeSelect />
        <DateFromSelect />
        <DateToSelect />

        <JobID />
      </HStack>
      <HStack marginLeft={10} spacing={-32}>
        <EngineerSelect />
        <ClientSelect />
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
