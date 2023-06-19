import {
  Tabs,
  TabPanels,
  TabPanel,
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
  Button,
  Input,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  AbsoluteCenter,
  FormControl,
  FormLabel,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import useCreateResolution from "../../../hooks/Settings/Resolution/useCreateResolution";
import useResolution from "../../../hooks/Settings/Resolution/useResolution";
import useResolutionMutation from "../../../hooks/Settings/Resolution/useResolutionMutation";
import { Resolutions } from "../../../models";

const StandardResolutionList = () => {
  // get resolutionList
  const { data: resolutionList } = useResolution();

  //create
  const createResolution = useCreateResolution(() => {
    createModal.onClose();
  });
  const createRef = useRef<HTMLInputElement>(null);
  const createModal = useDisclosure();

  //update
  const updateResolution = useResolutionMutation(() => {
    updateModal.onClose();
  }, true);
  const updateModal = useDisclosure();
  const updateRef = useRef<HTMLInputElement>(null);
  const [updateResolutionInput, setUpdateResolutionInput] = useState("");
  const [updateResolutionId, setUpdateResolutionId] = useState("");

  //delete
  const deleteResolution = useResolutionMutation(() => {
    deleteModal.onClose();
  }, false);
  const [deleteResolutionId, setDeleteResolutionId] = useState("");
  const deleteModal = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Flex
        direction={"column"}
        alignItems="center"
        maxW="7xl"
        mx="auto"
        px="5"
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
            Standard Resolution List
          </Heading>
          <Spacer />

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
            Add Resolution
          </Button>
        </Flex>

        <Tabs w={"full"}>
          <Flex w={"full"} direction={"row"}></Flex>
          <TabPanels pt={5} h={"50vh"}>
            <TabPanel>
              <TableContainer borderRadius={"xl"}>
                <Card p={0} borderRadius={""} variant={"outline"}>
                  <Table variant="simple">
                    <Thead bg={"gray.100"} rounded={"xl"}>
                      <Tr>
                        <Th>Resolution</Th>

                        <Th>Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {resolutionList &&
                        resolutionList.map((resolution) => (
                          <Tr key={resolution.id}>
                            <Td>{resolution.name}</Td>

                            <Td>
                              <IconButton
                                aria-label="Search database"
                                as={NavLink}
                                icon={<EditIcon />}
                                onClick={() => {
                                  setUpdateResolutionInput(resolution.name);
                                  setUpdateResolutionId(resolution.id);
                                  updateModal.onOpen();
                                }}
                                colorScheme="blue"
                                variant={"solid"}
                                size={"sm"}
                                bg={"#294c58"}
                                m={1}
                              />
                              <IconButton
                                aria-label="Search database"
                                as={NavLink}
                                icon={<DeleteIcon />}
                                onClick={() => {
                                  setDeleteResolutionId(resolution.id);
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
      </Flex>
      {/* create */}
      <Drawer
        onClose={createModal.onClose}
        isOpen={createModal.isOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <AbsoluteCenter>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  createResolution.mutate({
                    name: createRef.current?.value || "",
                    isActive: true,
                  } as Resolutions);
                }}
              >
                <Heading my={5} size={"md"}>
                  Create Resolution
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    ref={createRef}
                    required
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  w={"full"}
                  bg={"#294c58"}
                  my={10}
                >
                  Create
                </Button>
              </form>
            </AbsoluteCenter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Update modal  */}

      <Drawer
        onClose={updateModal.onClose}
        isOpen={updateModal.isOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <AbsoluteCenter>
              <form
                onSubmit={(event) => {
                  event.preventDefault();

                  updateResolution.mutate({
                    name: updateRef.current?.value || "",
                    id: updateResolutionId,
                    isActive: true,
                  } as Resolutions);
                }}
              >
                <Heading my={5} size={"md"}>
                  Update Resolution
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    ref={updateRef}
                    required
                    defaultValue={updateResolutionInput}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  w={"full"}
                  bg={"#294c58"}
                  my={10}
                >
                  Update
                </Button>
              </form>
            </AbsoluteCenter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* Delete Modal  */}
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={deleteModal.onClose}
        isOpen={deleteModal.isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to discard all of your notes? 44 words will be
            deleted.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={deleteModal.onClose}>
              No
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                deleteResolution.mutate(deleteResolutionId);
              }}
              ml={3}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default StandardResolutionList;
