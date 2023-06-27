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

const CheckList = () => {
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
                        <Th>Name</Th>
                        <Th>Mandatory </Th>
                        <Th>Completed</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>CheckList1</Td>
                        <Td>No</Td>
                        <Td>Yes</Td>
                      </Tr>
                      <Tr>
                        <Td>CheckList2</Td>
                        <Td>No</Td>
                        <Td>Yes</Td>
                      </Tr>
                      <Tr>
                        <Td>CheckList3</Td>
                        <Td>No</Td>
                        <Td>Yes</Td>
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

export default CheckList;
