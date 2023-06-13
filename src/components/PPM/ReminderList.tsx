import { AddIcon } from "@chakra-ui/icons";
import {
  Tabs,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Card,
  Spacer,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface Reminder {
  id: number;
  client: string;
  contractReference: string;
  jobID: number;
  reminderDate: string;
  engineer: string;
  reminderDetails: string;
  isSeen: boolean;
}

const ReminderMockList = [
  {
    id: 1,
    client: "client1",
    contractReference: "100",
    jobID: 1,
    reminderDate: "10/10/2010",
    engineer: "eng1",
    reminderDetails: "test details",
    isSeen: false,
  },
  {
    id: 2,
    client: "client2",
    contractReference: "200",
    jobID: 2,
    reminderDate: "10/10/2020",
    engineer: "eng2",
    reminderDetails: "test details2",
    isSeen: false,
  },
];

const ReminderList = () => {
  const [reminderList, setReminderList] = useState<Reminder[]>([]);
  const [seenReminderList, setSeenReminderList] = useState<Reminder[]>([]);
  const [isSeenUpdated, setIsSeenUpdated] = useState(false);

  useEffect(() => {
    setReminderList(ReminderMockList);
  }, []);

  const handleCheckboxChange = (reminderId: number) => {
    setReminderList((prevList) =>
      prevList.map((reminder) =>
        reminder.id === reminderId
          ? { ...reminder, isSeen: !reminder.isSeen }
          : reminder
      )
    );
    setIsSeenUpdated(true);
  };

  const handleMarkSeenClick = () => {
    if (isSeenUpdated) {
      setSeenReminderList((prevList) =>
        prevList.concat(reminderList.filter((reminder) => reminder.isSeen))
      );
      setIsSeenUpdated(false);
    }
    setReminderList((prevList) =>
      prevList.filter((reminder) => !reminder.isSeen)
    );
  };

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        maxW="7xl"
        mx="auto"
        px="5"
        w="full"
      >
        <Tabs w="full">
          <Flex w="full" direction="row">
            <Heading size="lg" w="full" py={5} mt={-5} textAlign="left">
              Reminders List
            </Heading>
            <Spacer />
            <Button
              onClick={handleMarkSeenClick}
              leftIcon={<AddIcon />}
              my={10}
              px={10}
              py={5}
              colorScheme="yellow"
              variant="solid"
              size="sm"
            >
              MARK SEEN
            </Button>
          </Flex>
          <TableContainer borderRadius="xl">
            <Card p={0} borderRadius="" variant="outline">
              <Table variant="simple">
                <Thead bg="gray.100" rounded="xl">
                  <Tr>
                    <Th>Client</Th>
                    <Th>Contract Reference</Th>
                    <Th>Job ID</Th>
                    <Th>Reminder Date</Th>
                    <Th>Engineer</Th>
                    <Th>Reminder Details</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {reminderList &&
                    reminderList.map((reminder) => (
                      <Tr key={reminder.id}>
                        <Td>{reminder.client}</Td>

                        <Td>
                          <NavLink
                            to={`/contracts/editContract/${reminder.id}`}
                          >
                            {reminder.contractReference}
                          </NavLink>
                        </Td>
                        <Td>{reminder.jobID}</Td>
                        <Td>{reminder.reminderDate}</Td>
                        <Td>{reminder.engineer}</Td>
                        <Td>{reminder.reminderDetails}</Td>
                        <Checkbox
                          ml={8}
                          mt={5}
                          isChecked={reminder.isSeen}
                          onChange={() => handleCheckboxChange(reminder.id)}
                        >
                          {reminder.isSeen}
                        </Checkbox>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </Card>
          </TableContainer>

          <Flex w="full" direction="row">
            <Heading size="lg" w="full" py={5} mt={5} textAlign="left">
              Seen Reminders List
            </Heading>
            <Spacer />
          </Flex>
          <TableContainer borderRadius="xl">
            <Card p={0} borderRadius="" variant="outline">
              <Table variant="simple">
                <Thead bg="gray.100" rounded="xl">
                  <Tr>
                    <Th>Client</Th>
                    <Th>Contract Reference</Th>
                    <Th>Job ID</Th>
                    <Th>Reminder Date</Th>
                    <Th>Engineer</Th>
                    <Th>Reminder Details</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {seenReminderList &&
                    seenReminderList.map((reminder) => (
                      <Tr key={reminder.id}>
                        <Td>{reminder.client}</Td>
                        <Td>{reminder.contractReference}</Td>
                        <Td>{reminder.jobID}</Td>
                        <Td>{reminder.reminderDate}</Td>
                        <Td>{reminder.engineer}</Td>
                        <Td>{reminder.reminderDetails}</Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </Card>
          </TableContainer>
        </Tabs>
      </Flex>
    </>
  );
};

export default ReminderList;
