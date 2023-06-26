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

const ChangePassword = () => {
  return (
    <Flex direction="column">
      <HStack mb={8}>
        <Heading color="#1396ab" fontSize="lg">
          Change Password
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
          Change Password
        </Button>
      </HStack>

      <VStack>
        <Box>
          <SettingRow
            label="PASSWORD"
            value="Last change date: 15/12/2022 14:08"
          />
        </Box>
      </VStack>
    </Flex>
  );
};

export default ChangePassword;
