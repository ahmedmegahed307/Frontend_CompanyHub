import {
  AbsoluteCenter,
  Image,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Select,
  Spacer,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  VStack,
  useSteps,
  Textarea,
  Flex,
  Heading,
  Collapse,
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
} from "@chakra-ui/react";
import { Auth, DataStore } from "aws-amplify";
import Geocode from "react-geocode";

import { useState, useEffect } from "react";
import { UsersObject, Address, JobTypesList, PartsList } from "../../models";
import GoogleMapReact from "google-map-react";
import GoogleMap from "../GoogleMap";
import { SearchIcon } from "@chakra-ui/icons";
import { MdAdd, MdArrowBack, MdPlusOne } from "react-icons/md";
const steps = [
  { title: "Client", description: "Contact Info" },
  { title: "Job", description: "Date & Time" },
  { title: "Engineer", description: "Select Rooms" },
  { title: "Parts", description: "Select Rooms" },
  { title: "Review", description: "Select Rooms" },
];
const creatClientsteps = [
  { title: "Create New Client", description: "Contact Info" },
  { title: "Financial details", description: "Date & Time" },
];

const username:string  ='bariqa@afsgo.com'
const password:string  ='bariq1991'

async function signIn() {
  try {
    const user = await Auth.signIn(username, password);
    console.log(user);

    console.log('logIn done ..');
  } catch (error) {
    console.log('error signing in', error);
  }
}

const AddJob = () => {
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
  const [activeDrower, setActiveDrower] = useState<String>("createClient");

  const [client, setClient] = useState<UsersObject>();
  const [site, setClientSite] = useState<Address>();

  const [clientsList, setClientList] = useState<UsersObject[]>();
  const [engineersList, setEngineersList] = useState<UsersObject[]>();
  const [jobTypeList, setJobTypeList] = useState<JobTypesList[]>();
  const [engineer, setEngineer] = useState<UsersObject>();
  const [jobType, setJobType] = useState<JobTypesList>();
  const [partsList, setPartsList] = useState<PartsList[]>();
  const [jobSubType, setJobSubType] = useState<string>();
  const [priority, setPriority] = useState<string>();
  const [duration, setDuration] = useState<string>();
  const [schedule, setSchedule] = useState<string>();

  // get CLients
  useEffect(() => {
    /**
     * This keeps `post` fresh.
     */
    const sub = DataStore.observeQuery(UsersObject, (c) =>
      c.type.eq("client")
    ).subscribe(({ items }) => {
      console.log(items);

      setClientList(items);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  // get Engineers
  useEffect(() => {

    console.log('start 333 ');
    try {
        /**
     * This keeps `post` fresh.
     */
        console.log('start start1 ');

    const sub =  DataStore.observeQuery(UsersObject, (c) =>
    c.type.eq("engineer")
  ).subscribe(({ items }) => {
    console.log(items);
    console.log('start adasd ');

    setEngineersList(items);
    return () => {
      sub.unsubscribe();
    };
  });



      
    } catch (error) {
      console.log('start adasd ');

      console.log('errorr .. ');
      console.log(error);
      return   console.log(error);
      
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
      const sub = DataStore.observeQuery(PartsList
      ).subscribe(({ items }) => {
        console.log(items);
  
        setPartsList(items);
      });
  
      return () => {
        sub.unsubscribe();
      };
    }, []);

  // new Client
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        direction={"column"}
        alignItems="center"
        maxW="7xl"
        minH={"100vh"}
        mx="auto"
        px="4"
        w={"full"}
        h={"full"}
      >
        <Stepper
          bg="white"
          w={"full"}
          orientation="horizontal"
          backdropBlur={"2xl"}
          m={10}
          index={activeStep}
          colorScheme="facebook"
          size="sm"
        >
          {steps.map((step, index) => (
            <Step
              key={index}
              onClick={() => (index < activeStep ? setActiveStep(index) : null)}
            >
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>
                  {client && index == 0 ? client.name ?? "" : ""}
                  {jobType && index == 1 ? jobType.name ?? "" : ""}
                  {engineer && index == 2 ? engineer.name ?? "" : ""}
                </StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <Flex h={"full"} w={"full"} direction={"column"}>
          <Box></Box>
       
          <AbsoluteCenter>
            <Box>
            <HStack>
            <Heading my={10} size={"md"}>
              Add new job
            </Heading>
            <Text> {"> " + steps[activeStep].title}</Text>
          </HStack>
              {activeStep == 0 && (
                <>
                  <Flex w={"full"}>
                    <Flex mx={20} w={"full"} direction={"column"}>
                      <FormControl pb={10} w={"lg"}>
                        <FormLabel>Client</FormLabel>

                        <HStack>
                          <Select
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
                              onOpen();
                              setActiveDrower("createClient");
                            }}
                            aria-label="Search database"
                            icon={<MdAdd />}
                          />
                        </HStack>
                      </FormControl>

                      <FormControl pb={10} w={"lg"}>
                        <FormLabel>Site</FormLabel>
                        <HStack>
                          {" "}
                          <Select
                            onChange={(e) =>
                              setClientSite(
                                client?.adresses![parseInt(e.target.value)] ??
                                  client
                              )
                            }
                            variant="outline"
                            placeholder="Choose the client site(Address)"
                          >
                            {client &&
                              client.adresses!.map((item, index) => (
                                <option value={index} key={item?.name}>
                                  {item!.name}
                                </option>
                              ))}
                          </Select>{" "}
                          <IconButton
                            onClick={() => {
                              onOpen();
                              setActiveDrower("createSite");
                            }}
                            aria-label="Search database"
                            icon={<MdAdd />}
                          />
                        </HStack>
                      </FormControl>

                      <>
                        {/* <FormControl pb={5} w={"lg"}>
                      <FormLabel>Site Contact</FormLabel>

                      <FormHelperText>
                        {site?.contactName}
                        <br />
                        {site?.email}
                        <br />
                        {site?.tel}
                      </FormHelperText>
                    </FormControl>
                    <FormControl pb={5} w={"lg"}>
                      <FormLabel>Site Address</FormLabel>

                      <FormHelperText>
                        {site?.address1}
                        <br />
                        {site?.address2}
                        <br />
                        {site?.city} {","} {site?.postcode}{" "}
                      </FormHelperText>
                    </FormControl> */}
                      </>

                      <Button
                        onClick={() => setActiveStep(activeStep + 1)}
                        colorScheme="facebook"
                        w={"full"}
                        bg={"#294c58"}
                        my={10}
                        isDisabled={client == null || site == null}
                      >
                        Next
                      </Button>
                    </Flex>

                    {site && (
                      <Flex w={"full"} direction={"column"}>
                        <Box height={"50vh"} w={"50vh"}>
                          <GoogleMap></GoogleMap>
                        </Box>
                      </Flex>
                    )}
                  </Flex>
                </>
              )}

              {/* /////////////// job  */}
              {activeStep == 1 && (
                <>
                  <FormControl pb={10} w={"lg"}>
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
                  <FormControl pb={10} w={"lg"}>
                    <FormLabel>Sub Type</FormLabel>
                    <Select
                      onChange={(e) => setJobSubType(e.target.value)}
                      variant="outline"
                      placeholder="Select the job sub-type"
                    >
                      {jobType &&
                        jobType.subTypeList!.map((item, index) => (
                          <option value={item ?? 0} key={item}>
                            {item}
                          </option>
                        ))}
                    </Select>
                  </FormControl>
                  <FormControl pb={10} w={"lg"}>
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

                  <Button
                    onClick={() => setActiveStep(activeStep + 1)}
                    colorScheme="blue"
                    w={"full"}
                    bg={"#294c58"}
                    my={10}
                    isDisabled={priority == null || jobType == null}
                  >
                    Next
                  </Button>
                </>
              )}
              {/* /////////////// Engineer  */}
              {activeStep == 2 && (
                <>
                  <Flex w={"full"}>
                    <Flex mx={20} w={"full"} direction={"column"}>
                      <FormControl pb={10} w={"lg"}>
                        <FormLabel>Engineer</FormLabel>
                        <Select
                          onChange={(e) =>
                            setEngineer(
                              engineersList![parseInt(e.target.value)]
                            )
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
                      <FormControl pb={10} w={"lg"}>
                        <FormLabel> Schedule Date</FormLabel>
                        <Input
                          type="datetime-local"
                          className="FormControl"
                          placeholder="Select Schedule Date"
                        />
                      </FormControl>
                      <FormControl pb={10} w={"lg"}>
                        <FormLabel> Est. Duration</FormLabel>
                        <Input className="FormControl" placeholder="" />
                      </FormControl>

                      <Button
                        onClick={() => setActiveStep(activeStep + 1)}
                        colorScheme="blue"
                        w={"full"}
                        bg={"#294c58"}
                        my={10}
                      >
                        Next
                      </Button>
                    </Flex>

                    <Flex w={"full"} direction={"column"}>
                      <Box height={"50vh"} w={"50vh"}>
                        <TableContainer>
                          <Card>
                            <FormLabel> Engineers suggestion list</FormLabel>

                            <Table variant="simple">
                              <TableCaption>
                                Choose the engineer that is perfect for the job{" "}
                              </TableCaption>
                              <Thead bg={"gray.100"} rounded={"xl"}>
                                <Tr>
                                  <Th>Engineer </Th>
                                  <Th>Last Location</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                {engineersList &&
                                  engineersList!.map((item, index) => (
                                    <Tr key={item.id}>
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
                                      <Td>5 km away</Td>
                                    </Tr>
                                  ))}
                              </Tbody>
                            </Table>
                          </Card>
                        </TableContainer>
                      </Box>
                    </Flex>
                  </Flex>
                </>
              )}

{activeStep == 4 && (
                <>
                  <Flex w={"full"}>
                    {/* <Flex mx={20} w={"full"} direction={"column"}>
                      <FormControl pb={10} w={"lg"}>
                        <FormLabel>Engineer</FormLabel>
                        <Select
                          onChange={(e) =>
                            setEngineer(
                              engineersList![parseInt(e.target.value)]
                            )
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
                      <FormControl pb={10} w={"lg"}>
                        <FormLabel> Schedule Date</FormLabel>
                        <Input
                          type="datetime-local"
                          className="FormControl"
                          placeholder="Select Schedule Date"
                        />
                      </FormControl>
                      <FormControl pb={10} w={"lg"}>
                        <FormLabel> Est. Duration</FormLabel>
                        <Input className="FormControl" placeholder="" />
                      </FormControl>

                      <Button
                        onClick={() => setActiveStep(activeStep + 1)}
                        colorScheme="blue"
                        w={"full"}
                        bg={"#294c58"}
                        my={10}
                      >
                        Next
                      </Button>
                    </Flex> */}


                    <Flex mr={10} w={"full"} direction={"column"}>
                      
                      <Box height={"50vh"} w={"50vh"}>
                      
                        <TableContainer >
                          <Card maxH={'50vh'} overflowY={'auto'} >

                            <Table variant="simple" maxH={10}>
                              <TableCaption>
                                Choose the engineer that is perfect for the job{" "}
                              </TableCaption>
                              <Thead zIndex={'1000'} bg={"gray.100"} rounded={"xl"} position="sticky" top={0} >
                                <Tr>
                                  <Th colSpan={3}>     <HStack>
                        <Input borderRadius={'md'} bg={'white'} className="FormControl" placeholder="Search for parts .." />

                          <  IconButton
                    
                          bg={'transparent'}
                            onClick={() => {
                              onOpen();
                              setActiveDrower("createClient");
                            }}
                            aria-label="Search database"
                            icon={<SearchIcon />}
                          />
                        </HStack> </Th>
                                </Tr>
                              </Thead>
                              <Tbody h={10}  maxH={10}>
                                {partsList &&
                                  partsList!.map((item, index) => (
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
                                      
                  onClick={() => setModelSection("newClint")}
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
                    </Flex>
                    <Flex w={'full'}>
    
    <TableContainer>
                          <Card>
                            <FormLabel> Parts List</FormLabel>

                            <Table variant="simple">
                              {/* <TableCaption>
                                Choose the engineer that is perfect for the job{" "}
                              </TableCaption> */}
                              <Thead bg={"gray.100"} rounded={"xl"}>
                                <Tr>
                                <Th>#Code </Th>
                                <Th>Part Name </Th>
                                  <Th>Quntity</Th>
                                  <Th>Cost</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                         
                              </Tbody>
                            </Table>
                          </Card>
                        </TableContainer>
</Flex>
                  </Flex>
                </>
              )}
              {activeStep == 3 && (
                <>
                  <Flex w={"full"}>
                    <Flex mr={20} w={"full"} direction={"column"}>
                      <Card p={"10"} variant={"filled"}>
                        <FormControl pb={5} w={"lg"}>
                          <Heading my={1} size={"sm"}>
                            Client :
                          </Heading>
                          <Text>{client!.name}</Text>
                          <Text>
                            {site?.name} - {site?.address1} - {site?.city}
                          </Text>
                        </FormControl>
                        <FormControl pb={5} w={"lg"}>
                          <Heading my={1} size={"sm"}>
                            Job :
                          </Heading>
                          <Text>
                            {jobType?.name} - {jobSubType}
                          </Text>
                          <Text>{priority}</Text>
                        </FormControl>
                        <FormControl pb={5} w={"lg"}>
                          <Heading my={1} size={"sm"}>
                            Engineer :
                          </Heading>
                          <Text>{engineer?.name}</Text>
                          <Text>
                            {schedule} - {duration}
                          </Text>
                        </FormControl>
                      </Card>
                      <hr />
                    </Flex>
                    <Flex w={"full"} direction={"column"}>
                      <FormControl pb={10} w={"lg"}>
                        <FormLabel> Description</FormLabel>
                        <Textarea className="FormControl" placeholder="" />
                      </FormControl>
                      <FormControl pb={10} w={"lg"}>
                        <FormLabel> Instruction</FormLabel>
                        <Textarea
                          size={"lg"}
                          className="FormControl"
                          placeholder=""
                        />
                      </FormControl>

                      <Button
                        // onClick={() => setActiveStep(activeStep + 1)}
                        colorScheme="blue"
                        w={"full"}
                        bg={"#294c58"}
                        my={10}
                      >
                        Save Job
                      </Button>
                    </Flex>
                  </Flex>
                </>
              )}

              {/* <Button
                onClick={() => setActiveStep(activeStep + 1)}
                colorScheme="blue"
                w={"full"}
                variant="outline"
                my={10}
              >
                Next
              </Button> */}
            </Box>
          </AbsoluteCenter>
        </Flex>
      </Flex>
      {activeDrower == "createClient" && (
        <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
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
                      Create new client
                    </Heading>
                    <FormControl pb={5} w={"lg"}>
                      <FormLabel>Client Code</FormLabel>

                      <Input className="FormControl" placeholder="" />
                    </FormControl>
                    <FormControl pb={5} w={"lg"}>
                      <FormLabel>Client Name</FormLabel>
                      <Input className="FormControl" placeholder="" />
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
                    <FormControl pb={5} w={"lg"}>
                      <FormLabel> Financial Contact Name </FormLabel>

                      <Input className="FormControl" placeholder="" />
                    </FormControl>
                    <FormControl pb={5} w={"lg"}>
                      <FormLabel> Financial Contact Email </FormLabel>
                      <Input className="FormControl" placeholder="" />
                    </FormControl>

                    <FormControl pb={10} w={"lg"}>
                      <FormLabel> Site Type </FormLabel>
                      <Select
                        onChange={(e) =>
                          setEngineer(engineersList![parseInt(e.target.value)])
                        }
                        variant="outline"
                        placeholder=" Select the Engineer for this job"
                      >
                        <option value="company">Company</option>
                        <option value="household">Household</option>
                      </Select>
                    </FormControl>
                    <FormControl pb={10} w={"lg"}>
                      <FormLabel> Currency Code </FormLabel>
                      <Select
                        onChange={(e) =>
                          setEngineer(engineersList![parseInt(e.target.value)])
                        }
                        variant="outline"
                        placeholder=" Select the Engineer for this job"
                      >
                        <option value="aud">AUD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                      </Select>{" "}
                    </FormControl>
                    <FormControl pb={10} w={"lg"}>
                      <FormLabel> VAT Rate </FormLabel>
                      <Select
                        onChange={(e) =>
                          setEngineer(engineersList![parseInt(e.target.value)])
                        }
                        variant="outline"
                        placeholder=" Select the Engineer for this job"
                      >
                        <option value="zeroRate">Zero Rate</option>
                        <option value="standardRate">Standard Rate</option>
                        <option value="lowRate">Low Rate</option>
                      </Select>
                    </FormControl>

                    <FormControl pb={5} w={"lg"}>
                      <FormLabel> VAT Value </FormLabel>
                      <Input className="FormControl" placeholder="" />
                    </FormControl>

                    <FormControl pb={5} w={"lg"}>
                      <FormLabel> VAT Number </FormLabel>
                      <Input className="FormControl" placeholder="" />
                    </FormControl>

                    <Button
                      onClick={() => setModelSection("financialDetails")}
                      colorScheme="blue"
                      w={"full"}
                      bg={"#294c58"}
                      my={10}
                      isDisabled={priority == null || jobType == null}
                    >
                      Next
                    </Button>
                  </>
                )}
              </AbsoluteCenter>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
      {activeDrower == "createSite" && (
        <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
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

                    <Input className="FormControl" placeholder="" />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> Site Email </FormLabel>
                    <Input className="FormControl" placeholder="" />
                  </FormControl>

                  <FormControl pb={10} w={"lg"}>
                    <FormLabel> Phone </FormLabel>
                    <Input className="FormControl" placeholder="" />
                  </FormControl>

                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> Address Line 1 </FormLabel>
                    <Input className="FormControl" placeholder="" />
                  </FormControl>

                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> Address Line 2 </FormLabel>
                    <Input className="FormControl" placeholder="" />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> City </FormLabel>
                    <Input className="FormControl" placeholder="" />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> Postcode</FormLabel>
                    <Input className="FormControl" placeholder="" />
                  </FormControl>
                  <Button
                    onClick={() => setModelSection("financialDetails")}
                    colorScheme="blue"
                    w={"full"}
                    bg={"#294c58"}
                    my={10}
                    isDisabled={priority == null || jobType == null}
                  >
                    Save
                  </Button>
                </>
              </AbsoluteCenter>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default AddJob;
