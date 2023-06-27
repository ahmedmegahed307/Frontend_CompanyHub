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
import { UsersObject } from "../../../../models";

type UsersListProps = {
  usersList: UsersObject[] | undefined;
  setDeleteUserId: (id: string) => void;
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
                        <Td>{user.name}</Td>
                        <Td>{user?.email}</Td>
                        <Td>
                          {user.adresses && user.adresses![0]?.contactName}
                        </Td>
                        <Td>{user.adresses && user.adresses![0]?.tel}</Td>
                        <Td>{user.type}</Td>
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
