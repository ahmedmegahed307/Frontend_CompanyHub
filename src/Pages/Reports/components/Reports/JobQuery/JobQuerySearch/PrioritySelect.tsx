import { useEffect, useState } from "react";
import { FormControl, FormLabel, Flex, Select } from "@chakra-ui/react";
import { Priority } from "../../../../../StaticData/StaticData";

interface PriorityProps {
  onSelectedPriority: (priority: string | undefined) => void;
}
const PrioritySelect = ({ onSelectedPriority }: PriorityProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string>();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions(event.target.value);
  };
  useEffect(() => {
    console.log(selectedOptions);
    onSelectedPriority(selectedOptions);
  }, [selectedOptions]);

  return (
    <FormControl pb={7} w={"md"}>
      <FormLabel color={"grey"}>Priority</FormLabel>
      <Flex direction="column" maxWidth={300}>
        <Select value={selectedOptions || ""} onChange={handleSelectChange}>
          <option value="" disabled>
            Select Priority
          </option>
          {Priority.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Flex>
    </FormControl>
  );
};

export default PrioritySelect;
