import { useEffect, useState } from "react";
import { FormControl, FormLabel, Flex, Select } from "@chakra-ui/react";
import { InvoiceStatus } from "../../../../../../StaticData/StaticData";

const InvoiceClientContractSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState<string>();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions(event.target.value);
  };
  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  return (
    <FormControl pb={7} w={"md"}>
      <FormLabel color={"grey"}>Contract</FormLabel>
      <Flex direction="column" maxWidth={300}>
        <Select value={selectedOptions || ""} onChange={handleSelectChange}>
          <option value="" disabled>
            Select Contract
          </option>
          {InvoiceStatus.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Flex>
    </FormControl>
  );
};

export default InvoiceClientContractSelect;
