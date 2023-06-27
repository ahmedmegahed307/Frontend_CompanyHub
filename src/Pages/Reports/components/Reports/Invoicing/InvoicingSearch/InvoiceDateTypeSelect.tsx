import { useEffect, useState } from "react";
import { FormControl, FormLabel, Flex, Select } from "@chakra-ui/react";
import { InvoiceDateType } from "../../../../../StaticData/StaticData";

const InvoiceDateTypeSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState<string>();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions(event.target.value);
  };
  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  return (
    <FormControl pb={7} w={"md"}>
      <FormLabel color={"grey"}>Date Type</FormLabel>
      <Flex direction="column" maxWidth={300}>
        <Select value={selectedOptions || ""} onChange={handleSelectChange}>
          <option value="" disabled>
            Select Date Type
          </option>
          {InvoiceDateType.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Flex>
    </FormControl>
  );
};

export default InvoiceDateTypeSelect;
