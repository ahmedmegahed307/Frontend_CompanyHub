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
import { EditIcon } from "@chakra-ui/icons";
import SettingRow from "../RowSetting";

const UserDetails = () => {
  return (
    <Flex direction="column">
      <HStack mb={8}>
        <Heading color="#1396ab" fontSize="lg">
          User Details
        </Heading>
        <Spacer />
        <Button
          leftIcon={<EditIcon />}
          w={"auto"}
          colorScheme="blue"
          alignItems={"center"}
          variant={"solid"}
          size={"sm"}
          bg={"#1396ab"}
        >
          Edit User details
        </Button>
      </HStack>

      <VStack>
        <Box>
          <SettingRow label="INITIALS" value="AM" />
          <SettingRow label="FIRST NAME" value="AHMED " />
          <SettingRow label="MIDDLE NAME" value="AHMED" />
          <SettingRow label="LAST NAME" value="MUCAHIT" />
          <SettingRow label="EMAIL" value="ahmed.mucahit@afsgo.com" />
          <SettingRow label="PHONE" value="010101010202" />
          <SettingRow label="TIME ZONE" value="GMT Standard Time" />
          <SettingRow label="ROLE" value="Company Administrator" />
        </Box>
      </VStack>
    </Flex>
  );
};

export default UserDetails;
