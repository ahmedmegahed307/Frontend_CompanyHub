import {
  Flex,
  Heading,
  VStack,
  Box,
  Button,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import SettingRow from "../RowSetting";

const UserAddress = () => {
  return (
    <Flex direction="column">
      <HStack mb={8}>
        <Heading color="#1396ab" fontSize="lg">
          User Address
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
          Edit User Address
        </Button>
      </HStack>

      <VStack>
        <Box>
          <SettingRow label="ADDRESS LINE 1" value="Egypt" />
          <SettingRow label="ADDRESS LINE 2" value="Cairo" />
          <SettingRow label="ADDRESS LINE 3" value="Pyramids" />
          <SettingRow label="ADDRESS LINE 4" value="ADDRESS LINE 4" />
          <SettingRow label="COUNTRY" value="Ireland" />
          <SettingRow label="CITY" value="Dublin" />
          <SettingRow label="POSTCODE" value="2010" />
        </Box>
      </VStack>
    </Flex>
  );
};

export default UserAddress;
