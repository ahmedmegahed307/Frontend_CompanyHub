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
  DrawerBody,
  AbsoluteCenter,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Resolutions } from "../../models";
import { NavLink } from "react-router-dom";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
const StandardResolutionList = () => {
  const [resolutionList, setResolutionLists] = useState<Resolutions[]>();
  const [createResolution, setResolution] = useState({
    name: "",
  });

  const handleCreate = (event: FormEvent) => {
    event.preventDefault();
    console.log(createResolution);
    onClose();

    setResolution({ name: "" });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const lists = DataStore.observeQuery(Resolutions).subscribe(({ items }) => {
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
    </>
  );
};

export default StandardResolutionList;
