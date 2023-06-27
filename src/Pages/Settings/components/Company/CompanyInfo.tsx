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
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import FinancialDetails from "./FinancialDetails/FinancialDetails";
import SLA from "./SLA/SLA";
import CompanyAddress from "./CompanyAddress/CompanyAddress";
import CompanyLogo from "./CompanyLogo/CompanyLogo";

const CompanyInfo = () => {
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
              Company Details
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 1 ? tabColor : undefined,
                color: selectedTab === 1 ? "white" : undefined,
              }}
            >
              Financial Details
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 2 ? tabColor : undefined,
                color: selectedTab === 2 ? "white" : undefined,
              }}
            >
              SLA Settings
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 3 ? tabColor : undefined,
                color: selectedTab === 3 ? "white" : undefined,
              }}
            >
              Company Address
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 4 ? tabColor : undefined,
                color: selectedTab === 4 ? "white" : undefined,
              }}
            >
              Company Logo
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
              <CompanyDetails />
            </TabPanel>
            <TabPanel>
              <FinancialDetails />
            </TabPanel>
            <TabPanel>
              <SLA />
            </TabPanel>
            <TabPanel>
              <CompanyAddress />
            </TabPanel>
            <TabPanel>
              <CompanyLogo />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Box
          position="absolute"
          top={0}
          bottom={0}
          width="2px"
          bg="gray.300"
        ></Box>
      </Box>
    </Flex>
  );
};

export default CompanyInfo;
