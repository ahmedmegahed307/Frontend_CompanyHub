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
  dateFrom: Date | undefined;
  dateTo: Date | undefined;
  priority: string | undefined;
  jobType: string | undefined;
  jobSubType: string | undefined;
  status: string | undefined;
  sites: string[] | undefined;
  clients: string[] | undefined;
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
    console.log("Job Filter Object:", jobQuery); // object to deal with database
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
        <DateFromSelect
          onSelectedDateFrom={(dateFrom) =>
            setJobQuery({ ...jobQuery, dateFrom })
          }
        />
        <DateToSelect
          onSelectedDateTo={(dateTo) => setJobQuery({ ...jobQuery, dateTo })}
        />
        <PrioritySelect
          onSelectedPriority={(priority) =>
            setJobQuery({ ...jobQuery, priority })
          }
        />
      </HStack>
      <HStack marginLeft={10}>
        <JobTypeSelect
          onSelectedJobType={(jobType) => setJobQuery({ ...jobQuery, jobType })}
        />
        <JobSubTypeSelect
          onSelectedJobSubType={(jobSubType) =>
            setJobQuery({ ...jobQuery, jobSubType })
          }
        />
        <StatusSelect
          onSelectedStatus={(status) => setJobQuery({ ...jobQuery, status })}
        />
        <SiteSelect
          onSelectedSites={(sites) => setJobQuery({ ...jobQuery, sites })}
        />
      </HStack>
      <HStack marginLeft={10}>
        <ClientSelect
          onSelectedClients={(clients) => setJobQuery({ ...jobQuery, clients })}
        />
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
