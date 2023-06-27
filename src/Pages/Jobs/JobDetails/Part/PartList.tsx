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

const PartList = () => {
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
                        <Th>Part Name</Th>
                        <Th>Part Cost</Th>
                        <Th>Part Quantity</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>Test Part2</Td>
                        <Td>14$</Td>
                        <Td>3</Td>
                      </Tr>
                      <Tr>
                        <Td>Test Part3</Td>
                        <Td>50$</Td>
                        <Td>7</Td>
                      </Tr>
                      <Tr>
                        <Td>Test Part1</Td>
                        <Td>20$</Td>
                        <Td>5</Td>
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

export default PartList;
