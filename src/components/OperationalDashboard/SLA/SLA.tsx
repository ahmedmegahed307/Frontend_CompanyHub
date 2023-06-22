import { Card } from "@chakra-ui/card";
import { VStack, Heading } from "@chakra-ui/layout";
import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/table";
import { Tag } from "@chakra-ui/tag";
import React from "react";

const SLA = () => {
  return (
    <>
      <VStack
        w={"full"}
        align={"start"}
        alignItems={"start"}
        alignContent={"start"}
        justify={"space-between"}
      >
        <Heading color={"gray.500"} size={"lg"}>
          SLA Monitor{" "}
        </Heading>
        {/* <JobBarChart /> */}
        <Card
          overflow={"scroll"}
          overflowX={"hidden"}
          h={300}
          w={"full"}
          m={10}
          borderRadius={""}
          variant={"outline"}
        >
          <Table variant="simple">
            <Thead rounded={"xl"}>
              <Tr>
                <Th color={"gray"}>Job</Th>
                <Th color={"gray"}>Client</Th>
                <Th color={"gray"}>SLA Breach</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td> 001 </Td>
                <Td> Client1 </Td>
                <Td>
                  <Tag colorScheme="orange"> 10h 2m </Tag>
                </Td>
              </Tr>
              <Tr>
                <Td> 001 </Td>
                <Td> Client1 </Td>
                <Td>
                  <Tag colorScheme="green"> 10h 2m </Tag>
                </Td>
              </Tr>{" "}
              <Tr>
                <Td> 001 </Td>
                <Td> Client1 </Td>
                <Td>
                  <Tag colorScheme="red"> 10h 2m </Tag>
                </Td>
              </Tr>
              <Tr>
                <Td> 001 </Td>
                <Td> Client1 </Td>
                <Td>
                  <Tag colorScheme="orange"> 10h 2m </Tag>
                </Td>
              </Tr>
              <Tr>
                <Td> 001 </Td>
                <Td> Client1 </Td>
                <Td>
                  <Tag colorScheme="orange"> 10h 2m </Tag>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Card>
      </VStack>
    </>
  );
};

export default SLA;
