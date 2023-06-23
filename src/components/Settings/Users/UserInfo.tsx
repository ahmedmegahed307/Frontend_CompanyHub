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
import UserDetails from "./UserDetails/UserDetails";
import UserPhoto from "./UserPhoto/UserPhoto";
import UserAddress from "./UserAddress/UserAddress";
import ChangePassword from "./ChangePassword/ChangePassword";

const UserInfo = () => {
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
              Profile Details
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 1 ? tabColor : undefined,
                color: selectedTab === 1 ? "white" : undefined,
              }}
            >
              Address
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 2 ? tabColor : undefined,
                color: selectedTab === 2 ? "white" : undefined,
              }}
            >
              Profile Photo
            </Tab>
            <Tab
              sx={{
                marginBottom: "1rem",
                bg: selectedTab === 3 ? tabColor : undefined,
                color: selectedTab === 3 ? "white" : undefined,
              }}
            >
              Change Password
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
              <UserDetails />
            </TabPanel>
            <TabPanel>
              <UserAddress />
            </TabPanel>
            <TabPanel>
              <UserPhoto />
            </TabPanel>
            <TabPanel>
              <ChangePassword />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Box
          position="absolute"
          top={0}
          bottom={0}
          width="1px"
          bg="gray.300"
        ></Box>
      </Box>
    </Flex>
  );
};

export default UserInfo;
