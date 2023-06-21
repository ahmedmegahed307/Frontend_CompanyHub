import { Button, Center, HStack, Heading } from "@chakra-ui/react";
import DateFromSelect from "../GeneralComponents/DateFromSelect";
import DateToSelect from "../GeneralComponents/DateToSelect";
import ClientSelect from "../../Scheduler/ClientSelect";
import EngineerSelect from "../../Scheduler/EngineerSelect";

const TimeSheet = () => {
  return (
    <>
      <Heading m={5} color={"#1396ab"} size={"lg"}>
        Time Sheet Report
      </Heading>
      <HStack marginTop={10} marginLeft={10}>
        <DateFromSelect />
        <DateToSelect />
        <EngineerSelect />
      </HStack>

      <Center>
        <Button
          my={10}
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

export default TimeSheet;
