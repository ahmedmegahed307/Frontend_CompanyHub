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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { UsersObject } from "../../models";

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
                            <Td></Td>
                            <Td> </Td>
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
