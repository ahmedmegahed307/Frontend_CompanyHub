import { useEffect, useState } from "react";
import { FormControl, FormLabel, Flex, Select } from "@chakra-ui/react";
import useJobType from "../../../../hooks/Settings/JobType/useJobType";

const JobTypeSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState<string>();
  const { data: JobTypes } = useJobType();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions(event.target.value);
  };
  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  return (
    <FormControl pb={7} w={"md"}>
      <FormLabel color={"grey"}>Job Type</FormLabel>
      <Flex direction="column" maxWidth={300}>
        <Select value={selectedOptions || ""} onChange={handleSelectChange}>
          <option value="" disabled>
            Select Job Type
          </option>
          {JobTypes?.map((option) => (
            <option key={option.id} value={option.name || ""}>
              {option.name}
            </option>
          ))}
        </Select>
      </Flex>
    </FormControl>
  );
};

export default JobTypeSelect;
