import { AddIcon } from "@chakra-ui/icons";
import { Flex, Heading, Spacer, Button, Tabs, TabList, Tab, TabPanels, TabPanel, TableContainer, Card, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Icon, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CheckListModule, Jobs } from "../../models";
import { DataStore } from "aws-amplify";







const CheckLists = () => {
  const [checklists, setCheckLists] = useState<CheckListModule[]>();

    // get CLients
    useEffect(() => {
      /**
       * This keeps `post` fresh.
       */
      const sub = DataStore.observeQuery(CheckListModule).subscribe(({ items }) => {
        console.log(items);
  
        setCheckLists(items);
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
          <Heading size={"lg"} w={"full"} py={10} textAlign={"left"}>
            Jobs List
          </Heading>
          <Spacer />
        
          <Button as={NavLink}  leftIcon={<AddIcon  />}  to='/jobs/addJob' my={10} px={10} py={5} onClick={() => {}} colorScheme="blue" variant={'solid'} size={'sm'}  bg={"#294c58"}> 


 Create Check List          </Button>
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
          <TabPanels pt={5}  h={"50vh"}>
          <TabPanel>
              <TableContainer borderRadius={'xl'}>
                <Card p={0} borderRadius={""} variant={"outline"}>
                  <Table variant="simple">
                    <TableCaption>
                      Imperial to metric conversion factors
                    </TableCaption>
                    <Thead bg={"gray.100"} rounded={"xl"}>
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
                          <Tr key={item.id} >
                            <Td>{item.name ?? "00" + index}</Td>
                            <Td>{item.visibleOn ?? ''}</Td>
                            <Td>{item.JobTypes ?? ''}</Td>
                            <Td>{item.isReq ?? ''}</Td>
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
    </>
  );
}

export default CheckLists