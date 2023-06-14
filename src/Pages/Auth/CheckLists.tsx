import { AddIcon } from "@chakra-ui/icons";
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
  Input,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  AbsoluteCenter,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";

import { CheckListModule, JobTypesList } from "../../models";
import { DataStore } from "aws-amplify";

const CheckLists = () => {
  const [jobTypeList, setJobTypeLists] = useState<JobTypesList[]>([]);
  const [checklists, setCheckLists] = useState<CheckListModule[]>();
  const [createChecklist, setChecklist] = useState({
    title: "",
    visibleOn: "",
    jobType: "",
    mandatory: false,
  });
  const handleCreate = (event: FormEvent) => {
    event.preventDefault();
    console.log(createChecklist);
    onClose();

    setChecklist({
      title: "",
      jobType: "",
      visibleOn: "",
      mandatory: false,
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  // get CLients
  useEffect(() => {
    /**
     * This keeps `post` fresh.
     */
    const sub = DataStore.observeQuery(CheckListModule).subscribe(
      ({ items }) => {
        //console.log(items);

        setCheckLists(items);
      }
    );

    return () => {
      sub.unsubscribe();
    };
  }, []);

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
            Check Lists
          </Heading>
          <Spacer />

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
            Create Check List{" "}
          </Button>
        </Flex>

        <Tabs w={"full"}>
          <TabList>
            <Tab>Checklist </Tab>
            <Tab>Archived Checklist </Tab>
          </TabList>
          <Flex w={"full"} direction={"row"}>
            {/* <Heading size={"lg"} w={"full"} py={10} textAlign={"left"}>
            Jobs List
          </Heading> */}
            <Spacer />
            {/* <Button mt={5} onClick={() => {}} variant={'outline'} size={'xs'} colorScheme="blue" color={"#294c58"}>
         Export
          </Button> */}
          </Flex>
          <TabPanels pt={5} h={"50vh"}>
            <TabPanel>
              <TableContainer borderRadius={"xl"}>
                <Card p={0} borderRadius={""} variant={"outline"}>
                  <Table variant="simple" size="md">
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead rounded={"xl"}>
                      <Tr>
                        <Th>Title</Th>
                        <Th>Visible on</Th>
                        <Th>Job Types</Th>
                        <Th>Mandatory</Th>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {checklists &&
                        checklists!.map((item, index) => (
                          <Tr key={item.id}>
                            <Td>{item.name ?? "00" + index}</Td>
                            <Td>{item.visibleOn ?? ""}</Td>
                            <Td>{item.JobTypes ?? ""}</Td>
                            <Td>{item.isReq ?? ""}</Td>
                            <Td></Td>
                            <Td> </Td>
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
                  Create CheckList
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Title</FormLabel>
                  <Input
                    className="FormControl"
                    placeholder=""
                    value={createChecklist.title}
                    onChange={(e) =>
                      setChecklist({
                        ...createChecklist,
                        title: e.target.value,
                      })
                    }
                    required
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Visible On</FormLabel>
                  <Select
                    value={createChecklist.visibleOn}
                    onChange={(e) =>
                      setChecklist({
                        ...createChecklist,
                        visibleOn: e.target.value,
                      })
                    }
                  >
                    <option></option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                  </Select>
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel>Job Types</FormLabel>
                  <Select
                    value={createChecklist.jobType}
                    onChange={(e) =>
                      setChecklist({
                        ...createChecklist,
                        jobType: e.target.value,
                      })
                    }
                  >
                    <option></option>
                    {jobTypeList.map((option) => (
                      <option key={option.id} value={option.name ?? ""}>
                        {option.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl pb={5} w={"lg"} display="flex" alignItems="center">
                  <Checkbox
                    size="lg"
                    colorScheme="green"
                    checked={createChecklist.mandatory}
                    onChange={(e) =>
                      setChecklist({
                        ...createChecklist,
                        mandatory: e.target.checked,
                      })
                    }
                  />
                  <FormLabel mb="0" ml="10px">
                    Mandatory
                  </FormLabel>
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

export default CheckLists;
