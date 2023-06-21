import { useEffect, useState } from "react";
import { FormControl, FormLabel, Flex, Select, Input } from "@chakra-ui/react";

const DateFromSelect = () => {
  const [scheduleFrom, setScheduleFrom] = useState<Date>();

  useEffect(() => {
    console.log("date from", formatDate(scheduleFrom));
  }, [scheduleFrom]);

  const formatDate = (date: Date | undefined): string => {
    if (!date) return "";
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <FormControl pb={7} w={"md"}>
      <FormLabel color={"grey"}>Date From</FormLabel>
      <Flex direction="column" maxWidth={300}>
        <Input
          onChange={(e) => setScheduleFrom(new Date(e.target.value))}
          type="datetime-local"
          className="FormControl"
          placeholder="Select Schedule Date"
        />
      </Flex>
    </FormControl>
  );
};

export default DateFromSelect;
