import React, { FormEvent, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
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
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

import "react-datepicker/dist/react-datepicker.css";
import DeleteContract from "./DeleteContract";
import {
  Contract,
  ContractMockList,
} from "../../../../../StaticData/StaticData";

const ContractList = () => {
  const [selectedContract, setSelectedContract] = useState<Contract | null>(
    null
  );

  const handleDeleteContract = (contract: Contract) => {
    setSelectedContract(contract);
    deleteModal.onOpen();
  };

  const [contractList, setContractLists] = useState<Contract[]>();

  useEffect(() => {
    setContractLists(ContractMockList);
  }, []);

  const deleteModal = useDisclosure();

  const onDeleteContract = () => {
    if (selectedContract) {
      const updatedContractList = contractList?.filter(
        (c) => c.id !== selectedContract.id
      );
      setContractLists(updatedContractList);
    }
    setSelectedContract(null);
    deleteModal.onClose();
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
            as={NavLink}
            to="/ppm/contracts/addContract"
            onClick={() => {}}
            variant={"outline"}
            color={"#416D77"}
            borderColor={"#416D77"}
            _hover={{ bg: "#416D77", color: "white" }}
            size={"sm"}
            leftIcon={<AddIcon />}
            // bg={"#294c58"}
          >
            New Contract
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
                              <NavLink
                                to={`/ppm/contracts/editContract/${contract.id}`}
                              >
                                <IconButton
                                  aria-label="Search database"
                                  icon={<EditIcon />}
                                  colorScheme="blue"
                                  variant="solid"
                                  size="sm"
                                  bg="#294c58"
                                  m={1}
                                />
                              </NavLink>
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

      {/* Delete Modal   */}
      <DeleteContract
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
        onDeleteContract={onDeleteContract}
      />
    </>
  );
};

export default ContractList;
