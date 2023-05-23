import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Card,
  Spacer,
  Button,
  Box,
  Input,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  AbsoluteCenter,
  FormControl,
  FormLabel,
  Select,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { JobTypesList } from "../../models";
import { NavLink } from "react-router-dom";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

const JobTypeList = () => {
  const [jobTypeList, setJobTypeLists] = useState<JobTypesList[]>([]);
  const [createJobType, setCreateJobType] = useState({
    name: "",
    subTypeList: [] as string[],
    newSubType: "",
  });

  const handleCreate = (event: FormEvent) => {
    event.preventDefault();
    console.log(createJobType);
    onClose();

    setCreateJobType({ name: "", subTypeList: [], newSubType: "" });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const lists = DataStore.observeQuery(JobTypesList).subscribe(
      ({ items }) => {
        setJobTypeLists(items);
      }
    );

    return () => {
      lists.unsubscribe();
    };
  }, []);

  const handleAddSubType = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && createJobType.newSubType) {
      event.preventDefault(); // Prevent form submission
      setCreateJobType((prevJobType) => ({
        ...prevJobType,
        subTypeList: [...prevJobType.subTypeList, prevJobType.newSubType],
        newSubType: "",
      }));
    }
  };

  const handleRemoveSubType = (index: number) => {
    setCreateJobType((prevJobType) => {
      const updatedSubTypeList = [...prevJobType.subTypeList];
      updatedSubTypeList.splice(index, 1);

      return {
        ...prevJobType,
        subTypeList: updatedSubTypeList,
      };
    });
  };

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
          <Heading size={"lg"} w={"full"} py={10} textAlign={"left"}>
            JobType List
          </Heading>
          <Spacer />
          {/* <Button my={10} onClick={() => {}} colorScheme="blue" size={'sm'} variant={'outline'}  color={"#294c58"}>
            New Order
          </Button> */}

          <Button
            onClick={() => {
              onOpen();
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
                            <Td>{jobtype.subTypeList}</Td>
                            <Td>
                              <IconButton
                                aria-label="Search database"
                                as={NavLink}
                                icon={<EditIcon />}
                                onClick={() => {}}
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
                                onClick={() => {}}
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

      <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>Create JobType</DrawerHeader>

          <DrawerBody>
            <form onSubmit={handleCreate}>
              <Heading my={5} size={"md"}>
                Create JobType
              </Heading>
              <FormControl pb={5} w={"lg"}>
                <FormLabel>Name</FormLabel>
                <Input
                  className="FormControl"
                  placeholder=""
                  value={createJobType.name}
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
                <Flex wrap="wrap">
                  {createJobType.subTypeList.map((subType, index) => (
                    <Tag
                      key={index}
                      borderRadius="full"
                      variant="solid"
                      colorScheme="blue"
                      mr={2}
                      mb={2}
                    >
                      <TagLabel>{subType}</TagLabel>
                      <TagCloseButton
                        onClick={() => handleRemoveSubType(index)}
                      />
                    </Tag>
                  ))}
                </Flex>
                <Input
                  className="FormControl"
                  placeholder="Click Enter to add more than one subtype"
                  value={createJobType.newSubType}
                  onChange={(e) =>
                    setCreateJobType({
                      ...createJobType,
                      newSubType: e.target.value,
                    })
                  }
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default JobTypeList;
