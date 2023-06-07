import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  HStack,
  Heading,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import EngineerChart from "./EngineerChart";
import JobChart from "./JobChart";
import TodayJobClosedChart from "./TodayJobClosedChart";
import WorkProgressChart from "./WorkProgressChart";
import { AddIcon } from "@chakra-ui/icons";
import JobBarChart from "./JobBarChart";
//style={{ position: "absolute", left: -300, top: 10 }}
export default function Statistical() {
  return (
    <>
      <Flex direction={"column"} mx="auto" mt={10} px="4">
        <HStack justify={"space-between"}>
          <Heading size={"lg"}>Dashboard </Heading>
          <Button
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
          </Button>
        </HStack>
        <Text fontSize={"sm"} color={"gray"}>
          Manage your account settings and set e-mail preferences.
        </Text>
      </Flex>

      <HStack m={5}>
        <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
          <StatLabel>Collected Fees</StatLabel>
          <StatNumber>£0.00</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>{" "}
        <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
          <StatLabel>Collected Fees</StatLabel>
          <StatNumber>£0.00</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>{" "}
        <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
          <StatLabel>Collected Fees</StatLabel>
          <StatNumber>£0.00</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>{" "}
        <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
          <StatLabel>Collected Fees</StatLabel>
          <StatNumber>£0.00</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>
      </HStack>

      <HStack m={5}>
        <JobBarChart />
      </HStack>
    </>
  );
}
