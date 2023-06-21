import { Button, Center, HStack, Heading } from "@chakra-ui/react";
import ClientSelect from "./JobQuerySearch/ClientSelect";
import SiteSelect from "./JobQuerySearch/SiteSelect";
import PrioritySelect from "./JobQuerySearch/PrioritySelect";
import DateTypeSelect from "./JobQuerySearch/DateTypeSelect";
import StatusSelect from "./JobQuerySearch/StatusSelect";
import JobSubTypeSelect from "./JobQuerySearch/JobSubTypeSelect";
import JobTypeSelect from "./JobQuerySearch/JobTypeSelect";
import DateFromSelect from "../GeneralComponents/DateFromSelect";
import DateToSelect from "../GeneralComponents/DateToSelect";

const JobQuery = () => {
  return (
    <>
      <Heading m={5} color={"#1396ab"} size={"lg"}>
        Job Query Report
      </Heading>
      <HStack marginTop={10} marginLeft={10}>
        <DateTypeSelect />
        <DateFromSelect />
        <DateToSelect />
        <PrioritySelect />
      </HStack>
      <HStack marginLeft={10}>
        <JobTypeSelect />
        <JobSubTypeSelect />
        <StatusSelect />
        <SiteSelect />
      </HStack>
      <HStack marginLeft={10}>
        <ClientSelect />
      </HStack>
      <Center>
        <Button
          mt={-24}
          px={10}
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

export default JobQuery;
