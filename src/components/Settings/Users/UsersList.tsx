import {
  Tabs,
  TabPanels,
  TabPanel,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Card,
  Spacer,
  Button,
  Input,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  AbsoluteCenter,
  FormControl,
  FormLabel,
  Select,
  DrawerContent,
  IconButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { UsersObject } from "../../../models";
import { FaUser } from "react-icons/fa";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import useUser from "../../../hooks/Settings/User/useUser";
import useCreateUserMutation from "../../../hooks/Settings/User/useCreateUser";
import useUserMutation from "../../../hooks/Settings/User/useUserMutation";

const UsersList = () => {
  // get usersLists
  const { data: usersList } = useUser();

  //create
  const [createUser, setCreateUser] = useState<UsersObject>({} as UsersObject);
  const createModal = useDisclosure();
  const createUserQuery = useCreateUserMutation(() => {
    createModal.onClose();
  });
  const handleCreate = () => {
    createUserQuery.mutate(createUser);
    setCreateUser({} as UsersObject);
  };

  //delete
  const deleteModal = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const deleteUser = useUserMutation(() => {
    deleteModal.onClose();
  }, false);

  const [deleteUserId, setDeleteUserId] = useState("");

  // const handleCreate = async (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(createUser);

  //   var username = createUser.email;
  //   var password = "Ukfs2019???";

  //   try {
  //     const { user } = await Auth.signUp({
  //       username,
  //       password,
  //       attributes: {
  //         name: username,
  //       },
  //       autoSignIn: {
  //         // optional - enables auto sign in after user is confirmed
  //         enabled: true,
  //       },
  //     });
  //     console.log(user);
  //     const post = await DataStore.save(
  //       new UsersObject({
  //         name: createUser.name,
  //         email: createUser.email,
  //         type: createUser.role,
  //         adresses: [
  //           new Address({
  //             contactName: createUser.contactName,
  //             tel: createUser.phoneNumber,
  //           }),
  //         ],
  //       })
  //     );
  //   } catch (error) {
  //     console.log("error signing up:", error);
  //   }

  //   onClose();

  //   setCreateUser({
  //     name: "",
  //     email: "",
  //     contactName: "",
  //     phoneNumber: "",
  //     role: "",
  //   });
  // };

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
            Users List
          </Heading>
          <Spacer />

          <Button
            marginRight={2}
            as={NavLink}
            to="/settings/user/info"
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
              createModal.onOpen();
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
            Add User
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
                            <Td>
                              {usersList.adresses &&
                                usersList.adresses![0]?.contactName}
                            </Td>
                            <Td>
                              {usersList.adresses &&
                                usersList.adresses![0]?.tel}
                            </Td>
                            <Td>{usersList.type}</Td>
                            <Td>
                              <IconButton
                                aria-label="Search database"
                                as={NavLink}
                                icon={<DeleteIcon />}
                                onClick={() => {
                                  setDeleteUserId(usersList.id);
                                  deleteModal.onOpen();
                                }}
                                colorScheme="blue"
                                variant={"solid"}
                                size={"sm"}
                                bg={"#294c58"}
                              />
                            </Td>
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
      <Drawer
        onClose={createModal.onClose}
        isOpen={createModal.isOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <AbsoluteCenter>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCreate();
                }}
              >
                <Heading my={5} size={"md"}>
                  Create User
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    value={createUser?.name || ""}
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
                    value={createUser?.email || ""}
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
                    onChange={(e) =>
                      setCreateUser((prevUser) => ({
                        ...prevUser,
                        adresses: prevUser.adresses
                          ? [
                              {
                                ...prevUser.adresses[0],
                                contactName: e.target.value,
                              },
                              ...prevUser.adresses.slice(1),
                            ]
                          : [], // Add a default empty array if adresses is null or undefined
                      }))
                    }
                    required
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Phone Number</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    onChange={(e) =>
                      setCreateUser((prevUser) => ({
                        ...prevUser,
                        adresses: prevUser.adresses
                          ? [
                              {
                                ...prevUser.adresses[0],
                                tel: e.target.value,
                              },
                              ...prevUser.adresses.slice(1),
                            ]
                          : [], // Add a default empty array if adresses is null or undefined
                      }))
                    }
                    required
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Role</FormLabel>
                  <Select
                    value={createUser?.type || ""}
                    onChange={(e) =>
                      setCreateUser({
                        ...createUser,
                        type: e.target.value,
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

      {/* Delete Modal  */}
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={deleteModal.onClose}
        isOpen={deleteModal.isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to Deactivate User
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={deleteModal.onClose}>
              No
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                deleteUser.mutate(deleteUserId);
              }}
              ml={3}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default UsersList;
