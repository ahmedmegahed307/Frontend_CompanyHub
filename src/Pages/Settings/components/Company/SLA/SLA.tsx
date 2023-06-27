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

const SLA = () => {
  return (
    <Flex direction="column">
      <HStack mb={8}>
        <Heading color="#1396ab" fontSize="lg">
          SLA Settings
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
          Edit SLA settings
        </Button>
      </HStack>

      <VStack>
        <Box>
          <SettingRow label="Priority" value="Unregistered Client Request" />
          <SettingRow label="SLA TIME" value="12:00:00" />
          <SettingRow label="SLA TYPE" value="daily" />
        </Box>
      </VStack>
    </Flex>
  );
};

export default SLA;
