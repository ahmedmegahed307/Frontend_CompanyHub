import { HStack } from "@chakra-ui/react";
import EngineerSelect from "./EngineerSelect";
import ClientSelect from "./ClientSelect";
import EventSelect from "./EventSelect";
const CalendarSelectLists: React.FC = () => {
  return (
    <HStack marginTop={10} marginLeft={10}>
      <EngineerSelect />
      <ClientSelect />
      <EventSelect />
    </HStack>
  );
};

export default CalendarSelectLists;
