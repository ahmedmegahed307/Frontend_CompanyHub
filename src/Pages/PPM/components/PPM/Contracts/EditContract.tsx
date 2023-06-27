import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Flex,
  Heading,
  useDisclosure,
  Divider,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import { Auth, DataStore } from "aws-amplify";
import Geocode from "react-geocode";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { JobTypesList, UsersObject } from "../../../../../models";

const EditContract = () => {
  Geocode.setApiKey("AIzaSyCI2PFz1BE74zQa13ssmP1A0DDEmlOXOGQ");

  const [client, setClient] = useState<UsersObject>();

  const [clientsList, setClientList] = useState<UsersObject[]>();
  const [jobTypeList, setJobTypeList] = useState<JobTypesList[]>();
  const [jobType, setJobType] = useState<JobTypesList>();
  const [jobSubType, setJobSubType] = useState<string>();
  const [frequency, setFrequency] = useState<string>();
  const [billType, setBillType] = useState<string>();
  const [duration, setDuration] = useState<string>();
  const [startDate, setStartDate] = useState<Date>();
  const [expiryDate, setExpiryDate] = useState<Date>();

  //select Index
  const [selectClientIndex, setSelectClientIndex] = useState<number>();

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
      <Box w={"full"} borderColor="gray.200" py={10}>
        <Flex direction={"column"} maxW="7xl" mx="auto" px="4">
          <Heading mb={5} size={"lg"} color={"#1396ab"}>
            Edit Contract{" "}
          </Heading>

          <Divider />

          <HStack mt={5}>
            <VStack spacing={5} p={5}>
              <FormControl w={"lg"}>
                <FormLabel>Client</FormLabel>

                <HStack>
                  <Select
                    value={selectClientIndex}
                    onChange={(e) => {
                      setClient(clientsList![parseInt(e.target.value)]);
                    }}
                    variant="outline"
                    placeholder="Create a Client...
                        "
                  >
                    {clientsList &&
                      clientsList!.map((item, index) => (
                        <option value={index} key={item.id}>
                          {item.name}
                        </option>
                      ))}
                  </Select>
                </HStack>
              </FormControl>

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
                <FormLabel>Estimated Duration</FormLabel>
                <Input className="FormControl" placeholder="0" />
              </FormControl>
              <FormControl w={"lg"}>
                <FormLabel>Contract Charge</FormLabel>
                <Input
                  type="number"
                  className="FormControl"
                  placeholder="Enter total or per visit charge depending on billing type"
                />
              </FormControl>
              <FormControl w={"lg"}>
                <FormLabel> Start Date</FormLabel>

                <Input
                  onChange={(e) => setStartDate(new Date(e.target.value))}
                  type="datetime-local"
                  className="FormControl"
                  placeholder="Select Schedule Date"
                />
              </FormControl>
            </VStack>

            <VStack spacing={5} p={5}>
              <FormControl w={"lg"}>
                <FormLabel>Contract Reference (optional)</FormLabel>
                <Input className="FormControl" placeholder="" />
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
                <FormLabel>PM Frequency</FormLabel>
                <Select
                  onChange={(e) => setFrequency(e.target.value)}
                  variant="outline"
                  placeholder="Select the job priority"
                ></Select>
              </FormControl>
              <FormControl w={"lg"}>
                <FormLabel>Billing Type</FormLabel>
                <Select
                  onChange={(e) => setBillType(e.target.value)}
                  variant="outline"
                  placeholder="Select type"
                ></Select>
              </FormControl>
              <FormControl w={"lg"}>
                <FormLabel> Expiry Date</FormLabel>

                <Input
                  onChange={(e) => setExpiryDate(new Date(e.target.value))}
                  type="datetime-local"
                  className="FormControl"
                  placeholder="Select Schedule Date"
                />
              </FormControl>
            </VStack>
          </HStack>

          <FormControl
            mx={5}
            my={5}
            w={"lg"}
            display="flex"
            alignItems="center"
          >
            <Checkbox size="lg" colorScheme="green" />
            <FormLabel mb="0" ml="10px">
              PM Active
            </FormLabel>
          </FormControl>

          <Box>
            <Link to="/ppm">
              <Button
                mr={28}
                float={"right"}
                w={"xs"}
                colorScheme="blackAlpha"
                bg={"red"}
              >
                Cancel
              </Button>
            </Link>
            <Button
              mr={2}
              float={"right"}
              ml={5}
              w={"xs"}
              colorScheme="blackAlpha"
              bg={"#1396ab"}
            >
              Save
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default EditContract;
