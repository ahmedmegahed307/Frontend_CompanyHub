import {
  Tabs,
  TabPanels,
  TabPanel,
  Flex,
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Card,
} from "@chakra-ui/react";

import usePendingJobs from "../../../hooks/Jobs/Pending/usePendingJobs";

const FilterResult = () => {
  const { data: jobsList } = usePendingJobs();

  return (
    <>
      <Box w={"full"} borderColor="gray.200" py={10}>
        <Flex direction={"column"} maxW="7xl" mx="auto" px="4">
          <Tabs mt={-8} w={"full"}>
            <TabPanels pt={5} h={"50vh"}>
              <TabPanel>
                <TableContainer borderRadius={"xl"}>
                  <Card p={0} borderRadius={""} variant={"outline"}>
                    <Table variant="simple">
                      <Thead bg={"gray.100"} rounded={"xl"}>
                        <Tr>
                          <Th color={"gray"}>Request No.</Th>
                          <Th color={"gray"}>Client</Th>
                          <Th color={"gray"}>Site</Th>
                          <Th color={"gray"}>Description</Th>
                          <Th color={"gray"}>Logged</Th>
                          <Th color={"gray"}></Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {jobsList &&
                          jobsList!.map((item, index) => (
                            <Tr key={item.id}>
                              <Td>{item.jobNumber ?? "00" + index}</Td>
                              <Td>Clint1</Td>
                              <Td>inches</Td>
                              <Td>{item.adress?.name}</Td>
                              <Td>{item.createdAt}</Td>
                              <Td> </Td>
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
      </Box>
    </>
  );
};

export default FilterResult;
