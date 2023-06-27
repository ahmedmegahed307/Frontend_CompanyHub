import { useState } from "react";
import { FormControl, FormLabel, Flex, Input } from "@chakra-ui/react";

const JobID = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  console.log("Job ID:", value);

  return (
    <FormControl pb={7} w={"md"}>
      <FormLabel color={"grey"}>Job ID</FormLabel>
      <Flex direction="column" maxWidth={300}>
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter Job ID"
        />
      </Flex>
    </FormControl>
  );
};

export default JobID;
