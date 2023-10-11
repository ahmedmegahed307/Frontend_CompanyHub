import {
  Flex,
  Heading,
  Spacer,
  Button,
  useDisclosure,
  Drawer,
} from "@chakra-ui/react";
import { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

import CreateJobSubType, { FormCreateValidation } from "./CreateJobSubType";
import UpdateJobSubType, { FormUpdateValidation } from "./UpdateJobSubType";
import { JobSubType } from "../../../../services/JobSubTypesService/jobsubtype-service";
import DeleteJobSubType from "./DeleteJobSubType";
import JobSubTypeList from "./JobSubTypeList";
import useJobSubTypeStore from "../../../../hooks/Settings/JobSubType/store";
import useCreateJobSubType from "../../../../hooks/Settings/JobSubType/useCreateJobSubType";
import useJobSubTypeMutation from "../../../../hooks/Settings/JobSubType/useJobSubTypeMutation";
import useJobSubType from "../../JobSubType/useJobSubType";
const JobSubTypesMain = () => {
  // get JobSubTypeList
  const { data } = useJobSubType();
  const { updateJobSubTypeId, updateJobSubTypeInput } = useJobSubTypeStore();
  //create

  const createJobSubTypeQuery = useCreateJobSubType(() => {
    createModal.onClose();
  });

  const createModal = useDisclosure();

  const handleCreateForm = (data: FormCreateValidation) => {
    createJobSubTypeQuery({
      name: data.name,
    } as JobSubType);
  };

  //update
  const updateModal = useDisclosure();

  const updateJobSubType = useJobSubTypeMutation(() => {
    updateModal.onClose();
  }, true);
  const handleUpdateForm = (data: FormUpdateValidation) => {
    console.log("data", data);
    updateJobSubType.mutate({
      name: data.name,
      id: updateJobSubTypeId,
    } as JobSubType);
  };

  //delete
  const deleteModal = useDisclosure();
  const [deleteJobSubTypeId, setDeleteJobSubTypeId] = useState(0);

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
            JobSubType List
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
            Add Job SubType
          </Button>
        </Flex>

        <JobSubTypeList
          jobSubTypeList={[]}
          setDeleteJobSubTypeId={setDeleteJobSubTypeId}
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
        <CreateJobSubType onSubmit={handleCreateForm} />
      </Drawer>

      {/* Update modal  */}

      <Drawer
        size={"lg"}
        onClose={updateModal.onClose}
        isOpen={updateModal.isOpen}
      >
        <UpdateJobSubType
          onSubmit={handleUpdateForm}
          defaultValue={updateJobSubTypeInput}
        />
      </Drawer>

      {/* Delete Modal  */}
      <DeleteJobSubType
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
        jobSubTypeId={deleteJobSubTypeId}
      />
    </>
  );
};

export default JobSubTypesMain;
