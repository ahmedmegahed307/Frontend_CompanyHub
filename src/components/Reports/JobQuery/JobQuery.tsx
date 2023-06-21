import { Button, Center, HStack, Heading } from "@chakra-ui/react";
import ClientSelect from "../GeneralComponents/ClientSelect";
import SiteSelect from "./JobQuerySearch/SiteSelect";
import PrioritySelect from "./JobQuerySearch/PrioritySelect";
import StatusSelect from "./JobQuerySearch/StatusSelect";
import JobSubTypeSelect from "./JobQuerySearch/JobSubTypeSelect";
import JobTypeSelect from "./JobQuerySearch/JobTypeSelect";
import DateFromSelect from "../GeneralComponents/DateFromSelect";
import DateToSelect from "../GeneralComponents/DateToSelect";
import DateTypeSelect from "../GeneralComponents/DateTypeSelect";
import FilterResult from "./FilterResult";
import { useEffect, useState } from "react";

export interface JobQueryFilter {
  dateType: string | undefined;
  dateFrom: Date;
  dateTo: Date;
  priority: string;
  jobType: string;
  jobSubType: string;
  status: string;
  sites: string[];
  clients: string[];
}
const JobQuery = () => {
  const [jobQuery, setJobQuery] = useState<JobQueryFilter>(
    {} as JobQueryFilter
  );

  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };
  useEffect(() => {
    console.log(jobQuery);
  }, [jobQuery]);

  return (
    <>
      <Heading m={5} color={"#1396ab"} size={"lg"}>
        Job Query Report
      </Heading>
      <HStack marginTop={10} marginLeft={10}>
        <DateTypeSelect
          onSelectedDateType={(dateType) =>
            setJobQuery({ ...jobQuery, dateType })
          }
        />
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
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </Center>
      {isSearchClicked && <FilterResult />}
    </>
  );
};

export default JobQuery;
