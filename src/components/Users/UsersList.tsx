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
import { FaEdit, FaTimes, FaUser } from "react-icons/fa";

const UsersList = () => {
  const [usersList, setUsersLists] = useState<UsersObject[]>();
  useEffect(() => {
    const userslist = DataStore.observeQuery(UsersObject).subscribe(
      ({ items }) => {
        setUsersLists(items);
      }
    );

    return () => {
      userslist.unsubscribe();
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
            Users List
          </Heading>
          <Spacer />
          {/* <Button my={10} onClick={() => {}} colorScheme="blue" size={'sm'} variant={'outline'}  color={"#294c58"}>
              New Order
            </Button> */}
          <Button
            marginRight={2}
            as={NavLink}
            to="#"
            my={10}
            onClick={() => {}}
            colorScheme="blue"
            variant={"solid"}
            size={"sm"}
            bg={"#294c58"}
            leftIcon={<FaUser />}
          >
            My Profile
          </Button>
          <Button
            as={NavLink}
            to="#"
            my={10}
            onClick={() => {}}
            colorScheme="blue"
            variant={"solid"}
            size={"sm"}
            bg={"#294c58"}
            leftIcon={<FaUser />}
          >
            add User
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
                        <Th>Email</Th>
                        <Th>Contact Name</Th>
                        <Th>Contact Phone</Th>
                        <Th>Role</Th>
                        <Th>Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {usersList &&
                        usersList.map((usersList) => (
                          <Tr key={usersList.id}>
                            <Td>{usersList.name}</Td>
                            <Td>{usersList?.email}</Td>
                            <Td>{usersList.adresses![0]?.contactName}</Td>
                            <Td>{usersList.adresses![0]?.tel}</Td>
                            <Td>Not yet in Database</Td>
                            <Box margin={2}>
                              <Button
                                colorScheme="red"
                                variant="outline"
                                marginLeft={2}
                                size={"sm"}
                                leftIcon={<FaTimes />}
                              >
                                Deactivate
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

export default UsersList;
