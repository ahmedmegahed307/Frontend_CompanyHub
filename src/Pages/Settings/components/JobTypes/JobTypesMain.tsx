import {
  Tabs,
  TabPanels,
  TabPanel,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Card,
  Spacer,
  Button,
  Input,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  AbsoluteCenter,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

import useCreateJobType from "../../hooks/JobType/useCreateJobType";
import useJobType from "../../hooks/JobType/useJobType";
import useJobTypeMutation from "../../hooks/JobType/useJobTypeMutation";
import DeleteJobType from "./DeleteJobType";
import { JobType } from "../../../../services/JobTypeService/jobtype-service";
import JobTypeList from "./JobTypeList";
import CreateJobType, { FormCreateValidation } from "./CreateJobType";
import UpdateJobType, { FormUpdateValidation } from "./UpdateJobType";
import useJobTypeStore from "../../hooks/JobType/store";
const JobTypesMain = () => {
  // get jobTypeList
  const { data: jobTypeList } = useJobType();
  console.log("dataJobType", jobTypeList);
  const { updateJobTypeId, updateJobTypeInput } = useJobTypeStore();
  //create

  const createJobTypeQuery = useCreateJobType(() => {
    createModal.onClose();
  });

  const createModal = useDisclosure();

  const handleCreateForm = (data: FormCreateValidation) => {
    createJobTypeQuery({
      name: data.name,
      jobSubTypeId: parseInt(data.jobSubTypeId),
    } as JobType);
  };

  //update
  const updateModal = useDisclosure();

  const updateJobType = useJobTypeMutation(() => {
    updateModal.onClose();
  }, true);
  const handleUpdateForm = (data: FormUpdateValidation) => {
    console.log("data", data);
    updateJobType.mutate({
      name: data.name,
      jobSubTypeId: parseInt(data.jobSubTypeId),
      id: updateJobTypeId,
    } as JobType);
  };

  //delete
  const deleteModal = useDisclosure();
  const [deleteJobTypeId, setDeleteJobTypeId] = useState(0);

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
          <Heading
            size={"lg"}
            w={"full"}
            py={10}
            textAlign={"left"}
            color={"#1396ab"}
          >
            JobType List
          </Heading>
          <Spacer />

          <Button
            onClick={() => {
              createModal.onOpen();
            }}
            leftIcon={<AddIcon />}
            my={10}
            px={10}
            py={5}
            colorScheme="blue"
            variant={"solid"}
            size={"sm"}
            bg={"#294c58"}
          >
            Add Job Type
          </Button>
        </Flex>

        <JobTypeList
          jobTypeList={jobTypeList}
          setDeleteJobTypeId={setDeleteJobTypeId}
          updateModal={updateModal}
          deleteModal={deleteModal}
        />
      </Flex>

      {/* create */}
      <Drawer
        size={"lg"}
        onClose={createModal.onClose}
        isOpen={createModal.isOpen}
      >
        <CreateJobType onSubmit={handleCreateForm} />
      </Drawer>

      {/* Update modal  */}

      <Drawer
        size={"lg"}
        onClose={updateModal.onClose}
        isOpen={updateModal.isOpen}
      >
        <UpdateJobType
          onSubmit={handleUpdateForm}
          defaultValue={updateJobTypeInput}
        />
      </Drawer>

      {/* Delete Modal  */}
      <DeleteJobType
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
        jobTypeId={deleteJobTypeId}
      />
    </>
  );
};

export default JobTypesMain;
