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
import moment from "moment";

import { useState, useEffect } from "react";
import {
  UsersObject,
  JobTypesList,
  PartsList,
  Jobs,
  JobType,
  Contract,
  PmFreq,
  BillingType,
} from "../../../models";
import { Link } from "react-router-dom";
import { Temporal } from "@js-temporal/polyfill";
import Swal from "sweetalert2";

const AddContract = () => {
  Geocode.setApiKey("AIzaSyCI2PFz1BE74zQa13ssmP1A0DDEmlOXOGQ");

  const [client, setClient] = useState<UsersObject>();

  const [clientsList, setClientList] = useState<UsersObject[]>();
  const [jobTypeList, setJobTypeList] = useState<JobTypesList[]>();
  const [jobType, setJobType] = useState<JobTypesList>();
  const [jobSubType, setJobSubType] = useState<string>();
  const [frequency, setFrequency] = useState<PmFreq>();
  const [billType, setBillType] = useState<BillingType>();
  const [duration, setDuration] = useState<string>();
  const [contractCharge, setContractCharge] = useState<number>();
  const [startDate, setStartDate] = useState<Date>();
  const [expiryDate, setExpiryDate] = useState<Date>();
  const [estDuration, setEstDuration] = useState<string>();

  //select Index
  const [selectClientIndex, setSelectClientIndex] = useState<number>();

  // get CLients
  useEffect(() => {
    console.log("xxxxxx");
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

  const handleCreate = async () => {
    try {
      // console.log(createClient);

      var newContract = new Contract({
        clientId: client?.id,
        // jobType: jobType,
        jobSubtype: jobSubType,
        startDate: moment(startDate).format("yyyy-MM-DD"),
        expiryDate: moment(expiryDate).format("yyyy-MM-DD"),
        contractCharge: contractCharge,
        isActive: true,
        pmActive: true,
        estDuration: estDuration,

        pmFreq: frequency ?? PmFreq.ANNUAL,
        billingType: billType ?? BillingType.INVOICE_PER_CONTRACT,
      });

      console.log(newContract);
      const post = await DataStore.save(newContract).then(async (res) => {
        Swal.fire({
          title: "Congratulations",
          text: "New contract have been Created successfully",
          icon: "success",
        }).then(() => {
          // location.href = "/contracts";
        });
      });

      // createModal.onClose();
    } catch (error: any) {
      Swal.fire({
        title: "Oops",
        text: error,
        icon: "error",
      });
    }
  };

  return (
    <>
      <Box w={"full"} borderColor="gray.200" py={10}>
        <Flex direction={"column"} maxW="7xl" mx="auto" px="4">
          <Heading mb={5} size={"lg"} color={"#1396ab"}>
            Create New Contract{" "}
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
                <Input
                  onChange={(e) => setEstDuration(e.target.value)}
                  className="FormControl"
                  placeholder="0"
                />
              </FormControl>
              <FormControl w={"lg"}>
                <FormLabel>Contract Charge</FormLabel>
                <Input
                  onChange={(e) =>
                    setContractCharge(parseFloat(e.target.value))
                  }
                  type="number"
                  className="FormControl"
                  placeholder="Enter total or per visit charge depending on billing type"
                />
              </FormControl>
              <FormControl w={"lg"}>
                <FormLabel> Start Date</FormLabel>

                <Input
                  onChange={(e) => setStartDate(new Date(e.target.value))}
                  type="date"
                  name="sDate"
                  id="sDate"
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
                  onChange={(e) => setFrequency(e.target.value as PmFreq)}
                  variant="outline"
                  placeholder="Select the job priority"
                >
                  <option value={PmFreq.DAILY}>Daily</option>
                  <option value={PmFreq.WEEKLY}>Weekly</option>
                  <option value={PmFreq.MONTHLY}>Daily</option>
                  <option value={PmFreq.QUARTERLY}>Quarterly</option>
                  <option value={PmFreq.SEMI_ANNUAL}>Semi-annual</option>
                  <option value={PmFreq.ANNUAL}>annually</option>
                </Select>
              </FormControl>
              <FormControl w={"lg"}>
                <FormLabel>Billing Type</FormLabel>
                <Select
                  onChange={(e) => setBillType(e.target.value as BillingType)}
                  variant="outline"
                  placeholder="Select type"
                >
                  <option value={BillingType.INVOICE_PER_CONTRACT}>
                    Invoice per contract
                  </option>
                  <option value={BillingType.INVOICE_PER_VISIT}>
                    Invoice per visit
                  </option>
                </Select>
              </FormControl>
              <FormControl w={"lg"}>
                <FormLabel> Expiry Date</FormLabel>

                <Input
                  onChange={(e) => setExpiryDate(new Date(e.target.value))}
                  type="date"
                  className="FormControl"
                  name="exDate"
                  id="exDate"
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
              w={"xs"}
              colorScheme="blackAlpha"
              bg={"#1396ab"}
              onClick={() => {
                handleCreate();
              }}
            >
              Save
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AddContract;
