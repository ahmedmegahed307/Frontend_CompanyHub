import { AddIcon } from "@chakra-ui/icons";
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
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface Visit {
  id: number;
  client: String;
  contractReference: String;
  jobID: number;
  jobStatus: String;
  visitDate: String;
  engineer: String;
  description: String;
  isSeen: boolean;
}

const VisitsMockList = [
  {
    id: 1,
    client: "client1",
    contractReference: "100",
    jobID: 1,
    jobStatus: "assigned",
    visitDate: "10/10/2010",
    engineer: "eng1",
    description: "visits details",
    isSeen: false,
  },
  {
    id: 2,
    client: "client2",
    contractReference: "200",
    jobID: 2,
    jobStatus: "completed",
    visitDate: "10/10/2020",
    engineer: "eng2",
    description: "visits details2",
    isSeen: false,
  },
];

const VisitsList = () => {
  const [visitList, setVisitList] = useState<Visit[]>([]);

  useEffect(() => {
    setVisitList(VisitsMockList);
  }, []);

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
        <Tabs w={"full"}>
          <Flex w={"full"} direction={"row"}>
            <Heading size={"lg"} w={"full"} py={5} mt={-5} textAlign={"left"}>
              Visits List
            </Heading>
            <Spacer />
            <Button
              onClick={() => {}}
              leftIcon={<AddIcon />}
              my={10}
              px={10}
              py={5}
              colorScheme="yellow"
              variant="solid"
              size="sm"
            >
              Generate Visits
            </Button>
          </Flex>
          <TableContainer borderRadius={"xl"}>
            <Card p={0} borderRadius={""} variant={"outline"}>
              <Table variant="simple">
                <Thead bg={"gray.100"} rounded={"xl"}>
                  <Tr>
                    <Th>Client</Th>
                    <Th>Contract Reference</Th>
                    <Th>Job ID</Th>
                    <Th>Reminder Date</Th>
                    <Th>Engineer</Th>
                    <Th>Reminder Details</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {visitList &&
                    visitList.map((visit) => (
                      <Tr key={visit.id}>
                        <Td>{visit.client}</Td>
                        <Td>
                          <NavLink to={`/contracts/editContract/${visit.id}`}>
                            {visit.contractReference}
                          </NavLink>
                        </Td>
                        <Td>{visit.jobID}</Td>
                        <Td>{visit.visitDate}</Td>
                        <Td>{visit.engineer}</Td>
                        <Td>{visit.description}</Td>
                        <Checkbox ml={8} mt={5} isChecked={visit.isSeen}>
                          {visit.isSeen}
                        </Checkbox>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </Card>
          </TableContainer>
        </Tabs>
      </Flex>
    </>
  );
};

export default VisitsList;
