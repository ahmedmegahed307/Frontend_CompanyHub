import { useEffect, useState } from "react";
import { FormControl, FormLabel, Flex, Select, Input } from "@chakra-ui/react";
interface DateToProps {
  onSelectedDateTo: (dateType: Date | undefined) => void;
}
const DateToSelect = ({ onSelectedDateTo }: DateToProps) => {
  const [scheduleTo, setScheduleTo] = useState<Date>();

  useEffect(() => {
    console.log("date to", formatDate(scheduleTo));
    onSelectedDateTo(scheduleTo);
  }, [scheduleTo]);

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
      <FormLabel color={"grey"}>Date To</FormLabel>
      <Flex direction="column" maxWidth={300}>
        <Input
          onChange={(e) => setScheduleTo(new Date(e.target.value))}
          type="datetime-local"
          className="FormControl"
          placeholder="Select Schedule Date"
        />
      </Flex>
    </FormControl>
  );
};

export default DateToSelect;
