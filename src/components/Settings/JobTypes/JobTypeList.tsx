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
  AlertDialogFooter,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { JobTypesList } from "../../../models";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import useJobType from "../../../hooks/Settings/JobType/useJobType";
import useCreateJobType from "../../../hooks/Settings/JobType/useCreateJobType";
import useJobTypeMutation from "../../../hooks/Settings/JobType/useJobTypeMutation";
import SubTypeRemoval from "./SubTypeRemoval";
const JobTypeList = () => {
  // get jobTypeList
  const { data: jobTypeList } = useJobType();

  //create
  const createJobTypeQuery = useCreateJobType(() => {
    createModal.onClose();
  });
  const [createJobType, setCreateJobType] = useState<JobTypesList>(
    {} as JobTypesList
  );

  const createModal = useDisclosure();
  const handleCreate = () => {
    createJobTypeQuery.mutate(createJobType);
    setCreateJobType({} as JobTypesList);
  };

  const handleAddSubType = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      const newSubType = event.currentTarget.value.trim();
      if (newSubType) {
        setCreateJobType((prevJobType) => ({
          ...prevJobType,
          subTypeList: [...(prevJobType.subTypeList || []), newSubType],
        }));
        event.currentTarget.value = ""; // Clear the input value after adding
      }
    }
  };

  const handleRemoveSubType = (index: number) => {
    setCreateJobType((prevJobType) => {
      const updatedSubTypeList = [...(prevJobType.subTypeList || [])];
      updatedSubTypeList.splice(index, 1);

      return {
        ...prevJobType,
        subTypeList: updatedSubTypeList,
      };
    });
  };

  //update
  const updateModal = useDisclosure();
  const [editJobType, setEditJobType] = useState<JobTypesList>(
    {} as JobTypesList
  );

  const updateJobType = useJobTypeMutation(() => {
    updateModal.onClose();
  }, true);

  const handleRemoveSubType2 = (index: number) => {
    setEditJobType((prevJobType) => {
      const updatedSubTypeList = [...(prevJobType.subTypeList || [])];
      updatedSubTypeList.splice(index, 1);

      return {
        ...prevJobType,
        subTypeList: updatedSubTypeList,
      };
    });
  };

  const handleUpdateSubType = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      const newSubType = event.currentTarget.value.trim();
      if (newSubType) {
        setEditJobType((prevJobType) => ({
          ...prevJobType,
          subTypeList: [...(prevJobType.subTypeList || []), newSubType],
          newSubType: "",
        }));
        event.currentTarget.value = ""; // Clear the input value after adding
      }
    }
  };

  //delete
  const deleteModal = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [deleteJobTypeId, setDeleteJobTypeId] = useState("");

  const deleteJobType = useJobTypeMutation(() => {
    deleteModal.onClose();
  }, false);

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
            JobType List
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
            Add Job Type
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
                        <Th>Name</Th>
                        <Th>Associated job subtypes</Th>

                        <Th>Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {jobTypeList &&
                        jobTypeList.map((jobtype) => (
                          <Tr key={jobtype.id}>
                            <Td>{jobtype.name}</Td>
                            <Td>{jobtype.subTypeList?.join(", ")}</Td>
                            <Td>
                              <IconButton
                                aria-label="Search database"
                                icon={<EditIcon />}
                                onClick={() => {
                                  setEditJobType({
                                    ...editJobType,
                                    id: jobtype.id!,
                                    name: jobtype.name!,
                                    subTypeList:
                                      jobtype.subTypeList!.length > 0
                                        ? (jobtype.subTypeList as string[])
                                        : [],
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
                                icon={<DeleteIcon />}
                                onClick={() => {
                                  setDeleteJobTypeId(jobtype.id);
                                  deleteModal.onOpen();
                                  // setEditJobType({
                                  //   ...editJobType,
                                  //   id: jobtype.id!,
                                  // });
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

      <Drawer
        onClose={createModal.onClose}
        isOpen={createModal.isOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          {/* <DrawerHeader>Create JobType</DrawerHeader> */}

          <DrawerBody>
            <AbsoluteCenter>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCreate();
                }}
              >
                <Heading my={5} size={"md"}>
                  Create JobType
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    value={createJobType?.name || ""}
                    onChange={(e) =>
                      setCreateJobType({
                        ...createJobType,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </FormControl>

                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Associated Job SubTypes</FormLabel>
                  <SubTypeRemoval
                    subTypeList={createJobType.subTypeList || []}
                    onRemoveSubType={handleRemoveSubType}
                  />

                  <Input
                    className="FormControl"
                    placeholder="Click Enter to add more than one subtype"
                    onKeyDown={(e) => handleAddSubType(e)}
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

      {/* Edit Modal  */}
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
                  const updatedJobType: JobTypesList = {
                    ...editJobType,
                    isActive: true,
                  };
                  updateJobType.mutate(updatedJobType);
                }}
              >
                <Heading my={5} size={"md"}>
                  Update JobType
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    value={editJobType?.name || ""}
                    onChange={(e) =>
                      setEditJobType({
                        ...editJobType,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </FormControl>

                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Associated Job SubTypes</FormLabel>
                  <SubTypeRemoval
                    subTypeList={editJobType.subTypeList || []}
                    onRemoveSubType={handleRemoveSubType2}
                  />
                  <Input
                    className="FormControl"
                    placeholder="Click Enter to add more than one subtype"
                    onChange={(e) =>
                      setEditJobType((prevJobType) => ({
                        ...prevJobType,
                        newSubType: e.target.value,
                      }))
                    }
                    onKeyDown={(e) => handleUpdateSubType(e)}
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
                deleteJobType.mutate(deleteJobTypeId);
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

export default JobTypeList;
