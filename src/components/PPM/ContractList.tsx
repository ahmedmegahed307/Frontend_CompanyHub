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
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  AbsoluteCenter,
  FormControl,
  FormLabel,
  Select,
  IconButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { JobTypesList, UsersObject } from "../../models";
import { DataStore } from "aws-amplify";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import { NavLink } from "react-router-dom";

interface Contract {
  id: number;
  contractReference: string;
  client: string;
  jobType: string;
  jobSubType: string;
  status: string;
  expiryDate: string;
  nextVisitDate: string;
}

const ContractMockList = [
  {
    id: 1,
    contractReference: "100",
    client: "client1",
    jobType: "Plubmer",
    jobSubType: "sub1",
    status: "assigned",
    expiryDate: "10/10/2010",
    nextVisitDate: "15/10/2010",
  },
  {
    id: 2,
    contractReference: "200",
    client: "client2",
    jobType: "maintenance",
    jobSubType: "sub2",
    status: "completed",
    expiryDate: "10/10/2020",
    nextVisitDate: "20/10/2020",
  },
];
const ContractList = () => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  const [clientList, setClientsLists] = useState<UsersObject[]>();
  const [selectedContract, setSelectedContract] = useState<Contract | null>(
    null
  );
  const handleDeleteContract = (contract: Contract) => {
    setSelectedContract(contract);
    deleteModal.onOpen();
  };

  useEffect(() => {
    const clientList = DataStore.observeQuery(UsersObject).subscribe(
      ({ items }) => {
        setClientsLists(items);
      }
    );

    return () => {
      clientList.unsubscribe();
    };
  }, []);

  const [jobTypeList, setJobTypeList] = useState<JobTypesList[]>();

  useEffect(() => {
    const jobTypeList = DataStore.observeQuery(JobTypesList).subscribe(
      ({ items }) => {
        setJobTypeList(items);
      }
    );
    return () => {
      jobTypeList.unsubscribe();
    };
  }, []);

  const [contractList, setContractLists] = useState<Contract[]>();

  useEffect(() => {
    setContractLists(ContractMockList);
  }, []);

  const [createContract, setCreateContract] = useState({
    contractReference: "",
    client: "",
    jobType: "",
    jobSubType: "",
    status: "",
    expiryDate: "",
    nextVisitDate: "",
  });

  const handleCreate = async (event: FormEvent) => {
    event.preventDefault();
    const newContract: Contract = {
      id: contractList ? contractList.length + 1 : 1,
      contractReference: createContract.contractReference,
      client: createContract.client,
      jobType: createContract.jobType,
      jobSubType: createContract.jobSubType,
      status: "test",
      expiryDate: format(new Date(createContract.expiryDate), "dd/MM/yyyy"),
      nextVisitDate: format(
        new Date(createContract.nextVisitDate),
        "dd/MM/yyyy"
      ),
    };
    setContractLists((prevContractList) =>
      prevContractList ? [...prevContractList, newContract] : [newContract]
    );
    setCreateContract({
      contractReference: "",
      client: "",
      jobType: "",
      jobSubType: "",
      status: "",
      expiryDate: "",
      nextVisitDate: "",
    });
    createModal.onClose();
  };

  const createModal = useDisclosure();
  const deleteModal = useDisclosure();

  const updateModal = useDisclosure();

  const [editContract, setEditContract] = useState({
    id: 0,
    contractReference: "",
  });
  const handleUpdate = async (event: FormEvent) => {
    event.preventDefault();

    const updatedContractList = contractList?.map((contract) => {
      if (contract.id === editContract.id) {
        return {
          ...contract,
          contractReference: editContract.contractReference,
        };
      }
      return contract;
    });

    setContractLists(updatedContractList);
    updateModal.onClose();
  };

  const OnDeleteContract = (contract: Contract) => {
    const updatedContractList = contractList?.filter(
      (c) => c.id !== contract.id
    );
    setContractLists(updatedContractList);
  };

  return (
    <>
      <Flex
        direction={"column"}
        alignItems="center"
        maxW="7xl"
        mx="auto"
        px="5"
        w={"full"}
      >
        <Flex w={"full"} direction={"row"}>
          <Heading size={"lg"} w={"full"} py={10} textAlign={"left"}>
            Contract List
          </Heading>
          <Spacer />

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
            Add Contract
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
                        <Th>Contract Reference</Th>
                        <Th>Client</Th>
                        <Th>Job Type</Th>
                        <Th>Status</Th>
                        <Th>Expiry Date</Th>
                        <Th>Next Visit Date</Th>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {contractList &&
                        contractList.map((contract) => (
                          <Tr key={contract.id}>
                            <Td>{contract.contractReference}</Td>
                            <Td>{contract.client}</Td>
                            <Td>{contract.jobType}</Td>
                            <Td>{contract.status}</Td>
                            <Td>{contract.expiryDate}</Td>
                            <Td>{contract.nextVisitDate}</Td>
                            <Td>
                              <IconButton
                                aria-label="Search database"
                                as={NavLink}
                                icon={<EditIcon />}
                                onClick={() => {
                                  setEditContract({
                                    id: contract.id,
                                    contractReference:
                                      contract.contractReference,
                                  });
                                  updateModal.onOpen();
                                }}
                                colorScheme="blue"
                                variant={"solid"}
                                size={"sm"}
                                bg={"#294c58"}
                                m={1}
                              />
                              <IconButton
                                aria-label="Search database"
                                as={NavLink}
                                icon={<DeleteIcon />}
                                onClick={() => {
                                  handleDeleteContract(contract);
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
      {/* create */}
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
              <form onSubmit={handleCreate}>
                <Heading my={5} size={"md"}>
                  Create Contract
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Contract Reference</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    value={createContract.contractReference}
                    onChange={(e) =>
                      setCreateContract({
                        ...createContract,
                        contractReference: e.target.value,
                      })
                    }
                    required
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Client</FormLabel>
                  <Select
                    value={createContract.client}
                    onChange={(e) =>
                      setCreateContract({
                        ...createContract,
                        client: e.target.value,
                      })
                    }
                  >
                    <option></option>
                    {clientList?.map((client) => (
                      <option>{client.name}</option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Job Type</FormLabel>
                  <Select
                    value={createContract.jobType}
                    onChange={(e) =>
                      setCreateContract({
                        ...createContract,
                        jobType: e.target.value,
                      })
                    }
                  >
                    <option></option>
                    {jobTypeList?.map((jobtype) => (
                      <option>{jobtype.name}</option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Job Sub Types</FormLabel>
                  <Select
                    value={createContract.jobSubType}
                    onChange={(e) =>
                      setCreateContract({
                        ...createContract,
                        jobSubType: e.target.value,
                      })
                    }
                  >
                    <option></option>
                    {jobTypeList?.map((jobtype) => (
                      <option>{jobtype.subTypeList}</option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl pb={5} w="lg">
                  <FormLabel>Expiry Date</FormLabel>
                  <DatePicker
                    selected={
                      createContract.expiryDate
                        ? new Date(createContract.expiryDate)
                        : null
                    }
                    onChange={(date) =>
                      setCreateContract({
                        ...createContract,
                        expiryDate: date?.toISOString() ?? "",
                      })
                    }
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="dd/MM/yyyy HH:mm"
                  />
                </FormControl>
                <FormControl pb={5} w="lg">
                  <FormLabel>Next Visit Date</FormLabel>
                  <DatePicker
                    selected={
                      createContract.nextVisitDate
                        ? new Date(createContract.nextVisitDate)
                        : null
                    }
                    onChange={(date) =>
                      setCreateContract({
                        ...createContract,
                        nextVisitDate: date?.toISOString() ?? "",
                      })
                    }
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="dd/MM/yyyy HH:mm"
                  />
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
      {/* Update modal  */}

      <Drawer
        onClose={updateModal.onClose}
        isOpen={updateModal.isOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <AbsoluteCenter>
              <form onSubmit={handleUpdate}>
                <Heading my={5} size={"md"}>
                  Update Resolution
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    value={editContract!.contractReference}
                    onChange={(e) =>
                      setEditContract({
                        ...editContract!,
                        contractReference: e.target.value,
                      })
                    }
                    required
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  w={"full"}
                  bg={"#294c58"}
                  my={10}
                >
                  Update
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
            Are you sure you want to discard all of your notes? 44 words will be
            deleted.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={deleteModal.onClose}>
              No
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                if (selectedContract) {
                  OnDeleteContract(selectedContract);
                }
                setSelectedContract(null);
                deleteModal.onClose();
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

export default ContractList;
