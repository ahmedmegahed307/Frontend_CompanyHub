import React from "react";
import ReminderList from "./Reminder/ReminderList";
import {
  Flex,
  Heading,
  Spacer,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TableContainer,
  Card,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import VisitsList from "./Visit/VisitsList";
import ContractList from "./Contracts/ContractList";

const PPMTabs = () => {
  return (
    <>
      <Flex
        direction={"column"}
        alignItems="center"
        maxW="7xl"
        mx="auto"
        px="4"
        w={"full"}
      >
        <Flex w={"full"} direction={"row"}>
          <Heading
            size={"lg"}
            w={"full"}
            py={10}
            textAlign={"left"}
            color={"#1396ab"}
          >
            PPM List
          </Heading>
          <Spacer />
        </Flex>

        <Tabs w={"full"}>
          <TabList>
            <Tab>Contracts</Tab>
            <Tab>Reminder </Tab>
            <Tab>Visits</Tab>
          </TabList>

          <Flex w={"full"} direction={"row"}>
            <Spacer />
          </Flex>

          <TabPanels pt={5} h={"50vh"}>
            <TabPanel>
              <TableContainer>
                <ContractList />
              </TableContainer>
            </TabPanel>

            <TabPanel>
              <TableContainer>
                <ReminderList />
              </TableContainer>
            </TabPanel>

            <TabPanel>
              <TableContainer>
                <VisitsList />
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default PPMTabs;
