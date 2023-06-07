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
import { FormEvent, useEffect, useRef, useState } from "react";
import { DataStore } from "aws-amplify";
import { Resolutions } from "../../models";
import { NavLink } from "react-router-dom";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Swal from "sweetalert2";

const StandardResolutionList = () => {
  const [resolutionList, setResolutionLists] = useState<Resolutions[]>();
  const [createResolution, setResolution] = useState({
    name: "",
  });

  const [editResolution1, setEditResolution1] = useState({
    id: "",
    name: "",
    isActive: false,
  });

  const [editResolution, setEditResolution] = useState<Resolutions>(
    new Resolutions({ name: "" })
  );

  const handleCreate = async (event: FormEvent) => {
    event.preventDefault();

    try {
      console.log(createResolution);

      const post = await DataStore.save(
        new Resolutions({ isActive: true, name: createResolution.name })
      );

      Swal.fire({
        title: "Congratulations",
        text: "Resolutions have been saved successfully",
        icon: "success",
      });
      createModal.onClose();

      setResolution({ name: "" });
    } catch (error: any) {
      Swal.fire({
        title: "Oops",
        text: error,
        icon: "error",
      });
    }
  };

  const handleUpdate = async (event: FormEvent) => {
    event.preventDefault();

    try {
      console.log(editResolution);
      const original = await DataStore.query(Resolutions, editResolution1!.id);

      if (original) {
        const updatedPost = await DataStore.save(
          Resolutions.copyOf(original, (updated) => {
            (updated.name = editResolution1.name), updateModal.onClose();
            Swal.fire({
              title: "Congratulations",
              text: "Resolutions have been saved successfully",
              icon: "success",
            });
          })
        );
      }

      setResolution({ name: "" });
    } catch (error: any) {
      Swal.fire({
        title: "Oops",
        text: error,
        icon: "error",
      });
    }
  };

  const createModal = useDisclosure();
  const deleteModal = useDisclosure();
  const updateModal = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const lists = DataStore.observeQuery(Resolutions, (c) =>
      c.isActive.eq(true)
    ).subscribe(({ items }) => {
      setResolutionLists(items);
    });

    return () => {
      lists.unsubscribe();
    };
  }, []);

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
          <Heading size={"lg"} w={"full"} py={10} textAlign={"left"}>
            Standard Resolution List
          </Heading>
          <Spacer />
          {/* <Button my={10} onClick={() => {}} colorScheme="blue" size={'sm'} variant={'outline'}  color={"#294c58"}>
              New Order
            </Button> */}

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
                    <Thead bg={"black"} rounded={"xl"}>
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
                                  setEditResolution1({
                                    id: resolution.id,
                                    name: resolution.name,
                                    isActive: true,
                                  });
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
                                  setEditResolution(resolution);
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
              <form onSubmit={handleCreate}>
                <Heading my={5} size={"md"}>
                  Create Resolution
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    value={createResolution.name}
                    onChange={(e) =>
                      setResolution({
                        ...createResolution,
                        name: e.target.value,
                      })
                    }
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
              <form onSubmit={handleUpdate}>
                <Heading my={5} size={"md"}>
                  Update Resolution
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    value={editResolution1!.name}
                    onChange={(e) =>
                      setEditResolution1({
                        ...editResolution1!,
                        name: e.target.value,
                      })
                    }
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
              onClick={async () => {
                const original = await DataStore.query(
                  Resolutions,
                  editResolution!.id
                );

                if (original) {
                  const updatedPost = await DataStore.save(
                    Resolutions.copyOf(original, (updated) => {
                      updated.isActive = false;
                      deleteModal.onClose();
                    })
                  );
                }
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
