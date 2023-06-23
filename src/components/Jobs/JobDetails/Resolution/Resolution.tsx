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

const Resolution = () => {
  return (
    <Flex direction="column">
      <HStack mb={8}>
        <Heading color="#1396ab" fontSize="lg">
          Job 115 - Resolution
        </Heading>
        <Spacer />
      </HStack>
      <VStack>
        <Box>
          <SettingRow label="Resolution Date" value="21/08/2022 19:04:33" />
          <SettingRow
            label="Resolution"
            value="Done, unit installed properly"
          />
        </Box>
      </VStack>
    </Flex>
  );
};

export default Resolution;
