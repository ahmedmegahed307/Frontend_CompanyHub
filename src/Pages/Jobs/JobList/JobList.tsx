import {
  Tabs,
  TabPanels,
  TabPanel,
  Flex,
  HStack,
  Box,
  TableContainer,
  Button,
  Spinner,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Checkbox,
  Code,
} from "@chakra-ui/react";
import { NavLink, json } from "react-router-dom";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { useEffect, useState } from "react";
import { IconDownload } from "../../../assets/icons/IconDownload";
import { IconColumn } from "../../../assets/icons/IconColumn";
import { IconFilter } from "../../../assets/icons/IconFilter";
import AllJobsTable from "./AllJobsTable";
import ExportToExcel, { ExportToExcelProps } from "../../Excel/ExportToExcel";
import usePageTitleStore from "../../../hooks/NavBar/PageTitleStore";
import { FilterOption, filterOptions } from "../../../StaticData/StaticData";
import useAuthStore from "../../../hooks/Authentication/store";
import useAdminJobs from "../../../hooks/Jobs/useAdminJobs";
import { tr } from "date-fns/locale";

const JobList = () => {
  //get jobs list
  const { data, isLoading, isError } = useAdminJobs(true);
  console.log("data:", data);
  //zustand to show page title
  const pageTitleStore = usePageTitleStore();
  useEffect(() => {
    pageTitleStore.setPageTitle("");
  }, []);

  //filteration
  const [selectedFilters, setSelectedFilters] = useState<FilterOption[]>([
    { label: "All jobs", value: "All jobs" },
  ]);

  const toggleFilter = (filter: FilterOption) => {
    if (filter.value === "All jobs") {
      // Selecting "All jobs" should unselect all other filters
      setSelectedFilters([filter]);
    } else {
      // Selecting any other filter should unselect "All jobs"
      setSelectedFilters((prevFilters) => {
        if (prevFilters.some((f) => f.value === "All jobs")) {
          return [filter];
        } else {
          const filterIndex = prevFilters.findIndex(
            (f) => f.value === filter.value
          );
          if (filterIndex !== -1) {
            // Filter is already in filters, so remove it
            return prevFilters.filter((f) => f.value !== filter.value);
          } else {
            // Filter is not in filters, so add it
            return [...prevFilters, filter];
          }
        }
      });
    }
  };

  const isAllJobsSelected = selectedFilters.some(
    (filter) => filter.value === "All jobs"
  );

  const filterJobs = () => {
    if (isAllJobsSelected) {
      return data;
    } else {
      return data?.filter((job: any) =>
        selectedFilters.some((filter) => filter.value === job.status)
      );
    }
  };

  //export to excel
  const [exportedData, setExportedData] = useState<ExportToExcelProps>(
    {} as ExportToExcelProps
  );
  const handleExport = (exportedData: ExportToExcelProps) => {
    setExportedData(exportedData);
  };
  if (!data)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <Spinner size="xl" color="#1396ab" />
      </Box>
    );

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" color="#1396ab" />
      </Box>
    );
  }

  return (
    <>
      <Box h={"full"} w={"full"} borderColor="gray.200" py={7}>
        <Flex
          direction={"column"}
          h={"full"}
          p={0}
          m={0}
          maxW="10xl"
          mx="auto"
          px="0"
        >
          <HStack justify={"space-between"}>
            <HStack spacing={4}>
              <Menu>
                <MenuButton
                  fontSize={"sm"}
                  as={Button}
                  variant={"link"}
                  fontWeight={"bold"}
                  color={"Primary.700"}
                  borderRight={"0.75px solid "}
                  borderColor={"Neutral.300"}
                  borderRadius={0}
                  pr={4}
                  rightIcon={<ChevronDownIcon />}
                >
                  {isAllJobsSelected
                    ? "All jobs"
                    : selectedFilters.map((filter) => filter.label).join(", ")}
                </MenuButton>
                <MenuList>
                  {filterOptions.map((option) => (
                    <MenuItem key={option.value}>
                      <Checkbox
                        isChecked={selectedFilters.some(
                          (filter) => filter.value === option.value
                        )}
                        onChange={() => toggleFilter(option)}
                        colorScheme={
                          selectedFilters.some(
                            (filter) => filter.value === option.value
                          )
                            ? "Primary"
                            : "gray"
                        }
                        variant="outline"
                      >
                        {option.label}
                      </Checkbox>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <Button
                fontSize={"sm"}
                variant={"link"}
                fontWeight={"bold"}
                color={"black"}
                borderRight={"0.75px solid "}
                borderColor={"Neutral.300"}
                borderRadius={0}
                pr={4}
                leftIcon={<IconFilter />}
              >
                Hide Filter
              </Button>
              <Button
                fontSize={"sm"}
                variant={"link"}
                fontWeight={"bold"}
                color={"black"}
                leftIcon={<IconColumn />}
              >
                Columns
              </Button>
            </HStack>

            <HStack spacing={4} pr={2}>
              <ExportToExcel
                data={exportedData.data || []}
                headers={exportedData.headers || []}
                keys={exportedData.keys || []}
                sheetName={"Jobs_List"}
              />
              <Button
                as={NavLink}
                to="/job/addjob"
                onClick={() => {}}
                leftIcon={<AddIcon fontSize={"8"} />}
              >
                New job
              </Button>
            </HStack>
          </HStack>

          <Tabs my={0} p={0} h={"full"} w={"full"}>
            <TabPanels pt={5} height={"full"}>
              <TabPanel height={"full"}>
                <TableContainer height={"full"}>
                  {!isLoading && data && (
                    <AllJobsTable
                      data={filterJobs() || []}
                      exportToExcel={handleExport}
                    />
                  )}
                </TableContainer>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </>
  );
};

export default JobList;
