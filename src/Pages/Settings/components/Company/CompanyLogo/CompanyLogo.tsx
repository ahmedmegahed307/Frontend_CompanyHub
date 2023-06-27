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

const CompanyLogo = () => {
  return (
    <Flex direction="column">
      <HStack mb={8}>
        <Heading color="#1396ab" fontSize="lg">
          Company Logo
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
          Update Company Logo
        </Button>
      </HStack>

      <VStack>
        <Box>
          <SettingRow label="PHOTO" value="No Photo" />
        </Box>
      </VStack>
    </Flex>
  );
};

export default CompanyLogo;
