import {
  Flex,
  Heading,
  Spacer,
  Button,
  useDisclosure,
  Drawer,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AddIcon } from "@chakra-ui/icons";
import useUser from "../../../hooks/Settings/User/useUser";
import useCreateUserMutation from "../../../hooks/Settings/User/useCreateUser";
import DeleteModal from "./DeleteUser";
import UsersList from "./UsersList";
import CreateUser, { CreateUserValidation } from "./CreateUser";

const UsersMain = () => {
  // get usersLists
  const { data: usersList } = useUser();

  //create
  const createModal = useDisclosure();
  const createUserQuery = useCreateUserMutation(() => {
    createModal.onClose();
  });

  const handleCreateForm = (data: CreateUserValidation) => {
    console.log("my", data);
    createUserQuery.mutate(data);
  };

  //delete
  const deleteModal = useDisclosure();

  const [deleteUserId, setDeleteUserId] = useState("");

  return (
    <>
      <Flex
        direction={"column"}
        alignItems="center"
        maxW="7xl"
        mx="auto"
        px="4"
        w={"full"}
      >
        <Flex w={"full"} direction={"row"}>
          <Heading
            size={"lg"}
            w={"full"}
            py={10}
            textAlign={"left"}
            color={"#1396ab"}
          >
            Users List
          </Heading>
          <Spacer />

          <Button
            marginRight={2}
            as={NavLink}
            to="/settings/user/info"
            my={10}
            px={10}
            py={5}
            onClick={() => {}}
            colorScheme="blue"
            variant={"solid"}
            size={"sm"}
            bg={"#294c58"}
            leftIcon={<FaUser />}
          >
            My Profile
          </Button>
          <Button
            onClick={() => {
              createModal.onOpen();
            }}
            leftIcon={<AddIcon />}
            my={10}
            px={10}
            py={5}
            colorScheme="blue"
            variant={"solid"}
            size={"sm"}
            bg={"#294c58"}
          >
            Add User
          </Button>
        </Flex>

        <UsersList
          usersList={usersList}
          setDeleteUserId={setDeleteUserId}
          deleteModal={deleteModal}
        />
      </Flex>
      {/* Create Modal */}
      <Drawer
        onClose={createModal.onClose}
        isOpen={createModal.isOpen}
        size={"lg"}
      >
        <CreateUser onSubmit={handleCreateForm} />
      </Drawer>

      {/* Delete Modal  */}
      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
        userId={deleteUserId}
      />
    </>
  );
};

export default UsersMain;
