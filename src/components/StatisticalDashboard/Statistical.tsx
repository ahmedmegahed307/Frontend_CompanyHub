import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  TableCaption,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import EngineerChart from "./EngineerChart";
import JobChart from "./JobChart";
import TodayJobClosedChart from "./TodayJobClosedChart";
import WorkProgressChart from "./WorkProgressChart";
import { AddIcon } from "@chakra-ui/icons";
import JobBarChart from "./JobBarChart";
import { FaBook } from "react-icons/fa";
import { MdBookmarks } from "react-icons/md";
//style={{ position: "absolute", left: -300, top: 10 }}
export default function Statistical() {
  return (
    <>
      <Flex direction={"column"} mx="auto" mt={10} px="4">
        <HStack justify={"space-between"}>
          <Heading size={"lg"}>Dashboard </Heading>
          {/* <Button
            onClick={() => {}}
            variant={"outline"}
            color={"#416D77"}
            borderColor={"#416D77"}
            _hover={{ bg: "#416D77", color: "white" }}
            size={"sm"}
            leftIcon={<AddIcon />}
            // bg={"#294c58"}
          >
            New Order
          </Button> */}
        </HStack>
        <Text fontSize={"sm"} color={"gray"}>
          Manage your account settings and set e-mail preferences.
        </Text>
      </Flex>

      <HStack m={5} mb={10}>
        <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
          <StatLabel fontWeight={"extrabold"}>Pending Jobs</StatLabel>
          <StatNumber
            fontSize={"xl"}
            fontWeight={"extrabold"}
            color={"#416D77"}
          >
            0
          </StatNumber>
          <StatHelpText fontSize={"sm"}>Comparison (0)</StatHelpText>
        </Stat>
        <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
          <StatLabel fontWeight={"extrabold"}>Open Jobs</StatLabel>
          <StatNumber
            fontSize={"xl"}
            fontWeight={"extrabold"}
            color={"#416D77"}
          >
            0
          </StatNumber>
          <StatHelpText fontSize={"sm"}>Comparison (0)</StatHelpText>
        </Stat>{" "}
        <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
          <StatLabel fontWeight={"extrabold"}>Assigned Jobs</StatLabel>
          <StatNumber
            fontSize={"xl"}
            fontWeight={"extrabold"}
            color={"#416D77"}
          >
            0
          </StatNumber>
          <StatHelpText fontSize={"sm"}>Comparison (0)</StatHelpText>
        </Stat>{" "}
        <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
          <StatLabel fontWeight={"extrabold"}>Resolved Jobs</StatLabel>
          <StatNumber
            fontSize={"xl"}
            fontWeight={"extrabold"}
            color={"#416D77"}
          >
            0
          </StatNumber>
          <StatHelpText fontSize={"sm"}>Comparison (0)</StatHelpText>
        </Stat>
      </HStack>

      <HStack m={5} spacing={5}>
        <VStack
          w={"full"}
          align={"start"}
          alignItems={"start"}
          alignContent={"start"}
          justify={"space-between"}
        >
          <Heading size={"lg"}>SLA Monitor </Heading>
          {/* <JobBarChart /> */}
          <Card
            overflow={"scroll"}
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
                {/* {jobsList &&
                  jobsList!.map((item, index) => (
                    <Tr key={item.id}>
                      <Td>{item.jobNumber ?? "00" + index}</Td>
                      <Td>Clint1</Td>
                      <Td>inches</Td>
                      <Td>{item.adress?.name}</Td>
                      <Td>{item.createdAt}</Td>
                      <Td> </Td>
                    </Tr>
                  ))} */}
              </Tbody>
            </Table>
          </Card>
        </VStack>
        <VStack
          w={"full"}
          align={"start"}
          alignItems={"start"}
          alignContent={"start"}
          justify={"space-between"}
        >
          <Heading size={"lg"}>News</Heading>

          {/* calender */}
          <Card
            overflow={"scroll"}
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
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,{" "}
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
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,{" "}
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
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,{" "}
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
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,{" "}
                      </Text>
                    </HStack>
                  </Td>
                </Tr>
                {/* <Tr>
                  <Th color={"gray"}>Request No.</Th>
                  <Th color={"gray"}>Client</Th>
                  <Th color={"gray"}>Site</Th>
                  <Th color={"gray"}>Description</Th>
                  <Th color={"gray"}>Logged</Th>
                  <Th color={"gray"}></Th>
                </Tr> */}
              </Thead>
              <Tbody>
                <Tr w={"full"}></Tr>
                {/* {jobsList &&
                  jobsList!.map((item, index) => (
                    <Tr key={item.id}>
                      <Td>{item.jobNumber ?? "00" + index}</Td>
                      <Td>Clint1</Td>
                      <Td>inches</Td>
                      <Td>{item.adress?.name}</Td>
                      <Td>{item.createdAt}</Td>
                      <Td> </Td>
                    </Tr>
                  ))} */}
              </Tbody>
            </Table>
          </Card>
        </VStack>
      </HStack>
    </>
  );
}
