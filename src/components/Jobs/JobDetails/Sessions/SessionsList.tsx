import {
  Tabs,
  TabPanels,
  TabPanel,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Card,
} from "@chakra-ui/react";

const SessionsList = () => {
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
          <Flex w={"full"} direction={"row"}></Flex>
          <TabPanels pt={5} h={"50vh"}>
            <TabPanel>
              <TableContainer borderRadius={"xl"}>
                <Card p={0} borderRadius={""} variant={"outline"}>
                  <Table variant="simple">
                    <Thead bg={"gray.100"} rounded={"xl"}>
                      <Tr>
                        <Th>No.</Th>
                        <Th>Mode</Th>
                        <Th>Travel Start</Th>
                        <Th>Work Start</Th>
                        <Th>Work End</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>1</Td>
                        <Td>Travel to work</Td>
                        <Td>20/08/2022 11:30</Td>
                        <Td>20/08/2022 12:00</Td>
                        <Td>20/08/2022 14:00</Td>
                      </Tr>
                      <Tr>
                        <Td>2</Td>
                        <Td>Travel to work</Td>
                        <Td>20/08/2022 11:30</Td>
                        <Td>20/08/2022 12:00</Td>
                        <Td>20/08/2022 14:00</Td>
                      </Tr>
                      <Tr>
                        <Td>3</Td>
                        <Td>Travel to work</Td>
                        <Td>20/08/2022 11:30</Td>
                        <Td>20/08/2022 12:00</Td>
                        <Td>20/08/2022 14:00</Td>
                      </Tr>
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

export default SessionsList;
