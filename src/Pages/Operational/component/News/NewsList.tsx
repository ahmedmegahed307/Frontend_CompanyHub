import {
  Card,
  Text,
  VStack,
  Heading,
  HStack,
  Table,
  Thead,
  Tr,
  Td,
  Tbody,
} from "@chakra-ui/react";
import { MdBookmarks } from "react-icons/md";
import React from "react";

const NewsList: React.FC = () => {
  return (
    <VStack
      w={"full"}
      align={"start"}
      alignItems={"start"}
      alignContent={"start"}
      justify={"space-between"}
    >
      <Heading color={"gray.500"} size={"lg"}>
        News
      </Heading>

      {/* calendar */}
      <Card
        overflow={"scroll"}
        overflowX={"hidden"}
        h={300}
        w={"full"}
        p={0}
        borderRadius={""}
        variant={"outline"}
      >
        <Table w={"full"} variant="striped">
          <Thead rounded={"xl"}>
            <Tr>
              <Td flexWrap={"wrap"}>
                <HStack>
                  <Text fontSize={"4xl"}>
                    <MdBookmarks style={{ color: "#416D77" }} />
                  </Text>

                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,{" "}
                  </Text>
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td flexWrap={"wrap"}>
                <HStack>
                  <Text fontSize={"4xl"}>
                    <MdBookmarks style={{ color: "#416D77" }} />
                  </Text>

                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,{" "}
                  </Text>
                </HStack>
              </Td>
            </Tr>{" "}
            <Tr>
              <Td flexWrap={"wrap"}>
                <HStack>
                  <Text fontSize={"4xl"}>
                    <MdBookmarks style={{ color: "#416D77" }} />
                  </Text>

                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,{" "}
                  </Text>
                </HStack>
              </Td>
            </Tr>{" "}
            <Tr>
              <Td flexWrap={"wrap"}>
                <HStack>
                  <Text fontSize={"4xl"}>
                    <MdBookmarks style={{ color: "#416D77" }} />
                  </Text>

                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,{" "}
                  </Text>
                </HStack>
              </Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr w={"full"}></Tr>
          </Tbody>
        </Table>
      </Card>
    </VStack>
  );
};

export default NewsList;
