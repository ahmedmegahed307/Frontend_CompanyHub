import { createColumnHelper } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import { DataTable } from "../../table";
import { DataStore } from "aws-amplify";
import { Jobs, UsersObject } from "../../../models";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Text,
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
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import CustomTable from "./CustomTable";
import OpenJobsTable from "./OpenJobsTable";
import AssignedJobsTable from "./AssignedJobsTable";
import { MdAdd } from "react-icons/md";
import { AddIcon } from "@chakra-ui/icons";

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
      <Box w={"full"} borderColor="gray.200" py={10}>
        <Flex direction={"column"} maxW="7xl" mx="auto" px="4">
          <HStack justify={"space-between"}>
            <Heading color={"#1396ab"} size={"lg"}>
              Jobs List{" "}
            </Heading>
            <Button
              as={NavLink}
              to="/jobs/addJob"
              onClick={() => {}}
              variant={"outline"}
              color={"#416D77"}
              borderColor={"#416D77"}
              _hover={{ bg: "#416D77", color: "white" }}
              size={"sm"}
              leftIcon={<AddIcon />}
              // bg={"#294c58"}
            >
              New Order
            </Button>
          </HStack>

          <Tabs my={4} w={"full"}>
            <TabList>
              <Tab color={"black"}>Pending ({jobsList?.length})</Tab>
              <Tab color={"black"}>Open ({jobsList?.length})</Tab>
              <Tab color={"black"}>Assigned ({jobsList?.length})</Tab>
              <Tab color={"black"}>Resolved ({jobsList?.length})</Tab>
              <Tab color={"black"}>Closed ({jobsList?.length})</Tab>
              <Tab color={"black"}>Cancelled ({jobsList?.length})</Tab>
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
            <TabPanels pt={5} h={"50vh"}>
              <TabPanel>
                <TableContainer borderRadius={"xl"}>
                  <Card p={0} borderRadius={""} variant={"outline"}>
                    <Table variant="simple">
                      <TableCaption>
                        Imperial to metric conversion factors
                      </TableCaption>
                      <Thead bg={"gray.100"} rounded={"xl"}>
                        <Tr>
                          <Th color={"gray"}>Request No.</Th>
                          <Th color={"gray"}>Client</Th>
                          <Th color={"gray"}>Site</Th>
                          <Th color={"gray"}>Description</Th>
                          <Th color={"gray"}>Logged</Th>
                          <Th color={"gray"}></Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {jobsList &&
                          jobsList!.map((item, index) => (
                            <Tr key={item.id}>
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
                  {jobsList && <OpenJobsTable data1={jobsList ?? []} />}
                </TableContainer>{" "}
              </TabPanel>
              <TabPanel>
                <TableContainer>
                  {jobsList && <AssignedJobsTable data1={jobsList ?? []} />}
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
