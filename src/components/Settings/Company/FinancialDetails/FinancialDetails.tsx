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

const FinancialDetails = () => {
  return (
    <Flex direction="column">
      <HStack mb={8}>
        <Heading color="#1396ab" fontSize="lg">
          Financial Details
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
          Edit company financial details
        </Button>
      </HStack>

      <VStack>
        <Box>
          <SettingRow label="VAT NUMBER" value="Your VAT number" />
          <SettingRow label="PAYMENT TERM" value="Net 7" />
          <SettingRow label="CURRENCY" value="GBP" />
          <SettingRow label="TAXABLE" value="No" />
          <SettingRow
            label="NORMAL WORKING HOURS"
            value="Friday: 09:00:00 - 17:30:00"
          />
          <SettingRow label="NORMAL HOURLY RATES" value="0.00" />
          <SettingRow
            label="OVERTIME (X1,5) WORKING HOURS"
            value="00:00:00 - 00:00:00"
          />
          <SettingRow label="OVERTIME (X1,5) HOURLY RATES" value="0.00" />
          <SettingRow
            label="OVERTIME (X2) WORKING HOURS"
            value="00:00:00 - 00:00:00"
          />
          <SettingRow label="OVERTIME (X2) HOURLY RATES" value="0.00" />
        </Box>
      </VStack>
    </Flex>
  );
};

export default FinancialDetails;
