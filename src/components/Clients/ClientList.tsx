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
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { UsersObject } from "../../models";
import { FaEdit, FaTimes } from "react-icons/fa";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { MdArrowBack } from "react-icons/md";

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
          <Heading size={"lg"} w={"full"} py={10} textAlign={"left"}>
            Clients List
          </Heading>
          <Spacer />
          {/* <Button my={10} onClick={() => {}} colorScheme="blue" size={'sm'} variant={'outline'}  color={"#294c58"}>
            New Order
          </Button> */}

      
          <Button   onClick={() => {
                              onOpen();
                              setActiveDrower("createClient");
                            }} leftIcon={<AddIcon  />}  my={10} px={10} py={5} colorScheme="blue" variant={'solid'} size={'sm'}  bg={"#294c58"}> 

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
                            <Td>
                            <IconButton
                              aria-label='Search database' 
                                as={NavLink}
                                icon={<EditIcon />}
                                onClick={() => {}}
                                colorScheme="blue"
                                variant={"solid"}
                                size={"sm"}
                                bg={"#294c58"}
                       m={1}      />
                                 <IconButton
                              aria-label='Search database' 
                                as={NavLink}
                                icon={<DeleteIcon />}
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
                      Create new client
                    </Heading>
                    <FormControl pb={5} w={"lg"}>
                      <FormLabel>Client Code</FormLabel>

                      <Input className="FormControl" placeholder="" />
                    </FormControl>
                    <FormControl pb={5} w={"lg"}>
                      <FormLabel>Client Name</FormLabel>
                      <Input className="FormControl" placeholder="" />
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

                      <Input className="FormControl" placeholder="" />
                    </FormControl>
                    <FormControl pb={5} w={"lg"}>
                      <FormLabel> Financial Contact Email </FormLabel>
                      <Input className="FormControl" placeholder="" />
                    </FormControl>

                    <FormControl pb={10} w={"lg"}>
                      <FormLabel> Site Type </FormLabel>
                      <Select
                        // onChange={(e) =>
                        //   setEngineer(engineersList![parseInt(e.target.value)])
                        // }
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
                      <Input className="FormControl" placeholder="" />
                    </FormControl>

                    <FormControl pb={5} w={"lg"}>
                      <FormLabel> VAT Number </FormLabel>
                      <Input className="FormControl" placeholder="" />
                    </FormControl>

                    <Button
                      onClick={() => setModelSection("financialDetails")}
                      colorScheme="blue"
                      w={"full"}
                      bg={"#294c58"}
                      my={10}
                 
                    >
                      Next
                    </Button>
                  </>
                )}
              </AbsoluteCenter>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
    </>
  );
};

export default ClientList;
