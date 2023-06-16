import { Flex, HStack, Heading } from "@chakra-ui/react";

import JobsData from "./Jobs/JobsData";
import SLA from "./SLA/SLA";
import NewsList from "./News/NewsList";
export default function Operational() {
  return (
    <>
      <Flex direction={"column"} mx="auto" mt={5} px="4">
        <HStack justify={"space-between"}>
          <Heading color={"#1396ab"} size={"lg"}>
            Operational Dashboard
          </Heading>
        </HStack>
      </Flex>

      <HStack m={5} mb={10}>
        <JobsData />
      </HStack>

      <HStack m={5} spacing={5}>
        <SLA />
        <NewsList />
      </HStack>
    </>
  );
}
