import { createColumnHelper } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import { DataTable } from "../table";
import { DataStore } from "aws-amplify";
import { Jobs, UsersObject } from "../../models";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  VStack,
  Flex,
  HStack,
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Card,
  AbsoluteCenter,
  Button,
  Spacer,
} from "@chakra-ui/react";
import {  NavLink } from "react-router-dom";



const JobList = () => {
  const [jobsList, setJobsList] = useState<Jobs[]>();

  // get CLients
  useEffect(() => {
    /**
     * This keeps `post` fresh.
     */
    const sub = DataStore.observeQuery(Jobs).subscribe(({ items }) => {
      console.log(items);

      setJobsList(items);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

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
          <Heading size={"lg"} w={"full"} py={10} textAlign={"left"}>
            Jobs List
          </Heading>
          <Spacer />
          {/* <Button my={10} onClick={() => {}} colorScheme="blue" size={'sm'} variant={'outline'}  color={"#294c58"}>
            New Order
          </Button> */}
          <Button as={NavLink}  to='/addJob' my={10} onClick={() => {}} colorScheme="blue" variant={'solid'} size={'sm'}  bg={"#294c58"}>
            New Order
          </Button>
        </Flex>

        <Tabs w={"full"}>
          <TabList>
            <Tab>Pending ({jobsList?.length})</Tab>
            <Tab>Open ({jobsList?.length})</Tab>
            <Tab>Assigned ({jobsList?.length})</Tab>
            <Tab>Resolved ({jobsList?.length})</Tab>
            <Tab>Closed ({jobsList?.length})</Tab>
            <Tab>Cancelled ({jobsList?.length})</Tab>
          </TabList>
          <Flex w={"full"} direction={"row"}>
          {/* <Heading size={"lg"} w={"full"} py={10} textAlign={"left"}>
            Jobs List
          </Heading> */}
          <Spacer />
          {/* <Button mt={5} onClick={() => {}} variant={'outline'} size={'xs'} colorScheme="blue" color={"#294c58"}>
         Export
          </Button> */}
        </Flex>
          <TabPanels pt={5}  h={"50vh"}>
          <TabPanel>
              <TableContainer>
                <Card p={0} borderRadius={""} variant={"outline"}>
                  <Table variant="simple">
                    <TableCaption>
                      Imperial to metric conversion factors
                    </TableCaption>
                    <Thead bg={"gray.100"} rounded={"xl"}>
                      <Tr>
                        <Th>Request No.</Th>
                        <Th>Client</Th>
                        <Th>Site</Th>
                        <Th>Description</Th>
                        <Th>Logged</Th>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {jobsList &&
                        jobsList!.map((item, index) => (
                          <Tr key={item.id} >
                            <Td>{item.jobNumber ?? "00" + index}</Td>
                            <Td>Clint1</Td>
                            <Td>inches</Td>
                            <Td>{item.adress?.name}</Td>
                            <Td>{item.createdAt}</Td>
                            <Td> </Td>
                          </Tr>
                        ))}
                    </Tbody>
                  </Table>
                </Card>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <TableContainer>
        tap 2
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <TableContainer>
        tap 3
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default JobList;
