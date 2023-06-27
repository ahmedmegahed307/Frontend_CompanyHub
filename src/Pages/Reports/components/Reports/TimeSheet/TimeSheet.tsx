import React, { useState } from "react";
import { Button, Center, HStack, Heading } from "@chakra-ui/react";
import EngineerSelect from "../../../../Scheduler/components/EngineerSelect";
import DateFromSelect from "../../GeneralComponents/DateFromSelect";
import DateToSelect from "../../GeneralComponents/DateToSelect";

const TimeSheet = () => {
  const [selectedDateFrom, setSelectedDateFrom] = useState<Date | undefined>();
  const [selectedDateTo, setSelectedDateTo] = useState<Date | undefined>();

  const handleSelectedDateFrom = (date: Date | undefined) => {
    setSelectedDateFrom(date);
  };

  const handleSelectedDateTo = (date: Date | undefined) => {
    setSelectedDateTo(date);
  };

  return (
    <>
      <Heading m={5} color={"#1396ab"} size={"lg"}>
        Time Sheet Report
      </Heading>
      <HStack marginTop={10} marginLeft={10}>
        <DateFromSelect onSelectedDateFrom={handleSelectedDateFrom} />
        <DateToSelect onSelectedDateTo={handleSelectedDateTo} />
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
