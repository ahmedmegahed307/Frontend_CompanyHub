import { useState } from "react";
import {
  Flex,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import Map from "./Map/Map";
import Attachment from "./Attachements/Attachement";
import JobDetails from "./Details/JobDetails";
import CheckList from "./CheckLists/CheckList";
import PartList from "./Part/PartList";
import SessionsList from "./Sessions/SessionsList";
import Resolution from "./Resolution/Resolution";
import Photo from "./Photos/Photo";

const JobInfo = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  const tabColor = useColorModeValue("#419ca3", "teal.300");

  return (
    <Flex m={10} height="100vh">
      <Box mr={8}>
        <Tabs
          orientation="vertical"
          variant="enclosed"
          sx={{ marginTop: "2rem" }}
          index={selectedTab}
          onChange={handleTabChange}
        >
          <TabList>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 0 ? tabColor : undefined,
                color: selectedTab === 0 ? "white" : undefined,
              }}
            >
              Job Details
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 1 ? tabColor : undefined,
                color: selectedTab === 1 ? "white" : undefined,
              }}
            >
              Map
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 2 ? tabColor : undefined,
                color: selectedTab === 2 ? "white" : undefined,
              }}
            >
              Attachments
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 3 ? tabColor : undefined,
                color: selectedTab === 3 ? "white" : undefined,
              }}
            >
              Parts
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 4 ? tabColor : undefined,
                color: selectedTab === 4 ? "white" : undefined,
              }}
            >
              CheckLists
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 5 ? tabColor : undefined,
                color: selectedTab === 5 ? "white" : undefined,
              }}
            >
              Sessions
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 6 ? tabColor : undefined,
                color: selectedTab === 6 ? "white" : undefined,
              }}
            >
              Resolutions
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 7 ? tabColor : undefined,
                color: selectedTab === 7 ? "white" : undefined,
              }}
            >
              Photos
            </Tab>
          </TabList>
        </Tabs>
      </Box>

      <Box
        flex={1}
        height="100vh"
        position="relative"
        overflowY="auto"
        paddingRight="1px"
      >
        <Tabs w="full" index={selectedTab} onChange={handleTabChange}>
          <TabPanels>
            <TabPanel>
              <JobDetails />
            </TabPanel>

            <TabPanel>
              <Box>
                <Map apiKey="" />
              </Box>
            </TabPanel>

            <TabPanel>
              <Attachment />
            </TabPanel>
            <TabPanel>
              <PartList />
            </TabPanel>
            <TabPanel>
              <CheckList />
            </TabPanel>
            <TabPanel>
              <SessionsList />
            </TabPanel>
            <TabPanel>
              <Resolution />
            </TabPanel>
            <TabPanel>
              <Photo />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Box
          position="absolute"
          top={0}
          bottom={0}
          width="5px"
          bg="gray.300"
        ></Box>
      </Box>
    </Flex>
  );
};

export default JobInfo;
