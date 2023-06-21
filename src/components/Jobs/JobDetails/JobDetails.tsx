import React from "react";
import {
  Text,
  Flex,
  Heading,
  VStack,
  Box,
  HStack,
  Button,
  Card,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Map from "./Map";
import { AddIcon } from "@chakra-ui/icons";
import Attachment from "./Attachment";

function JobDetails() {
  return (
    <>
      <Flex m={10} direction="column">
        {/* <Heading color="#1396ab"> Job Details </Heading> */}
        <Heading color="#1396ab" mb={4} fontSize="lg">
          Job Number: 115-Pending
        </Heading>

        <HStack justifyContent="space-between">
          <VStack>
            <Box ml={50}>
              <Text>
                Client: ClientTest
                <Button
                  leftIcon={<AddIcon />}
                  ml={5}
                  colorScheme="blue"
                  variant={"solid"}
                  size={"sm"}
                  bg={"#294c58"}
                >
                  add Client
                </Button>
              </Text>
              <Text>Company: CompanyTest</Text>
              <Text>Site: SiteTest</Text>
              <Text>Contact: ContactTest</Text>
              <Text>Address: AddressTest</Text>
              <Text>Country: CountryTest</Text>
            </Box>
          </VStack>

          <VStack>
            <Box mr={200}>
              <Text>City: CityTest</Text>
              <Text>Date: DateTest</Text>
              <Text>Cash on Delivery: Yes</Text>
              <Text>Description: Description Test test</Text>
              <Text>Status: On the way</Text>
              <Text>Add Client: Test</Text>
            </Box>
          </VStack>
        </HStack>

        <Flex
          direction="column"
          alignItems="center"
          maxW="7xl"
          mx="auto"
          mt={10}
          px="4"
          w="full"
        >
          <Tabs w="full">
            <TabList>
              <Tab>Map</Tab>
              <Tab>Attachments</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box mt={8}>
                  <Map apiKey={""} />
                </Box>
              </TabPanel>
              <TabPanel>
                <Attachment onFileSelect={(file) => console.log(file)} />
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Spacer />
        </Flex>
      </Flex>
    </>
  );
}

export default JobDetails;
