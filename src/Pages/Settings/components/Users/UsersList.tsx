import {
  Tabs,
  TabPanels,
  TabPanel,
  TableContainer,
  Card,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { User } from "../../../../services/UserService/user-service";

type UsersListProps = {
  usersList: User[] | undefined;
  setDeleteUserId: (id: number) => void;
  deleteModal: any;
};

const UsersList = ({
  usersList,
  setDeleteUserId,
  deleteModal,
}: UsersListProps) => {
  return (
    <Tabs w={"full"}>
      <TabPanels pt={5} h={"50vh"}>
        <TabPanel>
          <TableContainer borderRadius={"xl"}>
            <Card p={0} borderRadius={""} variant={"outline"}>
              <Table variant="simple">
                <Thead bg={"gray.100"} rounded={"xl"}>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Contact Name</Th>
                    <Th>Contact Phone</Th>
                    <Th>Role</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {usersList &&
                    usersList.map((user) => (
                      <Tr key={user.id}>
                        <Td>{user.firstName + " " + user.lastName}</Td>
                        <Td>{user?.email}</Td>
                        <Td>{user.roleName}</Td>
                        <Td>{user.id}</Td>
                        <Td>{user.roleName}</Td>
                        <Td>
                          <IconButton
                            aria-label="Search database"
                            as={NavLink}
                            icon={<DeleteIcon />}
                            onClick={() => {
                              setDeleteUserId(user.id);
                              deleteModal.onOpen();
                            }}
                            colorScheme="blue"
                            variant={"solid"}
                            size={"sm"}
                            bg={"#294c58"}
                          />
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </Card>
          </TableContainer>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default UsersList;
