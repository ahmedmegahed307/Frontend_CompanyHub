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
      <Flex direction={"column"} mx="auto" mt={5} px="4">
        <HStack justify={"space-between"}>
          <Heading color={"#1396ab"} size={"lg"}>
            Statistical Dashboard
          </Heading>
        </HStack>
      </Flex>

      <HStack m={5} mb={10}>
        <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
          <StatLabel fontWeight={"extrabold"}>Plan / Actual</StatLabel>
          <StatNumber
            fontSize={"xl"}
            fontWeight={"extrabold"}
            color={"#416D77"}
          >
            0 / 0
          </StatNumber>
          <StatHelpText fontSize={"sm"}>0 of 0 today jobs closed</StatHelpText>
        </Stat>
        <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
          <StatLabel fontWeight={"extrabold"}>Work In Progress</StatLabel>
          <StatNumber
            fontSize={"xl"}
            fontWeight={"extrabold"}
            color={"#416D77"}
          >
            0 / 0
          </StatNumber>
          <StatHelpText fontSize={"sm"}>
            15 / 15 scheduled jobs complete
          </StatHelpText>
        </Stat>{" "}
        <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
          <StatLabel fontWeight={"extrabold"}>Customer Satisfaction</StatLabel>
          <StatNumber
            fontSize={"xl"}
            fontWeight={"extrabold"}
            color={"#416D77"}
          >
            0 / 0
          </StatNumber>
          <StatHelpText fontSize={"sm"}>Average Score 4.75</StatHelpText>
        </Stat>{" "}
      </HStack>

      <HStack m={5} spacing={5}>
        <VStack
          w={"full"}
          align={"start"}
          alignItems={"start"}
          alignContent={"start"}
          justify={"space-between"}
        >
          <Heading color={"gray.500"} size={"lg"}>
            Total number of jobs over time.{" "}
          </Heading>
          <JobBarChart />
        </VStack>
        <VStack
          w={"full"}
          align={"start"}
          alignItems={"start"}
          alignContent={"start"}
          justify={"space-between"}
        >
          <Heading color={"gray.500"} size={"lg"}>
            Engineer Hours last 7 days.
          </Heading>

          <EngineerChart />
        </VStack>
      </HStack>
    </>
  );
}
