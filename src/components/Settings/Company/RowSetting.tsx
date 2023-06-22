import { Box, Text } from "@chakra-ui/react";

interface SettingRowProps {
  label: string;
  value: string;
}

const SettingRow = ({ label, value }: SettingRowProps) => (
  <>
    <Box m={6}>
      <Box display="flex" mr={60}>
        <Text color="gray.500" mr={2} width="400px">
          {label}
        </Text>
        <Text>{value}</Text>
      </Box>
    </Box>
  </>
);
export default SettingRow;
