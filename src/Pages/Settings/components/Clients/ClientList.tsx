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
} from "@chakra-ui/react";
import { useState } from "react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { MdArrowBack } from "react-icons/md";

import { UsersObject } from "../../../../models";
import useClient from "../../hooks/Client/useClient";
import useClientMutation from "../../hooks/Client/useClientMutation";
import useCreateClient from "../../hooks/Client/useCreateClient";
import DeleteClient from "./DeleteClient";

const ClientList = () => {
  // get clientList
  const { data: clientsList } = useClient();

  //create
  const [createClient, setCreateClient] = useState<UsersObject>(
    {} as UsersObject
  );
  const createModal = useDisclosure();
  const createClientQuery = useCreateClient(() => {
    createModal.onClose();
  });

  const handleCreate = () => {
    createClientQuery.mutate(createClient);
    setCreateClient({} as UsersObject);
  };

  //update
  const [editClient, setEditClient] = useState<UsersObject>({} as UsersObject);
  const updateModal = useDisclosure();

  const updateClient = useClientMutation(() => {
    updateModal.onClose();
  }, true);

  const HandleUpdate = () => {
    updateClient.mutate(editClient);
  };

  //delete
  const deleteModal = useDisclosure();
  const handleDelete = () => {
    deleteClient.mutate(deleteClientId);
  };
  const deleteClient = useClientMutation(() => {
    deleteModal.onClose();
  }, false);
  const [deleteClientId, setDeleteClientId] = useState("");

  // new Client
  const [modelSection, setModelSection] = useState<String>("newClint");

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

          <Button
            onClick={() => {
              createModal.onOpen();
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
                                    ...editClient!,
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
                                  setDeleteClientId(client.id);
                                  deleteModal.onOpen();
                                }}
                                icon={<DeleteIcon />}
                                colorScheme="blue"
                                variant={"solid"}
                                size={"sm"}
                                bg={"#294c58"}
                                m={0.5}
                              />
                              {/* <IconButton
                                m={0.5}
                                aria-label="Search database"
                                as={NavLink}
                                icon={<FaAngleRight />}
                                onClick={() => {}}
                                colorScheme="blue"
                                variant={"solid"}
                                size={"sm"}
                                bg={"#294c58"}
                              /> */}
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

                    <Input className="FormControl" placeholder="" />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel>Client Name</FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient!,
                          name: e.target.value,
                        })
                      }
                      value={createClient?.name || ""}
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
                          ...createClient!,
                          financialContactName: e.target.value,
                        })
                      }
                      value={createClient?.financialContactName || ""}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> Financial Contact Email </FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient!,
                          financialContactEmail: e.target.value,
                        })
                      }
                      value={createClient?.financialContactEmail || ""}
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
                          ...createClient!,
                          siteType: e.target.value,
                        })
                      }
                      value={createClient?.siteType || ""}
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
                          ...createClient!,
                          currencyCode: e.target.value,
                        })
                      }
                      value={createClient?.currencyCode || ""}
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
                          ...createClient!,
                          vatRate: e.target.value,
                        })
                      }
                      value={createClient?.vatRate || ""}
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
                          ...createClient!,
                          vatValue: e.target.value,
                        })
                      }
                      value={createClient?.vatValue || ""}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> VAT Number </FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient!,
                          vatNumber: e.target.value,
                        })
                      }
                      value={createClient?.vatNumber || ""}
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
      {/* Update Modal  */}
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
                    Update Client
                  </Heading>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel>Client Code</FormLabel>

                    <Input className="FormControl" placeholder="" />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel>Client Name</FormLabel>
                    <Input
                      onChange={(e) =>
                        setEditClient({
                          ...editClient!,
                          name: e.target.value,
                        })
                      }
                      value={editClient?.name || ""}
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
                        setEditClient({
                          ...editClient!,
                          financialContactName: e.target.value,
                        })
                      }
                      value={editClient?.financialContactName || ""}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> Financial Contact Email </FormLabel>
                    <Input
                      onChange={(e) =>
                        setEditClient({
                          ...editClient!,
                          financialContactEmail: e.target.value,
                        })
                      }
                      value={editClient?.financialContactEmail || ""}
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
                        setEditClient({
                          ...editClient!,
                          siteType: e.target.value,
                        })
                      }
                      value={editClient?.siteType || ""}
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
                        setEditClient({
                          ...editClient!,
                          currencyCode: e.target.value,
                        })
                      }
                      value={editClient?.currencyCode || ""}
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
                        setEditClient({
                          ...editClient!,
                          vatRate: e.target.value,
                        })
                      }
                      value={editClient?.vatRate || ""}
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
                        setEditClient({
                          ...editClient!,
                          vatValue: e.target.value,
                        })
                      }
                      value={editClient?.vatValue || ""}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> VAT Number </FormLabel>
                    <Input
                      onChange={(e) =>
                        setEditClient({
                          ...editClient!,
                          vatNumber: e.target.value,
                        })
                      }
                      value={editClient?.vatNumber || ""}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <Button
                    onClick={HandleUpdate}
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
      <DeleteClient
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
        onDelete={handleDelete}
      />
    </>
  );
};

export default ClientList;
