import React from "react";
import {
  Flex,
  Heading,
  VStack,
  Box,
  Text,
  Button,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import SettingRow from "../RowSetting";

const JobDetails = () => {
  return (
    <Flex direction="column">
      <HStack mb={8}>
        <Heading color="#1396ab" fontSize="lg">
          Job 115 - Pending: Low
        </Heading>
        <Spacer />
        <Button
          w={"auto"}
          colorScheme="blue"
          alignItems={"center"}
          variant={"solid"}
          size={"sm"}
          bg={"#1396ab"}
        >
          Notify Client
        </Button>
        <Button
          w={"auto"}
          colorScheme="blue"
          alignItems={"center"}
          variant={"solid"}
          size={"sm"}
          bg={"#1396ab"}
        >
          Client Chat
        </Button>
        <Button
          w={"auto"}
          colorScheme="blue"
          alignItems={"center"}
          variant={"solid"}
          size={"sm"}
          bg={"#1396ab"}
        >
          Client Jobs
        </Button>
        <Button
          w={"auto"}
          colorScheme="blue"
          alignItems={"center"}
          variant={"solid"}
          size={"sm"}
          bg={"#1396ab"}
        >
          Job History
        </Button>
      </HStack>
      <VStack>
        <Box>
          <SettingRow label="JOB TYPE" value="Installation" />
          <SettingRow label="JOB SUBTYBE" value="Freezer" />
          <SettingRow label="SCHEDULE DATE " value="24/05/2023 09:30:00" />
          <SettingRow label="EST.DURATION" value="00:45" />
          <SettingRow label="CONTACT" value="ClientCell" />
          <SettingRow label="ENGINEER" value="Ahmed Engineer" />
          <SettingRow label="JOB STATUS" value="Assigned" />
          <SettingRow label="PRIORITY" value="High" />
          <SettingRow label="NOTIFY CLIENT" value="False" />
          <SettingRow label="DESCRIPTION" value="Install the freezer" />
          <SettingRow
            label="INSTRUCTION"
            value="Install the freezer correctly"
          />
        </Box>
      </VStack>
      <HStack m={8}>
        <Heading color="#1396ab" fontSize="lg" ml={4}>
          Actions:
        </Heading>
        <Spacer />
        <Button
          w={"auto"}
          colorScheme="blue"
          alignItems={"center"}
          variant={"solid"}
          size={"sm"}
          bg={"#1396ab"}
        >
          Resolve Job
        </Button>
        <Button
          w={"auto"}
          colorScheme="blue"
          alignItems={"center"}
          variant={"solid"}
          size={"sm"}
          bg={"#1396ab"}
        >
          Edit Job
        </Button>
        <Button
          w={"auto"}
          colorScheme="blue"
          alignItems={"center"}
          variant={"solid"}
          size={"sm"}
          bg={"#1396ab"}
        >
          Cancel Job
        </Button>
        <Button
          w={"auto"}
          colorScheme="blue"
          alignItems={"center"}
          variant={"solid"}
          size={"sm"}
          bg={"#1396ab"}
        >
          Send Job Back As Open
        </Button>

        <Button
          w={"auto"}
          colorScheme="blue"
          alignItems={"center"}
          variant={"solid"}
          size={"sm"}
          bg={"#1396ab"}
        >
          Work Docket
        </Button>
        <Button
          w={"auto"}
          colorScheme="blue"
          alignItems={"center"}
          variant={"solid"}
          size={"sm"}
          bg={"#1396ab"}
        >
          Close Job
        </Button>
      </HStack>
    </Flex>
  );
};

export default JobDetails;
