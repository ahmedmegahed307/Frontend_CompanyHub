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

const CompanyDetails = () => {
  return (
    <Flex direction="column">
      <HStack mb={8}>
        <Heading color="#1396ab" fontSize="lg">
          Company Details
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
          Edit company details
        </Button>
      </HStack>

      <VStack>
        <Box>
          <SettingRow label="COMPANY NAME" value="UK Field Service" />
          <SettingRow label="SUPPORT EMAIL" value="ahmednassef35@gmail.com" />
          <SettingRow label="PHONE" value="0902010203040" />
          <SettingRow label="FAX" value="202020" />
          <SettingRow label="SEND POST WORK SURVEY" value="Yes" />
          <SettingRow label="SIGNATURES REQUIRED" value="Yes" />
          <SettingRow label="RESOLUTIONS REQUIRED" value="No" />
          <SettingRow label="COMPANY WEBSITE" value="www.google.com" />
          <SettingRow label="CLIENT PORTAL" value="www.google.com" />
          <SettingRow label="PRIMARY INDUSTRY" value="HVAC" />
          <SettingRow label="TERMS & CONDITIONS" value="" />
        </Box>
      </VStack>
    </Flex>
  );
};

export default CompanyDetails;
