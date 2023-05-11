import {
  AbsoluteCenter,
  Image,
  Text,
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
} from "@chakra-ui/react";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { UsersObject, Address, JobTypesList } from "../../models";
const steps = [
  { title: "Client", description: "Contact Info" },
  { title: "Job", description: "Date & Time" },
  { title: "Engineer", description: "Select Rooms" },
  { title: "Descriptions", description: "Select Rooms" },
];

// const username:string  ='bariqa@afsgo.com'
// const password:string  ='bariq19911'

// async function signIn() {
//   try {
//     const user = await Auth.signIn(username, password);
//     console.log(user);

//     console.log('logIn done ..');
//   } catch (error) {
//     console.log('error signing in', error);
//   }
// }

const AddJob = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const [client, setClient] = useState<UsersObject>();
  const [site, setClientSite] = useState<Address>();

  const [clientsList, setClientList] = useState<UsersObject[]>();
  const [engineersList, setEngineersList] = useState<UsersObject[]>();
  const [jobTypeList, setJobTypeList] = useState<JobTypesList[]>();
  const [engineer, setEngineer] = useState<UsersObject>();
  const [jobType, setJobType] = useState<JobTypesList>();
  const [jobSubType, setJobSubType] = useState<string>();
  const [priority, setPriority] = useState<string>();

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
    /**
     * This keeps `post` fresh.
     */
    const sub = DataStore.observeQuery(UsersObject, (c) =>
      c.type.eq("engineer")
    ).subscribe(({ items }) => {
      console.log(items);

      setEngineersList(items);
    });

    return () => {
      sub.unsubscribe();
    };
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
          <Stepper
            bg="white"
            h={"80vh"}
            orientation="vertical"
            backdropBlur={"2xl"}
            m={10}
            index={activeStep}
colorScheme="facebook"


>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
          
          <Box>

          </Box>
          <AbsoluteCenter>

          <Heading my={10} size={'lg'} >Add new job</Heading>

            <Box>

              {activeStep == 1 && (
                <>
                  <FormControl pb={10} w={"lg"}>
                    <FormLabel>Client</FormLabel>
                    <Select
                      onChange={(e) =>
                        setClient(clientsList![parseInt(e.target.value)])
                      }
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
                  </FormControl>

                  <FormControl pb={10} w={"lg"}>
                    <FormLabel>Site</FormLabel>
                    <Select
                      onChange={(e) =>
                        setClientSite(client?.adresses![0] ?? client)
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
                  >
                    Next
                  </Button>
                </>
              )}

              {/* /////////////// job  */}
              {activeStep == 2 && (
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
                          <option value={item} key={item}>
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
                  >
                    Next
                  </Button>
                </>
              )}
              {/* /////////////// Engineer  */}
              {activeStep == 3 && (
                <>
                  <FormControl pb={10} w={"lg"}>
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
                    <Input className="FormControl" placeholder="1h" />
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
                 
                </>
              )}

              {activeStep == 4 && (
                <>
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
                      onClick={() => setActiveStep(activeStep + 1)}
                      colorScheme="blue"
                      w={"full"}
                      bg={"#294c58"}
                      my={10}
                    >
                      Next
                    </Button>
             
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
    </>
  );
};

export default AddJob;
