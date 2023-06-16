// import { AddIcon } from '@chakra-ui/icons';
// import { Flex, Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, StepTitle, StepDescription, StepSeparator, AbsoluteCenter, HStack, Heading, FormControl, FormLabel, Select, IconButton, Button, Textarea, Input, TableContainer, Card, Table, TableCaption, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
// import { steps, Box } from 'framer-motion';
// import React from 'react'
// import { MdAdd, MdRemove } from 'react-icons/md';
// import GoogleMap from '../GoogleMap';

// const old = () => {
//   return (
// <Flex
//     direction={"column"}
//     alignItems="center"
//     maxW="7xl"
//     minH={"100vh"}
//     mx="auto"
//     px="4"
//     w={"full"}
//     h={"full"}
// >
//     <Stepper
//         bg="white"
//         w={"full"}
//         orientation="horizontal"
//         backdropBlur={"2xl"}
//         m={10}
//         index={activeStep}
//         colorScheme="facebook"
//         size="sm"
//     >
//         {steps.map((step, index) => (
//             <Step
//                 key={index}
//                 onClick={() => (index < activeStep ? setActiveStep(index) : null)}
//             >
//                 <StepIndicator>
//                     <StepStatus
//                         complete={<StepIcon />}
//                         incomplete={<StepNumber />}
//                         active={<StepNumber />}
//                     />
//                 </StepIndicator>

//                 <Box flexShrink="0">
//                     <StepTitle>{step.title}</StepTitle>
//                     <StepDescription>
//                         {client && index == 0 ? client.name ?? "" : ""}
//                         {jobType && index == 1 ? jobType.name ?? "" : ""}
//                         {engineer && index == 2 ? engineer.id ?? "" : ""}
//                     </StepDescription>
//                 </Box>

//                 <StepSeparator />
//             </Step>
//         ))}
//     </Stepper>
//     <Flex h={"full"} w={"full"} direction={"column"}>
//         <Box></Box>

//         <AbsoluteCenter>
//             <Box>
//                 <HStack>
//                     <Heading my={10} size={"md"}>
//                         Add new job
//                     </Heading>
//                     <Text> {"> " + steps[activeStep].title}</Text>
//                 </HStack>
//                 {activeStep == 0 && (
//                     <>
//                         <Flex w={"full"}>
//                             <Flex mx={20} w={"full"} direction={"column"}>
//                                 <FormControl pb={10} w={"lg"}>
//                                     <FormLabel>Client</FormLabel>

//                                     <HStack>
//                                         <Select
//                                             value={selectClientIndex}
//                                             onChange={(e) => {
//                                                 setClient(clientsList![parseInt(e.target.value)]);
//                                             }}
//                                             variant="outline"
//                                             placeholder="Choose the Client that ypu need to create job for
//                       "
//                                         >
//                                             {clientsList &&
//                                                 clientsList!.map((item, index) => (
//                                                     <option value={index} key={item.id}>
//                                                         {item.name}
//                                                     </option>
//                                                 ))}
//                                         </Select>
//                                         <IconButton
//                                             onClick={() => {
//                                                 createClientModal.onOpen();
//                                             }}
//                                             aria-label="Search database"
//                                             icon={<MdAdd />}
//                                         />
//                                     </HStack>
//                                 </FormControl>

//                                 <FormControl pb={10} w={"lg"}>
//                                     <FormLabel>Site</FormLabel>
//                                     <HStack>
//                                         {" "}
//                                         <Select
//                                             onChange={(e) =>
//                                                 setClientSite(
//                                                     client?.adresses![parseInt(e.target.value)] ??
//                                                     client
//                                                 )
//                                             }
//                                             value={selectSiteIndex}
//                                             variant="outline"
//                                             placeholder="Choose the client site(Address)"
//                                         >
//                                             {client &&
//                                                 client.adresses &&
//                                                 client.adresses!.map((item, index) => (
//                                                     <option value={index} key={item?.name}>
//                                                         {item!.name}
//                                                     </option>
//                                                 ))}
//                                         </Select>{" "}
//                                         <IconButton
//                                             onClick={() => {
//                                                 createSiteModal.onOpen();
//                                             }}
//                                             aria-label="Search database"
//                                             icon={<MdAdd />}
//                                         />
//                                     </HStack>
//                                 </FormControl>

//                                 <>
//                                     {/* <FormControl pb={5} w={"lg"}>
//                       <FormLabel>Site Contact</FormLabel>

//                       <FormHelperText>
//                         {site?.contactName}
//                         <br />
//                         {site?.email}
//                         <br />
//                         {site?.tel}
//                       </FormHelperText>
//                     </FormControl>
//                     <FormControl pb={5} w={"lg"}>
//                       <FormLabel>Site Address</FormLabel>

//                       <FormHelperText>
//                         {site?.address1}
//                         <br />
//                         {site?.address2}
//                         <br />
//                         {site?.city} {","} {site?.postcode}{" "}
//                       </FormHelperText>
//                     </FormControl> */}
//                                 </>

//                                 <Button
//                                     onClick={() => setActiveStep(activeStep + 1)}
//                                     colorScheme="facebook"
//                                     w={"full"}
//                                     bg={"#294c58"}
//                                     my={10}
//                                     isDisabled={client == null || site == null}
//                                 >
//                                     Next
//                                 </Button>
//                             </Flex>

//                             {site && (
//                                 <Flex w={"full"} direction={"column"}>
//                                     <Box height={"50vh"} w={"50vh"}>
//                                         <GoogleMap></GoogleMap>
//                                     </Box>
//                                 </Flex>
//                             )}
//                         </Flex>
//                     </>
//                 )}

//                 {/* /////////////// job  */}

//                 {activeStep == 1 && (
//                     <>
//                         <Flex w={"full"}>
//                             <Flex w={"full"} mr={20} direction={"column"}>
//                                 <FormControl pb={10} w={"lg"}>
//                                     <FormLabel>Job Type</FormLabel>
//                                     <Select
//                                         onChange={(e) =>
//                                             setJobType(jobTypeList![parseInt(e.target.value)])
//                                         }
//                                         variant="outline"
//                                         placeholder="Select the job type"
//                                     >
//                                         {jobTypeList &&
//                                             jobTypeList!.map((item, index) => (
//                                                 <option value={index} key={item.id}>
//                                                     {item.name}
//                                                 </option>
//                                             ))}
//                                     </Select>{" "}
//                                 </FormControl>
//                                 <FormControl pb={10} w={"lg"}>
//                                     <FormLabel>Sub Type</FormLabel>
//                                     <Select
//                                         onChange={(e) => setJobSubType(e.target.value)}
//                                         variant="outline"
//                                         placeholder="Select the job sub-type"
//                                     >
//                                         {jobType &&
//                                             jobType.subTypeList!.map((item, _index) => (
//                                                 <option value={item ?? 0} key={item}>
//                                                     {item}
//                                                 </option>
//                                             ))}
//                                     </Select>
//                                 </FormControl>
//                                 <FormControl pb={10} w={"lg"}>
//                                     <FormLabel>Priority</FormLabel>
//                                     <Select
//                                         onChange={(e) => setPriority(e.target.value)}
//                                         variant="outline"
//                                         placeholder="Select the job priority"
//                                     >
//                                         <option value="low">Low</option>
//                                         <option value="normal">Normal</option>
//                                         <option value="hight">Hight</option>
//                                     </Select>
//                                 </FormControl>

//                                 <Button
//                                     onClick={() => setActiveStep(activeStep + 1)}
//                                     colorScheme="blue"
//                                     w={"full"}
//                                     bg={"#294c58"}
//                                     my={10}
//                                     isDisabled={priority == null || jobType == null}
//                                 >
//                                     Next
//                                 </Button>
//                             </Flex>
//                             <Flex w={"full"} direction={"column"}>
//                                 <FormControl pb={10} w={"lg"}>
//                                     <FormLabel> Description</FormLabel>
//                                     <Textarea className="FormControl" placeholder="" />
//                                 </FormControl>
//                                 <FormControl pb={10} w={"lg"}>
//                                     <FormLabel> Instruction</FormLabel>
//                                     <Textarea
//                                         size={"lg"}
//                                         className="FormControl"
//                                         placeholder=""
//                                     />
//                                 </FormControl>
//                             </Flex>{" "}
//                         </Flex>
//                     </>
//                 )}
//                 {/* /////////////// Engineer  */}
//                 {activeStep == 2 && (
//                     <>
//                         <Flex w={"full"}>
//                             <Flex mx={20} w={"full"} direction={"column"}>
//                                 <FormControl pb={10} w={"lg"}>
//                                     <FormLabel>Engineer</FormLabel>
//                                     <Select
//                                         onChange={(e) =>
//                                             setEngineer(
//                                                 engineersList![parseInt(e.target.value)]
//                                             )
//                                         }
//                                         variant="outline"
//                                         placeholder=" Select the Engineer for this job"
//                                     >
//                                         {engineersList &&
//                                             engineersList!.map((item, index) => (
//                                                 <option value={index} key={item.id}>
//                                                     {item.name}
//                                                 </option>
//                                             ))}
//                                     </Select>{" "}
//                                 </FormControl>
//                                 <FormControl pb={10} w={"lg"}>
//                                     <FormLabel> Schedule Date</FormLabel>

//                                     <Input
//                                         onChange={(e) =>
//                                             setSchedule(new Date(e.target.value))
//                                         }
//                                         type="datetime-local"
//                                         className="FormControl"
//                                         placeholder="Select Schedule Date"
//                                     />
//                                 </FormControl>
//                                 <FormControl pb={10} w={"lg"}>
//                                     <FormLabel> Est. Duration</FormLabel>
//                                     <Input className="FormControl" placeholder="" />
//                                 </FormControl>

//                                 <Button
//                                     onClick={() => setActiveStep(activeStep + 1)}
//                                     colorScheme="blue"
//                                     w={"full"}
//                                     bg={"#294c58"}
//                                     my={10}
//                                 >
//                                     Next
//                                 </Button>
//                             </Flex>

//                             <Flex w={"full"} direction={"column"}>
//                                 <Box height={"50vh"} w={"50vh"}>
//                                     <TableContainer>
//                                         <Card>
//                                             <FormLabel> Engineers suggestion list</FormLabel>

//                                             <Table variant="simple">
//                                                 <TableCaption>
//                                                     Choose the engineer that is perfect for the job{" "}
//                                                 </TableCaption>
//                                                 <Thead bg={"black"} rounded={"xl"}>
//                                                     <Tr>
//                                                         <Th>Engineer </Th>
//                                                         <Th>Last Location</Th>
//                                                     </Tr>
//                                                 </Thead>
//                                                 <Tbody>
//                                                     {engineersList &&
//                                                         engineersList!.map((item, _index) => (
//                                                             <Tr key={item.id}>
//                                                                 <Td>
//                                                                     {" "}
//                                                                     <Text
//                                                                         autoCapitalize={"true"}
//                                                                         size={"sm"}
//                                                                         variant={"h1"}
//                                                                     >
//                                                                         {item.name}
//                                                                     </Text>
//                                                                 </Td>
//                                                                 <Td>5 km away</Td>
//                                                             </Tr>
//                                                         ))}
//                                                 </Tbody>
//                                             </Table>
//                                         </Card>
//                                     </TableContainer>
//                                 </Box>
//                             </Flex>
//                         </Flex>
//                     </>
//                 )}

//                 {activeStep == 3 && (
//                     <>
//                         <Flex w={"full"}>
//                             <Flex w={"full"} direction={"column"}>
//                                 <TableContainer>
//                                     <Card>
//                                         <Flex
//                                             justify={"space-between"}
//                                             align={"flex-end"}
//                                             direction={"row"}
//                                             my={5}
//                                         >
//                                             <FormLabel> Parts List</FormLabel>
//                                             <Button
//                                                 onClick={() => {
//                                                     addPartModal.onOpen();
//                                                 }}
//                                                 leftIcon={<AddIcon />}
//                                                 px={5}
//                                                 py={5}
//                                                 colorScheme="blue"
//                                                 variant={"outline"}
//                                                 size={"sm"}
//                                             >
//                                                 Add Part
//                                             </Button>
//                                         </Flex>
//                                         <Card maxH={"50vh"} overflowY={"auto"}>
//                                             <Table variant="simple">
//                                                 {/* <TableCaption>
//                                 Choose the engineer that is perfect for the job{" "}
//                               </TableCaption> */}
//                                                 <Thead bg={"black"} rounded={"xl"}>
//                                                     <Tr>
//                                                         <Th>#Code </Th>
//                                                         <Th>Part Name </Th>
//                                                         <Th>Quntity</Th>
//                                                         <Th>Cost</Th>
//                                                         <Th>Sub Total</Th>
//                                                         <Th>*</Th>
//                                                     </Tr>
//                                                 </Thead>
//                                                 <Tbody>
//                                                     {jobPartsList &&
//                                                         jobPartsList!.map((item, _index) => (
//                                                             <Tr key={item.id}>
//                                                                 <Td>
//                                                                     {" "}
//                                                                     <Text
//                                                                         autoCapitalize={"true"}
//                                                                         size={"sm"}
//                                                                         variant={"h1"}
//                                                                     >
//                                                                         {item.code}
//                                                                     </Text>
//                                                                 </Td>
//                                                                 <Td>
//                                                                     {" "}
//                                                                     <Text
//                                                                         autoCapitalize={"true"}
//                                                                         size={"sm"}
//                                                                         variant={"h1"}
//                                                                     >
//                                                                         {item.name}
//                                                                     </Text>
//                                                                 </Td>
//                                                                 <Td></Td> <Td></Td> <Td></Td>
//                                                                 <Td>
//                                                                     <IconButton
//                                                                         onClick={() =>
//                                                                             setModelSection("newClint")
//                                                                         }
//                                                                         color={"red"}
//                                                                         aria-label="Search database"
//                                                                         icon={<MdRemove />}
//                                                                     />
//                                                                 </Td>
//                                                             </Tr>
//                                                         ))}
//                                                 </Tbody>
//                                             </Table>
//                                         </Card>
//                                     </Card>
//                                 </TableContainer>
//                                 <Button
//                                     onClick={() => setActiveStep(activeStep + 1)}
//                                     colorScheme="blue"
//                                     w={"full"}
//                                     bg={"#294c58"}
//                                     my={10}
//                                 >
//                                     Next
//                                 </Button>
//                             </Flex>
//                         </Flex>
//                     </>
//                 )}
//                 {activeStep == 4 && (
//                     <>
//                         <Flex w={"full"}>
//                             <Flex mr={20} w={"full"} direction={"column"}>
//                                 <Card p={"10"} variant={"filled"}>
//                                     <FormControl pb={5} w={"lg"}>
//                                         <Heading my={1} size={"sm"}>
//                                             Client :
//                                         </Heading>
//                                         <Text>{client!.name}</Text>
//                                         <Text>
//                                             {site?.name} - {site?.address1} - {site?.city}
//                                         </Text>
//                                     </FormControl>
//                                     <FormControl pb={5} w={"lg"}>
//                                         <Heading my={1} size={"sm"}>
//                                             Job :
//                                         </Heading>
//                                         <Text>
//                                             {jobType?.name} - {jobSubType}
//                                         </Text>
//                                         <Text>{priority}</Text>
//                                     </FormControl>
//                                     <FormControl pb={5} w={"lg"}>
//                                         <Heading my={1} size={"sm"}>
//                                             Engineer :
//                                         </Heading>
//                                         <Text>{engineer?.name}</Text>
//                                         <Text>
//                                             {/* {schedule!.toString() ?? ''} - {duration} */}
//                                         </Text>
//                                     </FormControl>
//                                 </Card>
//                                 <hr />
//                                 <Button
//                                     onClick={() => onCreate()}
//                                     colorScheme="blue"
//                                     w={"full"}
//                                     bg={"#294c58"}
//                                     my={10}
//                                 >
//                                     Save Job
//                                 </Button>
//                             </Flex>
//                         </Flex>
//                     </>
//                 )}

//                 {/* <Button
//                 onClick={() => setActiveStep(activeStep + 1)}
//                 colorScheme="blue"
//                 w={"full"}
//                 variant="outline"
//                 my={10}
//               >
//                 Next
//               </Button> */}
//             </Box>
//         </AbsoluteCenter>
//     </Flex>
// </Flex>  )
// }

// export default old
