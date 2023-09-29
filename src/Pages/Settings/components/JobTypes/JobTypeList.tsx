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
  Spacer,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { User } from "../../../../services/UserService/user-service";
import { JobType } from "../../../../services/JobTypeService/jobtype-service";
import useJobTypeStore from "../../hooks/JobType/store";
import PaginationTable from "../PaginationTable/PaginationTable";

type UsersListProps = {
  jobTypeList: JobType[] | undefined;
  setDeleteJobTypeId: (id: number) => void;
  deleteModal: any;
  updateModal: any;
};

const JobTypeList = ({
  jobTypeList,
  setDeleteJobTypeId,
  deleteModal,
  updateModal,
}: UsersListProps) => {
  const { setUpdateJobType, setUpdateJobTypeInput } = useJobTypeStore();
  return (
    <Card
      p={0}
      borderRadius={"xl"}
      width={"full"}
      variant={"outline"}
      borderRight={"hidden"}
      overflow={"scroll"}
    >
      <Table size="md" rounded={"xl"} borderRadius={"xl"}>
        <Thead
          p={0}
          m={0}
          borderRadius={"xl"}
          bg={"#F7F7FB"}
          shadow={"none"}
          w={"full"}
        >
          <Tr>
            <Th>Name</Th>
            <Th>Job Type</Th>

            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {jobTypeList &&
            jobTypeList.map((jobType, index) => (
              <Tr
                key={jobType.id}
                bg={index % 2 != 0 ? "Neutral.100" : "white"}
              >
                <Td>{jobType.name}</Td>
                <Td>{jobType.jobSubType}</Td>

                <Td display={"flex"}>
                  <IconButton
                    aria-label="Search database"
                    as={NavLink}
                    icon={<EditIcon />}
                    onClick={() => {
                      setUpdateJobType(jobType.id),
                        setUpdateJobTypeInput(jobType),
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
                      setDeleteJobTypeId(jobType.id);
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
      <Spacer></Spacer>
      <PaginationTable data={jobTypeList} table={jobTypeList} />
    </Card>
  );
};

export default JobTypeList;
