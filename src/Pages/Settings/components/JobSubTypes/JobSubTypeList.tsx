import {
  Tabs,
  TabPanels,
  TabPanel,
  TableContainer,
  Card,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import useJobSubTypeStore from "../../hooks/JobSubType/store";
import { JobSubType } from "../../../../services/JobSubTypesService/jobsubtype-service";

type SubTypeListProps = {
  jobSubTypeList: JobSubType[] | undefined;
  setDeleteJobSubTypeId: (id: number) => void;
  deleteModal: any;
  updateModal: any;
};

const JobSubTypeList = ({
  jobSubTypeList,
  setDeleteJobSubTypeId,
  deleteModal,
  updateModal,
}: SubTypeListProps) => {
  const { setUpdateJobSubType, setUpdateJobSubTypeInput } =
    useJobSubTypeStore();
  return (
    <Tabs w={"full"}>
      <TabPanels pt={5} h={"50vh"}>
        <TabPanel>
          <TableContainer borderRadius={"xl"}>
            <Card p={0} borderRadius={""} variant={"outline"}>
              <Table variant="simple">
                <Thead bg={"gray.100"} rounded={"xl"}>
                  <Tr>
                    <Th>Name</Th>

                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {jobSubTypeList &&
                    jobSubTypeList.map((jobSubType) => (
                      <Tr key={jobSubType.id}>
                        <Td>{jobSubType.name}</Td>

                        <Td>
                          <IconButton
                            aria-label="Search database"
                            as={NavLink}
                            icon={<EditIcon />}
                            onClick={() => {
                              setUpdateJobSubType(jobSubType.id),
                                setUpdateJobSubTypeInput(jobSubType.name),
                                updateModal.onOpen();
                            }}
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
                            onClick={() => {
                              setDeleteJobSubTypeId(jobSubType.id);
                              deleteModal.onOpen();
                            }}
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
  );
};

export default JobSubTypeList;
