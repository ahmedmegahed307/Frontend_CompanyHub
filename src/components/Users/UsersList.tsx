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
  Input,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  AbsoluteCenter,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { UsersObject } from "../../models";
import { FaEdit, FaTimes, FaUser } from "react-icons/fa";
import { AddIcon } from "@chakra-ui/icons";

const UsersList = () => {
  const [usersList, setUsersLists] = useState<UsersObject[]>();
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    contactName: "",
    phoneNumber: "",
    role: "",
  });

  const handleCreate = (event: FormEvent) => {
    event.preventDefault();
    console.log(createUser);
    onClose();

    setCreateUser({
      name: "",
      email: "",
      contactName: "",
      phoneNumber: "",
      role: "",
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
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
            px={10}
            py={5}
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
            onClick={() => {
              onOpen();
            }}
            leftIcon={<AddIcon />}
            my={10}
            px={10}
            py={5}
            colorScheme="blue"
            variant={"solid"}
            size={"sm"}
            bg={"#294c58"}
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
      <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <AbsoluteCenter>
              <form onSubmit={handleCreate}>
                <Heading my={5} size={"md"}>
                  Create User
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    value={createUser.name}
                    onChange={(e) =>
                      setCreateUser({
                        ...createUser,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder="example@gmail.com"
                    value={createUser.email}
                    onChange={(e) =>
                      setCreateUser({
                        ...createUser,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Contact Name</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    value={createUser.contactName}
                    onChange={(e) =>
                      setCreateUser({
                        ...createUser,
                        contactName: e.target.value,
                      })
                    }
                    required
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Phone Number</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    value={createUser.phoneNumber}
                    onChange={(e) =>
                      setCreateUser({
                        ...createUser,
                        phoneNumber: e.target.value,
                      })
                    }
                    required
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Role</FormLabel>
                  <Select
                    value={createUser.role}
                    onChange={(e) =>
                      setCreateUser({
                        ...createUser,
                        role: e.target.value,
                      })
                    }
                  >
                    <option></option>
                    <option>Admin</option>
                    <option>Client </option>
                    <option>Engineer</option>
                  </Select>
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  w={"full"}
                  bg={"#294c58"}
                  my={10}
                >
                  Create
                </Button>
              </form>
            </AbsoluteCenter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default UsersList;
