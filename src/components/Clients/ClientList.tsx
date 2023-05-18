import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Card,
  Spacer,
  Button,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { UsersObject } from "../../models";
import { FaEdit, FaTimes } from "react-icons/fa";

const ClientList = () => {
  const [clientsList, setClientsLists] = useState<UsersObject[]>();
  useEffect(() => {
    const clientList = DataStore.observeQuery(UsersObject, (c) =>
      c.type.eq("client")
    ).subscribe(({ items }) => {
      console.log(items);

      setClientsLists(items);
    });

    return () => {
      clientList.unsubscribe();
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
            Clients List
          </Heading>
          <Spacer />
          {/* <Button my={10} onClick={() => {}} colorScheme="blue" size={'sm'} variant={'outline'}  color={"#294c58"}>
            New Order
          </Button> */}

          <Button
            as={NavLink}
            to="#"
            my={10}
            onClick={() => {}}
            colorScheme="blue"
            variant={"solid"}
            size={"sm"}
            bg={"#294c58"}
          >
            add Client
          </Button>
        </Flex>

        <Tabs w={"full"}>
          <Flex w={"full"} direction={"row"}></Flex>
          <TabPanels pt={5} h={"50vh"}>
            <TabPanel>
              <TableContainer borderRadius={"xl"}>
                <Card p={0} borderRadius={""} variant={"outline"}>
                  <Table variant="simple">
                    <Thead bg={"gray.100"} rounded={"xl"}>
                      <Tr>
                        <Th>Name</Th>
                        <Th>Address</Th>
                        <Th>Contact Name</Th>
                        <Th>Contact Phone</Th>
                        <Th>Client Portal Access</Th>
                        <Th>Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {clientsList &&
                        clientsList.map((client) => (
                          <Tr key={client.id}>
                            <Td>{client.name}</Td>
                            <Td>{client.adresses![0]?.city}</Td>
                            <Td>{client.adresses![0]?.contactName}</Td>
                            <Td>{client.adresses![0]?.tel}</Td>
                            <Td>Not yet in Database</Td>
                            <Box margin={2}>
                              <Button
                                colorScheme="blue"
                                variant="outline"
                                size={"sm"}
                                leftIcon={<FaEdit />}
                              >
                                Edit
                              </Button>
                              <Button
                                colorScheme="red"
                                variant="outline"
                                marginLeft={2}
                                size={"sm"}
                                leftIcon={<FaTimes />}
                              >
                                Delete
                              </Button>
                            </Box>
                          </Tr>
                        ))}
                    </Tbody>
                  </Table>
                </Card>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default ClientList;
