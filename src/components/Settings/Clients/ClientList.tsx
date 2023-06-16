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
  IconButton,
  useDisclosure,
  AbsoluteCenter,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Select,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { UsersObject } from "../../../models";
import { FaAngleRight } from "react-icons/fa";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { MdArrowBack } from "react-icons/md";
import Swal from "sweetalert2";

const ClientList = () => {
  // const createModal = useDisclosure();
  const deleteModal = useDisclosure();
  const updateModal = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [clientsList, setClientsLists] = useState<UsersObject[]>();

  const [createClient, setCreateClient] = useState({
    name: "",
    code: "",
    financialContactName: "",
    financialContactEmail: "",
    siteType: "",
    currencyCode: "",
    vatRate: "",
    vatValue: "",
    vatNumber: "",
    newSubType: "",
  });

  const [editClient, setEditClient] = useState({
    id: "",
    name: "",
    code: "",
    financialContactName: "",
    financialContactEmail: "",
    siteType: "",
    currencyCode: "",
    vatRate: "",
    vatValue: "",
    vatNumber: "",
    newSubType: "",
  });

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

  const handleCreate = async () => {
    try {
      console.log(createClient);

      const post = await DataStore.save(
        new UsersObject({
          name: createClient.name,
          // email: createClient.email,
          type: "client",

          financialContactEmail: createClient.financialContactEmail,
          financialContactName: createClient.financialContactName,
          currencyCode: createClient.currencyCode,
          siteType: createClient.siteType,
          vatRate: createClient.vatValue,
          vatNumber: createClient.vatNumber,
          vatValue: createClient.vatValue,
        })
      );

      Swal.fire({
        title: "Congratulations",
        text: "Resolutions have been saved successfully",
        icon: "success",
      });
      // createModal.onClose();

      setCreateClient({
        name: "",
        code: "",
        financialContactName: "",
        financialContactEmail: "",
        siteType: "",
        currencyCode: "",
        vatRate: "",
        vatValue: "",
        vatNumber: "",
        newSubType: "",
      });
    } catch (error: any) {
      Swal.fire({
        title: "Oops",
        text: error,
        icon: "error",
      });
    }
  };

  // new Client
  const [modelSection, setModelSection] = useState<String>("newClint");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeDrower, setActiveDrower] = useState<String>("createClient");

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
            Clients List
          </Heading>
          <Spacer />
          {/* <Button my={10} onClick={() => {}} colorScheme="blue" size={'sm'} variant={'outline'}  color={"#294c58"}>
            New Order
          </Button> */}

          <Button
            onClick={() => {
              onOpen();
              setActiveDrower("createClient");
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
                            <Td>
                              {client.adresses && client.adresses![0]?.city}
                            </Td>
                            <Td>
                              {client.adresses && client.adresses![0]?.city}
                            </Td>
                            <Td>
                              {client.adresses && client.adresses![0]?.city}
                            </Td>
                            <Td>Not yet in Database</Td>
                            <Td>
                              <IconButton
                                aria-label="Search database"
                                icon={<EditIcon />}
                                onClick={() => {
                                  console.log("asd");
                                  console.log(client);
                                  setModelSection("newClint");
                                  setEditClient({
                                    ...editClient,
                                    id: client.id!,
                                    name: client.name!,
                                    currencyCode: client.currencyCode!,
                                    financialContactEmail:
                                      client.financialContactEmail!,
                                    financialContactName:
                                      client.financialContactName!,
                                    siteType: client.siteType!,
                                    vatNumber: client.vatNumber!,
                                    vatRate: client.vatRate!,
                                    vatValue: client.vatValue!,
                                  });
                                  updateModal.onOpen();
                                }}
                                colorScheme="blue"
                                variant={"solid"}
                                size={"sm"}
                                bg={"#294c58"}
                                m={0.5}
                              />
                              <IconButton
                                aria-label="Search database"
                                onClick={() => {
                                  setEditClient({
                                    ...editClient,
                                    id: client.id!,
                                    name: client.name!,
                                    currencyCode: client.currencyCode!,
                                    financialContactEmail:
                                      client.financialContactEmail!,
                                    financialContactName:
                                      client.financialContactName!,
                                    siteType: client.siteType!,
                                    vatNumber: client.vatNumber!,
                                    vatRate: client.vatRate!,
                                    vatValue: client.vatValue!,
                                  });
                                  deleteModal.onOpen();
                                }}
                                icon={<DeleteIcon />}
                                colorScheme="blue"
                                variant={"solid"}
                                size={"sm"}
                                bg={"#294c58"}
                                m={0.5}
                              />
                              <IconButton
                                m={0.5}
                                aria-label="Search database"
                                as={NavLink}
                                icon={<FaAngleRight />}
                                onClick={() => {}}
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

      <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {modelSection == "financialDetails" && (
              <IconButton
                onClick={() => setModelSection("newClint")}
                aria-label="Search database"
                icon={<MdArrowBack />}
              />
            )}
          </DrawerHeader>
          <DrawerBody>
            <AbsoluteCenter>
              {modelSection == "newClint" && (
                <>
                  <Heading my={5} size={"md"}>
                    Create New Client
                  </Heading>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel>Client Code</FormLabel>

                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient,
                          code: e.target.value,
                        })
                      }
                      value={createClient.code}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel>Client Name</FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient,
                          name: e.target.value,
                        })
                      }
                      value={createClient.name}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <Button
                    onClick={() => setModelSection("financialDetails")}
                    colorScheme="blue"
                    w={"full"}
                    bg={"#294c58"}
                    my={10}
                    // isDisabled={priority == null || jobType == null}
                  >
                    Next
                  </Button>
                </>
              )}
              {modelSection == "financialDetails" && (
                <>
                  <Heading my={5} size={"md"}>
                    Financial details
                  </Heading>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> Financial Contact Name </FormLabel>

                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient,
                          financialContactName: e.target.value,
                        })
                      }
                      value={createClient.financialContactName}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> Financial Contact Email </FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient,
                          financialContactEmail: e.target.value,
                        })
                      }
                      value={createClient.financialContactEmail}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <FormControl pb={10} w={"lg"}>
                    <FormLabel> Site Type </FormLabel>
                    <Select
                      // onChange={(e) =>
                      //   setEngineer(engineersList![parseInt(e.target.value)])
                      // }
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient,
                          siteType: e.target.value,
                        })
                      }
                      value={createClient.siteType}
                      variant="outline"
                      placeholder=" Select the Engineer for this job"
                    >
                      <option value="company">Company</option>
                      <option value="household">Household</option>
                    </Select>
                  </FormControl>
                  <FormControl pb={10} w={"lg"}>
                    <FormLabel> Currency Code </FormLabel>
                    <Select
                      // onChange={(e) =>
                      //   setEngineer(engineersList![parseInt(e.target.value)])
                      // }
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient,
                          currencyCode: e.target.value,
                        })
                      }
                      value={createClient.currencyCode}
                      variant="outline"
                      placeholder=" Select the Engineer for this job"
                    >
                      <option value="aud">AUD</option>
                      <option value="eur">EUR</option>
                      <option value="gbp">GBP</option>
                    </Select>{" "}
                  </FormControl>
                  <FormControl pb={10} w={"lg"}>
                    <FormLabel> VAT Rate </FormLabel>
                    <Select
                      // onChange={(e) =>
                      //   setEngineer(engineersList![parseInt(e.target.value)])
                      // }
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient,
                          vatRate: e.target.value,
                        })
                      }
                      value={createClient.vatRate}
                      variant="outline"
                      placeholder=" Select the Engineer for this job"
                    >
                      <option value="zeroRate">Zero Rate</option>
                      <option value="standardRate">Standard Rate</option>
                      <option value="lowRate">Low Rate</option>
                    </Select>
                  </FormControl>

                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> VAT Value </FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient,
                          vatValue: e.target.value,
                        })
                      }
                      value={createClient.vatValue}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> VAT Number </FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient,
                          vatNumber: e.target.value,
                        })
                      }
                      value={createClient.vatNumber}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <Button
                    onClick={() => handleCreate()}
                    colorScheme="blue"
                    w={"full"}
                    bg={"#294c58"}
                    my={10}
                  >
                    Save
                  </Button>
                </>
              )}
            </AbsoluteCenter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer
        onClose={updateModal.onClose}
        isOpen={updateModal.isOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {modelSection == "financialDetails" && (
              <IconButton
                onClick={() => setModelSection("newClint")}
                aria-label="Search database"
                icon={<MdArrowBack />}
              />
            )}
          </DrawerHeader>
          <DrawerBody>
            <AbsoluteCenter>
              {modelSection == "newClint" && (
                <>
                  <Heading my={5} size={"md"}>
                    Create New Client
                  </Heading>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel>Client Code</FormLabel>

                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...editClient,
                          code: e.target.value,
                        })
                      }
                      value={editClient.code}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel>Client Name</FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...editClient,
                          name: e.target.value,
                        })
                      }
                      value={editClient.name}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <Button
                    onClick={() => setModelSection("financialDetails")}
                    colorScheme="blue"
                    w={"full"}
                    bg={"#294c58"}
                    my={10}
                    // isDisabled={priority == null || jobType == null}
                  >
                    Next
                  </Button>
                </>
              )}
              {modelSection == "financialDetails" && (
                <>
                  <Heading my={5} size={"md"}>
                    Financial details
                  </Heading>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> Financial Contact Name </FormLabel>

                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...editClient,
                          financialContactName: e.target.value,
                        })
                      }
                      value={editClient.financialContactName}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> Financial Contact Email </FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...editClient,
                          financialContactEmail: e.target.value,
                        })
                      }
                      value={editClient.financialContactEmail}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <FormControl pb={10} w={"lg"}>
                    <FormLabel> Site Type </FormLabel>
                    <Select
                      // onChange={(e) =>
                      //   setEngineer(engineersList![parseInt(e.target.value)])
                      // }
                      onChange={(e) =>
                        setCreateClient({
                          ...editClient,
                          siteType: e.target.value,
                        })
                      }
                      value={editClient.siteType}
                      variant="outline"
                      placeholder=" Select the Engineer for this job"
                    >
                      <option value="company">Company</option>
                      <option value="household">Household</option>
                    </Select>
                  </FormControl>
                  <FormControl pb={10} w={"lg"}>
                    <FormLabel> Currency Code </FormLabel>
                    <Select
                      // onChange={(e) =>
                      //   setEngineer(engineersList![parseInt(e.target.value)])
                      // }
                      onChange={(e) =>
                        setCreateClient({
                          ...editClient,
                          currencyCode: e.target.value,
                        })
                      }
                      value={editClient.currencyCode}
                      variant="outline"
                      placeholder=" Select the Engineer for this job"
                    >
                      <option value="aud">AUD</option>
                      <option value="eur">EUR</option>
                      <option value="gbp">GBP</option>
                    </Select>{" "}
                  </FormControl>
                  <FormControl pb={10} w={"lg"}>
                    <FormLabel> VAT Rate </FormLabel>
                    <Select
                      // onChange={(e) =>
                      //   setEngineer(engineersList![parseInt(e.target.value)])
                      // }
                      onChange={(e) =>
                        setCreateClient({
                          ...editClient,
                          vatRate: e.target.value,
                        })
                      }
                      value={editClient.vatRate}
                      variant="outline"
                      placeholder=" Select the Engineer for this job"
                    >
                      <option value="zeroRate">Zero Rate</option>
                      <option value="standardRate">Standard Rate</option>
                      <option value="lowRate">Low Rate</option>
                    </Select>
                  </FormControl>

                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> VAT Value </FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...editClient,
                          vatValue: e.target.value,
                        })
                      }
                      value={editClient.vatValue}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> VAT Number </FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...editClient,
                          vatNumber: e.target.value,
                        })
                      }
                      value={editClient.vatNumber}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <Button
                    onClick={() => handleCreate()}
                    colorScheme="blue"
                    w={"full"}
                    bg={"#294c58"}
                    my={10}
                  >
                    Save
                  </Button>
                </>
              )}
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
            Are you sure you want to discard all of your notes? 44 words will be
            deleted.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={deleteModal.onClose}>
              No
            </Button>
            <Button
              colorScheme="red"
              onClick={async () => {
                const original = await DataStore.query(
                  UsersObject,
                  editClient!.id
                );

                if (original) {
                  const updatedPost = await DataStore.save(
                    UsersObject.copyOf(original, (_updated) => {
                      // updated.isActive = false;
                      deleteModal.onClose();
                    })
                  );
                }
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

export default ClientList;
