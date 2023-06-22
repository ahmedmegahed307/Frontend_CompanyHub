import {
  AbsoluteCenter,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Textarea,
  Flex,
  Heading,
  useDisclosure,
  Card,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { Auth, DataStore } from "aws-amplify";
import Geocode from "react-geocode";
import Swal from "sweetalert2";

import { useState, useEffect } from "react";
import {
  UsersObject,
  Address,
  JobTypesList,
  PartsList,
  Jobs,
  JobType,
} from "../../../models";
import GoogleMap from "../../Map/GoogleMap";
import { AddIcon } from "@chakra-ui/icons";
import { MdAdd, MdArrowBack, MdRemove } from "react-icons/md";
import { Temporal } from "@js-temporal/polyfill";
const steps = [
  { title: "Client", description: "Contact Info" },
  { title: "Job", description: "Date & Time" },
  { title: "Engineer", description: "Select Rooms" },
  { title: "Parts", description: "Select Rooms" },
  { title: "Review", description: "Select Rooms" },
];

const username: string = "bariqa@afsgo.com";
const password: string = "bariq1991";

async function signIn() {
  try {
    const user = await Auth.signIn(username, password);
    console.log(user);

    console.log("logIn done ..");
  } catch (error) {
    console.log("error signing in", error);
  }
}

const AddJob = () => {
  const [createClient, setCreateClient] = useState({
    id: "",
    name: "",
    code: "",
    financialContactName: "",
    financialContactEmail: "",
    siteType: "",
    currencyCode: "",
    vatRate: "",
    vatValue: "",
    vatNumber: "",
    newSubType: "",
  });

  const [createSite, setCreateSite] = useState<Address>();
  const handleCreate = async () => {
    try {
      console.log(createClient);

      var newUser = new UsersObject({
        name: createClient.name,
        // email: createClient.email,
        type: "client",

        financialContactEmail: createClient.financialContactEmail,
        financialContactName: createClient.financialContactName,
        currencyCode: createClient.currencyCode,
        siteType: createClient.siteType,
        vatRate: createClient.vatValue,
        vatNumber: createClient.vatNumber,
        vatValue: createClient.vatValue,
      });

      const post = await DataStore.save(newUser).then(async (res) => {
        createClientModal.onClose();

        const _clintList = await DataStore.query(UsersObject, (c) =>
          c.type.eq("client")
        );

        setSelectClientIndex(_clintList.length - 1);

        setClient(res);

        Swal.fire({
          title: "Congratulations",
          text: "Client have been Created successfully",
          icon: "success",
        }).then(() => {
          setModelSection("newClint");
          return createSiteModal.onOpen();
        });
      });

      // createModal.onClose();

      setCreateClient({
        id: "",
        name: "",
        code: "",
        financialContactName: "",
        financialContactEmail: "",
        siteType: "",
        currencyCode: "",
        vatRate: "",
        vatValue: "",
        vatNumber: "",
        newSubType: "",
      });
    } catch (error: any) {
      Swal.fire({
        title: "Oops",
        text: error,
        icon: "error",
      });
    }
  };

  const handleSiteCreate = async () => {
    try {
      // sites.push(site!);

      console.log("site created .. ");
      console.log(createSite);
      setClient({
        ...client!,
        adresses: [...(client!.adresses ?? []), createSite!],
      });

      const original = await DataStore.query(UsersObject, client!.id);
      console.log(original);
      if (original) {
        const updatedPost = await DataStore.save(
          UsersObject.copyOf(original, (updated) => {
            updated.adresses = client?.adresses;
          })
        ).then((e) => {
          console.log("site done");
          console.log(e);
          console.log(client);
          console.log(client?.adresses?.length ?? 0);
          setSelectSiteIndex(client?.adresses?.length ?? 0);
          createSiteModal.onClose();
          setClientSite(e);
          // setClientSite(
          //   e?.adresses![e?.adresses!.length -1] ?? client
          // );
          Swal.fire({
            title: "Congratulations",
            text: "Address have been added successfully",
            icon: "success",
          }).then(() => {
            console.log("dasdadada");

            console.log(client?.adresses);

            setCreateSite(new Address({}));

            return createSiteModal.onClose();
          });
        });
        console.log(updatedPost);
      }
    } catch (error: any) {
      Swal.fire({
        title: "Oops",
        text: error,
        icon: "error",
      });
    }
  };

  const handlePortCreate = async () => {
    try {
      // sites.push(site!);

      console.log("site created .. ");
      console.log(createPart);

      const post = await DataStore.save(
        new PartsList({
          code: createPart?.code,
          name: createPart?.name,
          cost: createPart?.cost,
        })
      ).then(async (_res) => {
        createPartModal.onClose();

        addPartModal.onClose();
        setjobPartsList([...jobPartsList, createPart!]);

        Swal.fire({
          title: "Congratulations",
          text: "Client have been Created successfully.",
          icon: "success",
        }).then(() => {});
      });
    } catch (error: any) {
      Swal.fire({
        title: "Oops..",
        text: error,
        icon: "error",
      });
    }
  };
  // signIn();
  console.log("start");
  Geocode.setApiKey("AIzaSyCI2PFz1BE74zQa13ssmP1A0DDEmlOXOGQ");

  // console.log(
  //   Geocode.fromAddress("Çamlık, Sevin Sokağı No:2-14, 34774 Ümraniye/İstanbul")
  // );
  console.log("End");
  Geocode.fromAddress(
    "Çamlık, Sevin Sokağı No:2-14, 34774 Ümraniye/İstanbul"
  ).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const [modelSection, setModelSection] = useState<String>("newClint");

  const [client, setClient] = useState<UsersObject>();
  const [site, setClientSite] = useState<Address>();

  const [clientsList, setClientList] = useState<UsersObject[]>();
  const [engineersList, setEngineersList] = useState<UsersObject[]>();
  const [jobTypeList, setJobTypeList] = useState<JobTypesList[]>();
  const [engineer, setEngineer] = useState<UsersObject>();
  const [jobType, setJobType] = useState<JobTypesList>();
  const [partsList, setPartsList] = useState<PartsList[]>();
  const [jobPartsList, setjobPartsList] = useState<PartsList[]>([]);
  const [jobSubType, setJobSubType] = useState<string>();
  const [priority, setPriority] = useState<string>();
  const [duration, setDuration] = useState<string>();
  const [schedule, setSchedule] = useState<Date>();
  const [desc, setDesc] = useState<string>();
  const [instruction, setInstruction] = useState<string>();
  const [createPart, setCreatePart] = useState<PartsList>();

  //select Index
  const [selectClientIndex, setSelectClientIndex] = useState<number>();
  const [selectSiteIndex, setSelectSiteIndex] = useState<number>();

  // get CLients
  useEffect(() => {
    /**
     * This keeps `post` fresh.
     */
    const sub = DataStore.observeQuery(UsersObject, (c) =>
      c.type.eq("client")
    ).subscribe(({ items }) => {
      console.log(items);
      console.log("items lenght");
      console.log(items.length);

      setClientList(items);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  // get Engineers
  useEffect(() => {
    console.log("start 333 ");
    try {
      /**
       * This keeps `post` fresh.
       */
      console.log("start start1 ");

      const sub = DataStore.observeQuery(UsersObject, (c) =>
        c.type.eq("engineer")
      ).subscribe(({ items }) => {
        console.log(items);
        console.log("start adasd ");

        setEngineersList(items);
        return () => {
          sub.unsubscribe();
        };
      });
    } catch (error) {
      console.log("start adasd ");

      console.log("errorr .. ");
      console.log(error);
      return console.log(error);
    }
  }, []);

  // get job Types
  useEffect(() => {
    /**
     * This keeps `post` fresh.
     */
    const sub = DataStore.observeQuery(JobTypesList).subscribe(({ items }) => {
      console.log(items);

      setJobTypeList(items);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  // get parts List
  useEffect(() => {
    /**
     * This keeps `post` fresh.
     */
    const sub = DataStore.observeQuery(PartsList).subscribe(({ items }) => {
      console.log(items);

      setPartsList(items);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  // new Client

  const createClientModal = useDisclosure();
  const createSiteModal = useDisclosure();
  const addPartModal = useDisclosure();
  const createPartModal = useDisclosure();

  /**
   * Create a new Post
   */
  async function onCreate() {
    console.log("xxx");
    console.log(
      new Jobs({
        usersID: "738dff20-24be-4d12-9cbc-96187442cc1c",
        type: new JobType({ name: jobType?.name, subType: jobSubType }),
        proirty: priority,
        enginer: [engineer?.id!],
        status: engineer?.id! ? "ASSIGENED" : "OPEN",
        schadule: Temporal.Instant.from(schedule!.toISOString()).toString(),
        estDuration: duration,
        disc: desc,
        notifyClint: false,
        getBill: false,
        Instruction: instruction,
        adress: site,
      })
    );
    const post = await DataStore.save(
      new Jobs({
        usersID: "738dff20-24be-4d12-9cbc-96187442cc1c",
        type: new JobType({ name: jobType?.name, subType: jobSubType }),
        proirty: priority,
        enginer: [engineer?.id!],
        status: engineer?.id! ? "ASSIGENED" : "OPEN",
        schadule: Temporal.Instant.from(schedule!.toISOString()).toString(),
        estDuration: duration,
        disc: desc,
        notifyClint: false,
        getBill: false,
        Instruction: instruction,
        adress: site,
      })
    );
  }

  return (
    <>
      <Box w={"full"} borderColor="gray.200" py={10}>
        <Flex direction={"column"} maxW="7xl" mx="auto" px="4">
          <Heading size={"lg"} color={"#1396ab"}>
            Create New Job{" "}
          </Heading>

          <HStack my={10}>
            <Heading mr={10} size={"md"}>
              Client{" "}
            </Heading>

            <Divider />
          </HStack>

          <VStack align={"start"} spacing={8} m={5}>
            <FormControl w={"lg"}>
              <FormLabel>Client</FormLabel>

              <HStack>
                <Select
                  value={selectClientIndex}
                  onChange={(e) => {
                    setClient(clientsList![parseInt(e.target.value)]);
                  }}
                  variant="outline"
                  placeholder="Choose the Client that ypu need to create job for
                      "
                >
                  {clientsList &&
                    clientsList!.map((item, index) => (
                      <option value={index} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                </Select>
                <IconButton
                  onClick={() => {
                    createClientModal.onOpen();
                  }}
                  variant={"outline"}
                  aria-label="Search database"
                  icon={<MdAdd />}
                />
              </HStack>
            </FormControl>
            <FormControl w={"lg"}>
              <FormLabel>Site</FormLabel>
              <HStack>
                {" "}
                <Select
                  onChange={(e) =>
                    setClientSite(
                      client?.adresses![parseInt(e.target.value)] ?? client
                    )
                  }
                  value={selectSiteIndex}
                  variant="outline"
                  placeholder="Choose the client site(Address)"
                >
                  {client &&
                    client.adresses &&
                    client.adresses!.map((item, index) => (
                      <option value={index} key={item?.name}>
                        {item!.name}
                      </option>
                    ))}
                </Select>{" "}
                <IconButton
                  onClick={() => {
                    createSiteModal.onOpen();
                  }}
                  aria-label="Search database"
                  variant={"outline"}
                  icon={<MdAdd />}
                />
              </HStack>
            </FormControl>
          </VStack>
          <HStack>
            <Heading size={"md"} m={5}>
              Job{" "}
            </Heading>
            <Divider m={5} />
          </HStack>

          <VStack align={"start"} spacing={8} m={5}>
            <FormControl w={"lg"}>
              <FormLabel>Job Type</FormLabel>
              <Select
                onChange={(e) =>
                  setJobType(jobTypeList![parseInt(e.target.value)])
                }
                variant="outline"
                placeholder="Select the job type"
              >
                {jobTypeList &&
                  jobTypeList!.map((item, index) => (
                    <option value={index} key={item.id}>
                      {item.name}
                    </option>
                  ))}
              </Select>{" "}
            </FormControl>
            <FormControl w={"lg"}>
              <FormLabel>Sub Type</FormLabel>
              <Select
                onChange={(e) => setJobSubType(e.target.value)}
                variant="outline"
                placeholder="Select the job sub-type"
              >
                {jobType &&
                  jobType.subTypeList!.map((item, _index) => (
                    <option value={item ?? 0} key={item}>
                      {item}
                    </option>
                  ))}
              </Select>
            </FormControl>
            <FormControl w={"lg"}>
              <FormLabel>Priority</FormLabel>
              <Select
                onChange={(e) => setPriority(e.target.value)}
                variant="outline"
                placeholder="Select the job priority"
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="hight">Hight</option>
              </Select>
            </FormControl>

            <FormControl w={"lg"}>
              <FormLabel> Description</FormLabel>
              <Textarea className="FormControl" placeholder="" />
            </FormControl>
            <FormControl w={"lg"}>
              <FormLabel> Instruction</FormLabel>
              <Textarea size={"lg"} className="FormControl" placeholder="" />
            </FormControl>
          </VStack>
          <HStack>
            <Heading size={"md"} m={5}>
              Engineer{" "}
            </Heading>
            <Divider m={5} />
          </HStack>

          <VStack align={"start"} spacing={8} m={5}>
            <FormControl w={"lg"}>
              <FormLabel>Engineer</FormLabel>
              <Select
                onChange={(e) =>
                  setEngineer(engineersList![parseInt(e.target.value)])
                }
                variant="outline"
                placeholder=" Select the Engineer for this job"
              >
                {engineersList &&
                  engineersList!.map((item, index) => (
                    <option value={index} key={item.id}>
                      {item.name}
                    </option>
                  ))}
              </Select>{" "}
            </FormControl>

            <FormControl w={"lg"}>
              <FormLabel> Schedule Date</FormLabel>

              <Input
                onChange={(e) => setSchedule(new Date(e.target.value))}
                type="datetime-local"
                className="FormControl"
                placeholder="Select Schedule Date"
              />
            </FormControl>
            <FormControl w={"lg"}>
              <FormLabel> Est. Duration</FormLabel>
              <Input className="FormControl" placeholder="" />
            </FormControl>
          </VStack>
          <Divider m={5} />

          {/* <TableContainer>
            <Card>
              <Flex
                justify={"space-between"}
                align={"flex-end"}
                direction={"row"}
                my={5}
              >
                <FormLabel> Parts List</FormLabel>
                <Button
                  onClick={() => {
                    addPartModal.onOpen();
                  }}
                  leftIcon={<AddIcon />}
                  px={5}
                  py={5}
                  colorScheme="blue"
                  variant={"outline"}
                  size={"sm"}
                >
                  Add Part
                </Button>
              </Flex>
              <Card maxH={"50vh"} overflowY={"auto"}>
                <Table variant="simple">
                  <Thead bg={"black"} rounded={"xl"}>
                    <Tr>
                      <Th>#Code </Th>
                      <Th>Part Name </Th>
                      <Th>Quntity</Th>
                      <Th>Cost</Th>
                      <Th>Sub Total</Th>
                      <Th>*</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {jobPartsList &&
                      jobPartsList!.map((item, _index) => (
                        <Tr key={item.id}>
                          <Td>
                            {" "}
                            <Text
                              autoCapitalize={"true"}
                              size={"sm"}
                              variant={"h1"}
                            >
                              {item.code}
                            </Text>
                          </Td>
                          <Td>
                            {" "}
                            <Text
                              autoCapitalize={"true"}
                              size={"sm"}
                              variant={"h1"}
                            >
                              {item.name}
                            </Text>
                          </Td>
                          <Td></Td> <Td></Td> <Td></Td>
                          <Td>
                            <IconButton
                              onClick={() => setModelSection("newClint")}
                              color={"red"}
                              aria-label="Search database"
                              icon={<MdRemove />}
                            />
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </Card>
            </Card>
          </TableContainer> */}

          <Button w={"xs"} colorScheme="blackAlpha" bg={"black"}>
            {" "}
            Save{" "}
          </Button>
        </Flex>
      </Box>

      <Drawer
        onClose={createClientModal.onClose}
        isOpen={createClientModal.isOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {modelSection == "financialDetails" && (
              <IconButton
                onClick={() => setModelSection("newClint")}
                aria-label="Search database"
                icon={<MdArrowBack />}
              />
            )}
          </DrawerHeader>
          <DrawerBody>
            <AbsoluteCenter>
              {modelSection == "newClint" && (
                <>
                  <Heading my={5} size={"md"}>
                    Create New Client
                  </Heading>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel>Client Code</FormLabel>

                    <Input
                      onChange={(e) => {
                        console.log(createClient);
                        return setCreateClient({
                          ...createClient,
                          code: e.target.value,
                        });
                      }}
                      value={createClient.code}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel>Client Name</FormLabel>
                    <Input
                      onChange={(e) => {
                        console.log(createClient);

                        return setCreateClient({
                          ...createClient,
                          name: e.target.value,
                        });
                      }}
                      value={createClient.name}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <Button
                    onClick={() => setModelSection("financialDetails")}
                    colorScheme="blue"
                    w={"full"}
                    bg={"#294c58"}
                    my={10}
                    // isDisabled={priority == null || jobType == null}
                  >
                    Next
                  </Button>
                </>
              )}
              {modelSection == "financialDetails" && (
                <>
                  <Heading my={5} size={"md"}>
                    Financial details
                  </Heading>
                  <VStack spacing={5}>
                    <FormControl w={"lg"}>
                      <FormLabel> Financial Contact Name </FormLabel>

                      <Input
                        onChange={(e) =>
                          setCreateClient({
                            ...createClient,
                            financialContactName: e.target.value,
                          })
                        }
                        value={createClient.financialContactName}
                        className="FormControl"
                        placeholder=""
                      />
                    </FormControl>
                    <FormControl w={"lg"}>
                      <FormLabel> Financial Contact Email </FormLabel>
                      <Input
                        onChange={(e) =>
                          setCreateClient({
                            ...createClient,
                            financialContactEmail: e.target.value,
                          })
                        }
                        value={createClient.financialContactEmail}
                        className="FormControl"
                        placeholder=""
                      />
                    </FormControl>

                    <FormControl w={"lg"}>
                      <FormLabel> Site Type </FormLabel>
                      <Select
                        // onChange={(e) =>
                        //   setEngineer(engineersList![parseInt(e.target.value)])
                        // }
                        onChange={(e) =>
                          setCreateClient({
                            ...createClient,
                            siteType: e.target.value,
                          })
                        }
                        value={createClient.siteType}
                        variant="outline"
                        placeholder=" Select the Engineer for this job"
                      >
                        <option value="company">Company</option>
                        <option value="household">Household</option>
                      </Select>
                    </FormControl>
                    <FormControl w={"lg"}>
                      <FormLabel> Currency Code </FormLabel>
                      <Select
                        // onChange={(e) =>
                        //   setEngineer(engineersList![parseInt(e.target.value)])
                        // }
                        onChange={(e) =>
                          setCreateClient({
                            ...createClient,
                            currencyCode: e.target.value,
                          })
                        }
                        value={createClient.currencyCode}
                        variant="outline"
                        placeholder=" Select the Engineer for this job"
                      >
                        <option value="aud">AUD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                      </Select>{" "}
                    </FormControl>
                    <FormControl w={"lg"}>
                      <FormLabel> VAT Rate </FormLabel>
                      <Select
                        // onChange={(e) =>
                        //   setEngineer(engineersList![parseInt(e.target.value)])
                        // }
                        onChange={(e) =>
                          setCreateClient({
                            ...createClient,
                            vatRate: e.target.value,
                          })
                        }
                        value={createClient.vatRate}
                        variant="outline"
                        placeholder=" Select the Engineer for this job"
                      >
                        <option value="zeroRate">Zero Rate</option>
                        <option value="standardRate">Standard Rate</option>
                        <option value="lowRate">Low Rate</option>
                      </Select>
                    </FormControl>

                    <FormControl w={"lg"}>
                      <FormLabel> VAT Value </FormLabel>
                      <Input
                        onChange={(e) =>
                          setCreateClient({
                            ...createClient,
                            vatValue: e.target.value,
                          })
                        }
                        value={createClient.vatValue}
                        className="FormControl"
                        placeholder=""
                      />
                    </FormControl>

                    <FormControl w={"lg"}>
                      <FormLabel> VAT Number </FormLabel>
                      <Input
                        onChange={(e) =>
                          setCreateClient({
                            ...createClient,
                            vatNumber: e.target.value,
                          })
                        }
                        value={createClient.vatNumber}
                        className="FormControl"
                        placeholder=""
                      />
                    </FormControl>
                  </VStack>

                  <Flex
                    align={"right"}
                    alignContent={"end"}
                    alignItems={"end"}
                    float={"right"}
                    w={"full"}
                  >
                    <Button
                      alignSelf={"end"}
                      onClick={() => handleCreate()}
                      colorScheme="blue"
                      w={"full"}
                      bg={"#294c58"}
                      my={10}
                    >
                      Save
                    </Button>
                  </Flex>
                </>
              )}
            </AbsoluteCenter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer
        onClose={createSiteModal.onClose}
        isOpen={createSiteModal.isOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {/* { modelSection == "financialDetails" &&   <IconButton
                      onClick={() => setModelSection('newClint')}
                      aria-label="Search database"
                      icon={<MdArrowBack />}
                    />} */}
          </DrawerHeader>
          <DrawerBody>
            <AbsoluteCenter>
              <>
                <Heading my={5} size={"md"}>
                  Add Site{" "}
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Site Name </FormLabel>

                  <Input
                    onChange={(e) => {
                      console.log(createClient);
                      return setCreateSite({
                        ...createSite,
                        name: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.name!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Site Email </FormLabel>
                  <Input
                    onChange={(e) => {
                      console.log(createClient);
                      return setCreateSite({
                        ...createSite,
                        email: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.email!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>

                <FormControl w={"lg"}>
                  <FormLabel> Phone </FormLabel>
                  <Input
                    onChange={(e) => {
                      console.log(createClient);
                      return setCreateSite({
                        ...createSite,
                        tel: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.tel!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>

                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Address Line 1 </FormLabel>
                  <Input
                    onChange={(e) => {
                      console.log(createClient);
                      return setCreateSite({
                        ...createSite,
                        address1: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.address1!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>

                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Address Line 2 </FormLabel>
                  <Input
                    onChange={(e) => {
                      console.log(createClient);
                      return setCreateSite({
                        ...createSite,
                        address2: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.address2!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel> City </FormLabel>
                  <Input
                    onChange={(e) => {
                      console.log(createClient);
                      return setCreateSite({
                        ...createSite,
                        city: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.city!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Postcode</FormLabel>
                  <Input
                    onChange={(e) => {
                      console.log(createClient);
                      return setCreateSite({
                        ...createSite,
                        postcode: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.postcode!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>
                <Button
                  onClick={() => handleSiteCreate()}
                  colorScheme="blue"
                  w={"full"}
                  bg={"#294c58"}
                  my={10}
                >
                  Save
                </Button>
              </>
            </AbsoluteCenter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer
        onClose={addPartModal.onClose}
        isOpen={addPartModal.isOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0}>
            <Box height={"50vh"} w={"full"}>
              <TableContainer>
                <Card maxH={"100vh"} overflowY={"auto"}>
                  <Table variant="simple" maxH={10}>
                    <TableCaption>
                      Choose the engineer that is perfect for the job{" "}
                    </TableCaption>
                    <Thead
                      zIndex={"1000"}
                      bg={"gray.100"}
                      rounded={"xl"}
                      position="sticky"
                      top={0}
                    >
                      <Tr>
                        <Th colSpan={3}>
                          {" "}
                          <HStack>
                            <Input
                              borderRadius={"md"}
                              bg={"white"}
                              className="FormControl"
                              placeholder="Search for parts .."
                            />

                            <IconButton
                              bg={"transparent"}
                              onClick={() => {
                                createPartModal.onOpen();
                              }}
                              colorScheme="blue"
                              variant={"outline"}
                              aria-label="Search database"
                              icon={<MdAdd />}
                            />
                          </HStack>{" "}
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody h={10} maxH={10}>
                      {partsList &&
                        partsList!.map((item, _index) => (
                          <Tr key={item.id}>
                            <Td>
                              {" "}
                              <Text
                                autoCapitalize={"true"}
                                size={"sm"}
                                variant={"h1"}
                              >
                                {item.code}
                              </Text>
                            </Td>
                            <Td>
                              {" "}
                              <Text
                                autoCapitalize={"true"}
                                size={"sm"}
                                variant={"h1"}
                              >
                                {item.name}
                              </Text>
                            </Td>
                            <Td>
                              <IconButton
                                onClick={() => {
                                  setjobPartsList([...jobPartsList!, item]);
                                  console.log(item);
                                  console.log(jobPartsList);
                                }}
                                aria-label="Search database"
                                icon={<MdAdd />}
                              />
                            </Td>
                          </Tr>
                        ))}
                    </Tbody>
                  </Table>
                </Card>
              </TableContainer>{" "}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer
        onClose={createPartModal.onClose}
        isOpen={createPartModal.isOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {/* { modelSection == "financialDetails" &&   <IconButton
                      onClick={() => setModelSection('newClint')}
                      aria-label="Search database"
                      icon={<MdArrowBack />}
                    />} */}
          </DrawerHeader>
          <DrawerBody>
            <AbsoluteCenter>
              <>
                <Heading my={5} size={"md"}>
                  Add New Part
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Code </FormLabel>

                  <Input
                    onChange={(e) => {
                      console.log(createClient);
                      return setCreatePart({
                        ...createPart!,
                        code: e.target.value,
                      });
                    }}
                    value={createPart && createPart!.code!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Name </FormLabel>

                  <Input
                    onChange={(e) => {
                      console.log(createClient);
                      return setCreatePart({
                        ...createPart!,
                        name: e.target.value,
                      });
                    }}
                    value={createPart && createPart!.name!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Cost </FormLabel>

                  <Input
                    onChange={(e) => {
                      console.log(createClient);
                      return setCreatePart({
                        ...createPart!,
                        cost: e.target.value,
                      });
                    }}
                    value={createPart && createPart!.cost!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>

                <Button
                  onClick={() => handlePortCreate()}
                  colorScheme="blue"
                  w={"full"}
                  bg={"#294c58"}
                  my={10}
                >
                  Save
                </Button>
              </>
            </AbsoluteCenter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddJob;
