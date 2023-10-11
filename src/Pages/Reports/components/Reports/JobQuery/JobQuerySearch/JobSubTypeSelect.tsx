import { useEffect, useState } from "react";
import { FormControl, FormLabel, Flex, Select } from "@chakra-ui/react";
import useJobType from "../../../../../../hooks/Settings/JobType/useJobType";
interface JobSubTypeProps {
  onSelectedJobSubType: (priority: string | undefined) => void;
}
const JobSubTypeSelect = ({ onSelectedJobSubType }: JobSubTypeProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string>();
  const { data: JobTypes } = useJobType();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions(event.target.value);
  };
  useEffect(() => {
    console.log(selectedOptions);
    onSelectedJobSubType(selectedOptions);
  }, [selectedOptions]);

  return (
    <FormControl pb={7} w={"md"}>
      <FormLabel color={"grey"}>Job SubType</FormLabel>
      <Flex direction="column" maxWidth={300}>
        <Select value={selectedOptions || ""} onChange={handleSelectChange}>
          <option value="" disabled>
            Select Job SubType
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

export default JobSubTypeSelect;
